export function setupTable(element: HTMLDivElement, tableData: TableData) {
  element.innerHTML = `<div id="table-wrapper">
        <div id="filters">
          <input id="searchInput" placeholder="Search..."/>
          <button id="searchBtn">enter</button>
        </div>
        <div id="table"></div>
    </div>`;

  const tableElement = document.getElementById("table");
  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const searchBtn = document.getElementById("searchBtn");
  const tableRender = renderTable(tableElement!);
  tableRender(tableData);

  searchBtn?.addEventListener("click", () => {
    const search = searchInput!.value.trim();
    // Filter the rows based on the search input
    const searchMatches = tableData.rows.filter((row) => {
      // Check each column's value for a match
      for (const columnName of tableData.columnNames) {
        const cellValue = row.data[columnName.toLowerCase()];
        if (cellValue.includes(search)) {
          return true; // Include the row in the search results
        }
      }
      return false; // Exclude the row from the search results
    });

    const filteredTableData: TableData = {
      columnNames: tableData.columnNames,
      rows: searchMatches,
    };

    tableRender(filteredTableData);
  });
}

function renderTable(tableElement: HTMLElement) {
  return (tableData: TableData) => {
    const columnStyle = `repeat(${tableData.columnNames.length}, 1fr)`;
    tableElement!.innerHTML = "";

    const headerRow = document.createElement("div");
    headerRow.classList.add("header-row");
    headerRow.style.display = "grid";
    headerRow.style.gridTemplateColumns = columnStyle;

    tableData.columnNames.forEach((columnName) => {
      const headerCell = document.createElement("div");
      headerCell.classList.add("header");
      headerCell.textContent = columnName;
      headerRow.appendChild(headerCell);
    });

    tableElement!.appendChild(headerRow);

    // Create and append rows
    tableData.rows.forEach((rowData) => {
      const row = document.createElement("div");
      row.classList.add("row");
      row.style.display = "grid";
      row.style.gridTemplateColumns = columnStyle;
      tableData.columnNames.forEach((columnName) => {
        const cell = document.createElement("div");
        cell.textContent = rowData.data[columnName.toLowerCase()];
        row.appendChild(cell);
      });

      tableElement!.appendChild(row);
    });
  };
}
