"use client";
import { useState, useEffect } from "react";

function getSavedValue(key: string, initialValue: any) {
  try {
    const savedValue = JSON.parse(localStorage?.getItem(key) as string);
    if (savedValue) {
      return savedValue;
    } else if (initialValue instanceof Function) {
      return initialValue();
    }
  } catch (e) {}

  return initialValue;
}

export default function useLocalStorage<T>(key: string, initialValue: any) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { setValue, value };
}
