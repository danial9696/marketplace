import { useEffect, useRef } from 'react';
import { useSticky } from '@lib/hooks';
import styles from '@styles/06-components/lists/sticky/list.module.scss';
import { minDisatanceToTop, scrollToPoint } from '@lib/utils';
import { StickyListItem } from './StickyListProps';

const useStickyList = () => {
  /* `const observerRefs` is creating a reference to an array of `HTMLDivElement` elements using the
  `useRef` hook. This reference is used to store a list of elements that will be observed for
  changes in the user's scroll position. The initial value of the reference is an empty array `[]`. */
  const observerRefs = useRef<HTMLDivElement[]>([]);

  const { sticky, stickyRef } = useSticky<HTMLUListElement>();

  /**
   * The function handles scrolling and adds/removes a CSS class to an element based on its position
   * relative to the top of the page.
   * @returns If `observerRefs.current` or `observerRefs.current.length` is falsy, the function returns
   * without doing anything. Otherwise, it calculates the minimum distance of an element to the top of
   * the viewport using the `minDisatanceToTop` function and gets the `data-attr` attribute of that
   * element. If `stickyRef.current` exists, it adds the class `st-list__
   */
  const handleScroll = (): void => {
    if (!observerRefs.current || !observerRefs.current.length) return;

    const minDistanceItemToTop = minDisatanceToTop(observerRefs.current);

    const attr = minDistanceItemToTop.getAttribute('data-attr');

    if (stickyRef.current) {
      Array.from(stickyRef.current.children).forEach((item) => {
        if (item.getAttribute('data-attr') === attr) {
          item.classList.add(styles['st-list__header-item--active']);
        } else {
          item.classList.remove(styles['st-list__header-item--active']);
        }
      });
    }
  };

  /**
   * This function generates a reference to a HTMLDivElement and stores it in an array.
   * @param {HTMLDivElement | null} el - HTMLDivElement or null - this is a parameter that represents a
   * reference to a specific HTML div element. It can either be an actual reference to an element or
   * null if the element does not exist.
   * @param {number} index - The index parameter is a number that represents the index of the element
   * in an array or list. In this case, it is used to keep track of the position of the element in the
   * observerRefs array.
   */
  const refGenerator = (el: HTMLDivElement | null, index: number): void => {
    if (el) {
      observerRefs.current[index + 1] = el;
    }
  };

  /**
   * This function scrolls to a specific element on the page based on its ID.
   * @param {StickyListItem[]} data - An array of StickyListItem objects.
   * @param {string} id - The id of the StickyListItem that needs to be scrolled to.
   * @returns If any of the conditions in the if statements are true, then nothing is returned and the
   * function stops executing. If all conditions are false, then the `scrollToPoint` function is called
   * with the offsetTop of the element with the matching `id`.
   */
  const onClickScrollToView = (data: StickyListItem[], id: string) => {
    if (!data || !data.length || !id.length) return;

    const foundedItem = data.find((item) => item.id === id);

    if (!foundedItem) return;

    const foundedItemId = foundedItem.id;

    if (
      !document.getElementById(foundedItemId) ||
      !document?.getElementById(foundedItemId)?.offsetTop
    )
      return;

    scrollToPoint(document.getElementById(foundedItemId)?.offsetTop);
  };

  /* This is a `useEffect` hook that is used to add an event listener to the `window` object for the
  `scroll` event. When the component mounts, it calls the `handleScroll` function and adds the event
  listener. When the component unmounts, it removes the event listener. The empty array `[]` passed
  as the second argument to `useEffect` ensures that the effect only runs once when the component
  mounts and not on subsequent re-renders. */
  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    sticky,
    stickyRef,
    refGenerator,
    onClickScrollToView,
  };
};

export default useStickyList;
