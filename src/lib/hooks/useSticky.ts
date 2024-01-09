import { RefObject, useEffect, useRef, useState } from 'react';

/**
 * This is a TypeScript function that returns a ref object and a boolean value indicating whether an
 * element is sticky based on the current scroll position.
 * @returns The function `useSticky` returns an object with two properties: `stickyRef` and `sticky`.
 * `stickyRef` is a reference to an HTML element that is used to determine the offset for the sticky
 * behavior. `sticky` is a boolean value that indicates whether the element should be sticky or not
 * based on the current scroll position.
 */
const useSticky = <T extends HTMLElement>(): { stickyRef: RefObject<T>; sticky: boolean } => {
  const stickyRef = useRef<T>(null);
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }

    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  useEffect(() => {
    /**
     * The function checks if the window has been scrolled past a certain offset and sets a sticky state
     * accordingly.
     * @returns If the `stickyRef.current` is falsy (e.g. `null`, `undefined`, `false`, `0`, `NaN`, or an
     * empty string), the function returns nothing (`undefined`). Otherwise, it sets the state of
     * `sticky` based on whether the `window.scrollY` value is greater than the `offset` value.
     */
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      setSticky(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSticky, stickyRef, offset]);

  return { stickyRef, sticky };
};

export default useSticky;
