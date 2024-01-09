/**
 * This function scrolls the window to a specified point with a smooth behavior.
 * @param {number} [top] - The vertical pixel value to which the window should be scrolled. If this
 * parameter is not provided or is falsy, the function will return without doing anything.
 * @param {ScrollBehavior | undefined} [behavior=smooth] - The behavior parameter is an optional
 * parameter that specifies the scrolling behavior. It can be set to either "auto", "smooth", or
 * undefined. If set to "smooth", the scrolling will be animated smoothly. If set to "auto", the
 * scrolling will be instant. If undefined, the browser will use default behavior.
 * @returns Nothing is being returned explicitly in this code. The function has a return type of
 * `void`, which means it does not return any value.
 */

// eslint-disable-next-line import/prefer-default-export
export const scrollToPoint = (
  top?: number,
  behavior: ScrollBehavior | undefined = 'smooth',
): void => {
  if (!top) return;

  window.scrollTo({
    top,
    behavior,
  });
};
