import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, SetValue<T>] {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? String(defaultValue));
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
