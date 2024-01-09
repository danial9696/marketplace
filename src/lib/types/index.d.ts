declare namespace React {
  type ClassicFunctionComponent<T = {}> = React.FC<{ children?: React.ReactNode } & T>;
  type CFC<T = {}> = ClassicFunctionComponent<T>;

  /* Shorthand for React.ForwardRefRenderFunction */
  type FRF<T, P = {}> = React.ForwardRefRenderFunction<T, P>;
}

declare type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

declare namespace Api {
  interface ResponseBody<T = {}> {
    message: string;
    data: T;
    success: boolean;
  }

  type RB<T = any> = ResponseBody<T>;
}
