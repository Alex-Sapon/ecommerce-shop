import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return defaultValue;
      return JSON.parse(serializedValue);
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
