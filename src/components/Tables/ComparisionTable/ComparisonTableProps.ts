interface ProductAttr {
  title: string;
  value?: string;
  id: string;
  icon: string;
}

export interface ComparisonTableItem {
  src: string;
  id: string;
  title: string;
  alt?: string;
  price?: number;
  offPrice?: number;
  attr: ProductAttr[];
}

export default interface ComparisonTableProps {
  title?: string;
  ariaLabel?: string;
  content: ComparisonTableItem[];
}
