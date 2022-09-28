// It's ugly but there is an open discussion to fix that
// https://github.com/microsoft/TypeScript/issues/41045
export interface IMap<K, V> extends Map<K, V> {
  get(key: K): V;
  set(key: K, value: V): this;
  entries(): any;
}
