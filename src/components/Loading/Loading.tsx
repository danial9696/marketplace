import Image from 'next/image';
import LoadingProps from './LoadingProps';

/**
 * The function displays a loading animation based on the specified type.
 * @param {LoadingProps}  - - `alt`: A string that specifies the alternative text for the image if it
 * cannot be displayed.
 * @returns The `Loading` component is being returned as a JSX element. It displays an image of a
 * loading animation based on the `type` prop passed to it. The `setLoadingType` function determines
 * which image to display based on the `type` prop. The `alt`, `width`, and `height` props can also be
 * passed to customize the appearance of the loading animation.
 */
function Loading({ alt = 'loading', type, width = 24, height = 24 }: LoadingProps): JSX.Element {
  /**
   * The function takes a number as input and returns a string representing a specific type of loading
   * animation.
   * @param {number} loadingType - The `loadingType` parameter is a number that represents the type of
   * loading animation to be displayed. It can have a value of 1, 2, or 3, which correspond to
   * different types of loading animations.
   * @returns The function `setLoadingType` returns a string value which is the name of a loading gif
   * file based on the input `loadingType`. If `loadingType` is 1, it returns 'circle-loading.gif', if
   * it is 2, it returns 'dot-loading.gif', if it is 3, it returns 'progress-bar.gif', and if it is any
   * other value, it returns
   */
  const setLoadingType = (loadingType: number): string => {
    switch (loadingType) {
      case 1:
        return 'circle-loading.gif';
      case 2:
        return 'dot-loading.gif';
      case 3:
        return 'progress-bar.gif';
      default:
        return '';
    }
  };

  return (
    <Image
      src={`/images/loadings/${setLoadingType(type)}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Loading;
