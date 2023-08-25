# Table Widget

## Usage

```
import { setupTable } from "./table.ts";

const tableData: TableData = {
  columnNames: ["NAME", "AGE", "EMAIL", "PHONE"],
  rows: [
    {
      id: 0,
      data: {
        name: "John",
        age: "25",
        email: "john@example.com",
        phone: "123-456-7890",
      },
    },
    {
      id: 1,
      data: {
        name: "Alice",
        age: "30",
        email: "alice@example.com",
        phone: "987-654-3210",
      },
    },
    {
      id: 2,
      data: {
        name: "Bob",
        age: "40",
        email: "bob@example.com",
        phone: "555-555-5555",
      },
    },
    {
      id: 3,
      data: {
        name: "Eve",
        age: "35",
        email: "eve@example.com",
        phone: "111-222-3333",
      },
    },
    {
      id: 4,
      data: {
        name: "Charlie",
        age: "28",
        email: "charlie@example.com",
        phone: "777-888-9999",
      },
    },
  ],
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="main">
    <h1>Table Widget</h1>
    <div id="tableWidget"></div>
  </section>
`;

setupTable(document.querySelector("#tableWidget")!, tableData);

```
