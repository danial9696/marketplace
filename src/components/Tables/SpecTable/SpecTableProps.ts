export interface SpecTableItem {
  value: string;
  title: string;
  id: string;
}

export default interface ComparisonTableProps {
  title?: string;
  ariaLabel?: string;
  border?: boolean;
  class?: string;
  content: SpecTableItem[];
}
