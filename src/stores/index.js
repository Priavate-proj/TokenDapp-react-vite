import { useEffect, useState } from 'react';
import { get, writable, readable, derived } from 'svelte/store';

const unset = Symbol();

export function useReadable(store) {
  const [value, set] = useState(unset);

  useEffect(() => store.subscribe(set), [store]);

  return value === unset ? get(store) : value;
}

export function useWritable(store) {
  const value = useReadable(store);
  return [value, store.set, store.update];
}

// Re-export svelte's implementations of the stores.
export { get, writable, readable, derived };
