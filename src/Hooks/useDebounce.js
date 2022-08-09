import React, { useEffect } from "react";

export default function useDebounce(value = "", delay = 1000) {
  const [debounce, setDebounce] = React.useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {}, delay);
    setDebounce(value);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);
  return debounce;
}
