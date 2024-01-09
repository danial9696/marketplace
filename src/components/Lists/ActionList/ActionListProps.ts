export interface HeaderItem {
  title: string;
  data?: string;
}

export interface ActionListItem {
  header?: {
    info: HeaderItem[];
    actions: {
      custom: () => void;
      // delete: (id: string) => void;
    };
  };
  description: string;
  id: string;
  deletable?: boolean;
}

export interface ActionListProps {
  header?: {
    title: string;
    button: {
      title: string;
      icon?: string;
      onClick: () => void;
    };
  };

  content: ActionListItem[];
}
