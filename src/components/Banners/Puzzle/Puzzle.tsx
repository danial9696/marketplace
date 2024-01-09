import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from '@styles/06-components/banners/puzzle.module.scss';
import Link from 'next/link';
import PuzzleProps from './PuzzleProps';

// TODO: Change animation effect from flip to fade like:  "https://www.lenovo.com/us/en/?orgRef=https%253A%252F%252Fwww.google.com%252F"

/**
 * This is a functional component in TypeScript React that renders a puzzle banner with a front and
 * back image that flips on hover.
 * @param {PuzzleProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Puzzle` component. These properties include `to` (a string representing the URL to link to),
 * `title` (a string representing the title of the puzzle), `frontUrl` (a string representing the URL
 * @returns A JSX element representing a puzzle banner component with two images (front and back), a
 * link, and a title. The component has a flip animation triggered by mouse hover. The props passed to
 * the component include the URLs for the front and back images, the link destination, and the title.
 */
function Puzzle(props: PuzzleProps): JSX.Element {
  const [flip, setFlip] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      className={clsx(styles['c-puzzle-banner'], {
        [styles['c-puzzle-banner--flip']]: flip,
      })}
    >
      <Link
        className={styles['c-puzzle-banner__link']}
        href={props.to}
        title={props.title}
        target="_blank"
      />

      <div className={`${styles['c-puzzle-banner__img']} ${styles['c-puzzle-banner__img--front']}`}>
        <div className={styles['c-puzzle-banner__img-wrapper']}>
          <Image src={props.frontUrl} alt={props.alt ?? ''} fill />
        </div>
      </div>

      <div className={`${styles['c-puzzle-banner__img']} ${styles['c-puzzle-banner__img--back']}`}>
        <div className={styles['c-puzzle-banner__img-wrapper']}>
          <Image src={props.backUrl} alt={props.alt ?? ''} fill />
        </div>
      </div>

      <h4 className={styles['c-puzzle-banner__title']}>{props.title}</h4>
    </div>
  );
}

export default Puzzle;
