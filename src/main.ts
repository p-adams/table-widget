import "./style.css";

import { setupTable } from "./table.ts";

const tableData: ConsumerTableData = {
  columnNames: ["A", "B", "C", "D"],
  rows: [
    { id: 0, data: "1" },
    { id: 1, data: "2" },
    { id: 2, data: "3" },
    { id: 3, data: "4" },
  ],
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="main">
    <h1>Table Widget</h1>
    <div id="tableWidget"></div>
  </section>
`;

setupTable(document.querySelector("#tableWidget")!, tableData);
