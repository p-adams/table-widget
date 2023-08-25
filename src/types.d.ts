interface ConsumerTableData {
  columnNames: Array<string>;
  rows: Array<{ id: number | string; data: string }>;
}

interface TableRow {
  id: number;
  data: Record<string, string>;
}

interface TableData {
  columnNames: string[];
  rows: TableRow[];
}
