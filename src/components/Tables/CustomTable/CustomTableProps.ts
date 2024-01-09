interface CustomTableCellItem {
  id: string;
  value: string;
}
export interface CustomTableRowItem {
  id: string;
  disabled?: boolean;
  data: CustomTableCellItem[];
}

export default interface CustomTableProps {
  header: {
    title: string;
    id: string;
  }[];

  content: CustomTableRowItem[];
}
