import "./style.css";

import { setupTable } from "./table.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="main">
    <h1>Table Widget</h1>
    <div id="tableWidget"></div>
  </section>
`;

setupTable(document.querySelector("#tableWidget")!);
