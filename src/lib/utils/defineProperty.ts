type InferValue<Prop extends PropertyKey, Desc> = Desc extends { get(): any; value: any }
  ? never
  : Desc extends { value: infer T }
  ? Record<Prop, T>
  : Desc extends { get(): infer T }
  ? Record<Prop, T>
  : never;

type DefineProperty<Prop extends PropertyKey, Desc extends PropertyDescriptor> = Desc extends {
  writable: any;
  set(val: any): any;
}
  ? never
  : Desc extends { writable: any; get(): any }
  ? never
  : Desc extends { writable: false }
  ? Readonly<InferValue<Prop, Desc>>
  : Desc extends { writable: true }
  ? InferValue<Prop, Desc>
  : Readonly<InferValue<Prop, Desc>>;

/**
 * This function defines a property on an object with a given key and descriptor.
 * @param {Obj} obj - The object on which the property is being defined.
 * @param {Key} prop - prop is a generic type parameter that extends PropertyKey, which means it can be
 * any value that can be used as a property key in an object, such as a string or a symbol. It
 * represents the name of the property that we want to define or modify on the object.
 * @param {PDesc} val - val is a variable of type PDesc, which represents a property descriptor object
 * that defines the attributes of a property in an object. It can contain properties such as value,
 * writable, enumerable, and configurable. This parameter is used to set the property descriptor of the
 * property being defined in the object.
 */
function defineProperty<
  Obj extends object,
  Key extends PropertyKey,
  PDesc extends PropertyDescriptor,
>(obj: Obj, prop: Key, val: PDesc): asserts obj is Obj & DefineProperty<Key, PDesc> {
  Object.defineProperty(obj, prop, val);
}

export default defineProperty;
