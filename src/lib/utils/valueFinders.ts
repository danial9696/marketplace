/**
 * This TypeScript function returns the element in an array of HTMLElements that is closest to the top
 * of the viewport.
 * @param {HTMLElement[]} arr - an array of HTMLElements, which are the elements we want to find the
 * one with the minimum distance to the top of the viewport.
 */
export const minDisatanceToTop = (arr: HTMLElement[]): HTMLElement =>
  arr.reduce((prev, curr) =>
    Math.abs(prev.getBoundingClientRect().top) < Math.abs(curr.getBoundingClientRect().top)
      ? prev
      : curr,
  );

/**
 * The function `minItemFinder` returns the minimum value in an array of numbers, either absolute or
 * not.
 * @param {number[]} arr - an array of numbers from which the minimum value needs to be found.
 * @param {boolean} [abosloute=true] - The `abosloute` parameter is a boolean flag that determines
 * whether the function should find the minimum absolute value in the array (`true`) or the minimum
 * actual value in the array (`false`). If `true`, the function will use `Math.abs()` to compare the
 * absolute values of the elements in
 * @returns A function that takes an array of numbers and an optional boolean parameter, and returns
 * the minimum value in the array. If the boolean parameter is true, it returns the minimum absolute
 * value in the array.
 */
export const minItemFinder = (arr: number[], abosloute: boolean = true): number => {
  let min: number;

  if (abosloute) {
    min = arr.reduce((prev, curr) => (Math.abs(prev) < Math.abs(curr) ? prev : curr));
  } else {
    min = arr.reduce((prev, curr) => (prev < curr ? prev : curr));
  }

  return min;
};
