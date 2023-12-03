export default function useLocalStorage(key: string) {
  const setItem = (value: unknown) => {
    const find = localStorage.getItem(key);
    const prev = find && JSON.parse(find);

    try {
      if (value instanceof Object && !Array.isArray(value)) {
        window.localStorage.setItem(
          key,
          find
            ? JSON.stringify({ ...prev, ...value })
            : JSON.stringify({ ...value })
        );
        console.log(value);
      } else if (Array.isArray(value)) {
        window.localStorage.setItem(
          key,
          find
            ? JSON.stringify([...prev, ...value])
            : JSON.stringify([...value])
        );
        console.log(value);
      } else {
        window.localStorage.setItem(
          key,
          find ? JSON.stringify(prev + "," + value) : JSON.stringify(value)
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getItem = () => {
    try {
      const find = localStorage.getItem(key);
      return find && JSON.parse(find);
    } catch (e) {
      console.log(e);
    }
  };

  return { setItem, getItem };
}
