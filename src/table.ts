export function setupTable(element: HTMLDivElement, tableData: TableData) {
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

export function getTableData(tableData: TableData) {
  // TODO: return validated and normalized table data
  return tableData;
}
