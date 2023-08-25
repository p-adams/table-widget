export function setupTable(
  element: HTMLDivElement,
  tableData: ConsumerTableData
) {
  const $tableData = getTableData(tableData);
  const tableStyle = `display: grid; grid-template-columns: repeat(${$tableData.columnNames.length}, 1fr)`;
  element.innerHTML = `<div id="table">
        <div id="thead" class="row th" style="${tableStyle}">
        </div>
        <div id="tbody" class="row td" style="${tableStyle}"> 
        </div>
    </div>`;

  const $thead = document.querySelector("#thead");
  const $tbody = document.querySelector("#tbody");
  for (const [_, name] of $tableData.columnNames.entries()) {
    const $el = document.createElement("div");
    $el.innerHTML = `<div>${name}</div>`;
    $thead?.appendChild($el);
  }
  for (const [_, row] of $tableData.rows.entries()) {
    const $el = document.createElement("div");
    $el.innerHTML = `<div>${row.data}</div>`;
    $tbody?.appendChild($el);
  }
}

export function getTableData(tableData: ConsumerTableData): TableData | null {
  try {
    return validateAndNormalizeTable(tableData);
  } catch (error) {
    // TODO: create error type
    return null;
  }
}

function validateAndNormalizeTable(tableData: ConsumerTableData): TableData {
  const schema = {
    expectedColumns: tableData.columnNames,
  };

  // Validate column names
  if (
    !Array.isArray(tableData.columnNames) ||
    tableData.columnNames.length !== schema.expectedColumns.length ||
    !tableData.columnNames.every(
      (col, index) => col === schema.expectedColumns[index]
    )
  ) {
    throw new Error("Invalid column names");
  }

  // Normalize and validate rows
  const normalizedRows: TableRow[] = [];
  tableData.rows.forEach((row) => {
    const normalizedRow: TableRow = {
      id: row.id,
      data: {},
    };

    schema.expectedColumns.forEach((col) => {
      let cellValue = row.data[col];

      // Handle missing cells or non-string values
      if (typeof cellValue !== "string") {
        cellValue = "";
      }

      // Normalize the cell value to be a string
      normalizedRow.data[col] = cellValue;
    });

    normalizedRows.push(normalizedRow);
  });

  return {
    columnNames: schema.expectedColumns,
    rows: normalizedRows,
  };
}
