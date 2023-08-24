export function setupTable(element: HTMLDivElement, tableData: TableData) {
  const tableStyle = `display: grid; grid-template-columns: repeat(${tableData.columnNames.length}, 1fr)`;
  element.innerHTML = `<div id="table">
        <div id="thead" class="row th" style="${tableStyle}">
        </div>
        <div id="tbody" class="row td" style="${tableStyle}"> 
        </div>
    </div>`;

  const $thead = document.querySelector("#thead");
  const $tbody = document.querySelector("#tbody");
  for (const [i, name] of tableData.columnNames.entries()) {
    const $el = document.createElement("div");
    $el.innerHTML = `<div>${name}</div>`;
    $thead?.appendChild($el);
  }
  for (const [i, row] of tableData.rows.entries()) {
    const $el = document.createElement("div");
    $el.innerHTML = `<div>${row.data}</div>`;
    $tbody?.appendChild($el);
  }
}
