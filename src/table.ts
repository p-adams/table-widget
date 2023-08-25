export function setupTable(element: HTMLDivElement, tableData: TableData) {
  const tableStyle = `display: grid; grid-template-columns: repeat(${tableData.columnNames.length}, 1fr)`;
  element.innerHTML = `<div id="table-wrapper">
        <div id="filters">
          <input placeholder="Search..."/>
        </div>
        <div id="table">
        
        </div>
    </div>`;

  const tableElement = document.getElementById("table");

  function renderTable(tableData: TableData) {
    tableElement!.innerHTML = "";
    const headerRow = document.createElement("div");
    headerRow.classList.add("header-row");
    headerRow.style.display = "grid";
    headerRow.style.gridTemplateColumns = `repeat(${tableData.columnNames.length}, 1fr)`;

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
      row.style.gridTemplateColumns = `repeat(${tableData.columnNames.length}, 1fr)`;
      tableData.columnNames.forEach((columnName) => {
        const cell = document.createElement("div");
        cell.textContent = rowData.data[columnName.toLowerCase()];
        row.appendChild(cell);
      });

      tableElement!.appendChild(row);
    });
  }

  renderTable(tableData);
}
