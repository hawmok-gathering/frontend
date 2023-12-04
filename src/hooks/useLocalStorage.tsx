import { useState, useEffect } from "react";

// function getSavedValue(key: string, initialValue: any) {
//   const savedValue = JSON.parse(localStorage?.getItem(key) as string);
//   if (savedValue) {
//     return savedValue;
//   }

//   if (initialValue instanceof Function) {
//     return initialValue();
//   }

//   return initialValue;
// }

export default function useLocalStorage(key: string, initialValue: any) {
  function getSavedValue(key: string, initialValue: any) {
    const savedValue = JSON.parse(localStorage?.getItem(key) as string);
    if (savedValue) {
      return savedValue;
    }
    if (initialValue instanceof Function) {
      return initialValue();
    }
    return initialValue;
  }

  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { setValue, value };
}
