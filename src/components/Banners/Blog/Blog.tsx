import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import styles from '@styles/06-components/banners/blog.module.scss';
import { BlogBannerProps } from './BlogProps';

// TODO: Add error image when not loading properly
// TODO: Add skeleton image when loading
/**
 * This is a TypeScript React component that renders a blog banner with an image and a title.
 * @param {BlogBannerProps}  - - `url`: a string representing the URL of the blog banner image
 * @returns A JSX element is being returned. Specifically, a `div` element with a child `Image` element
 * and a child `El` element (which is either an `h6` or a custom element specified by the `el` prop).
 */
function Blog({ url, to = '/', el: El = 'h6', title, alt, ratio }: BlogBannerProps): JSX.Element {
  return (
    <AspectRatio ratio={ratio}>
      <Link href={to} target="_blank" className={styles['c-blog']}>
        <Image
          className={styles['c-blog__img']}
          src={url}
          alt={alt ?? ''}
          fill
          // placeholder="blur"
        />
        <El className={`${styles['c-blog__title']} u-subheader1`}>{title}</El>
      </Link>
    </AspectRatio>
  );
}

export default Blog;
