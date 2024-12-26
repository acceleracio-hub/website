import { useEffect, useState } from "react";
import debounce from "lodash-es/debounce";

/**
 * Хук, который следит за ресайзом
 */
export function useResizeObserver() {
  const [dimensions, setDimensions] = useState(() => ({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  }));

  useEffect(() => {
    // Проверяем наличие объекта window
    if (typeof window === "undefined") {
      return undefined; // Возвращаем undefined в случае серверной среды
    }

    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    // Возвращаем функцию для очистки
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз

  return dimensions;
}
