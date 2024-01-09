import clsx from 'clsx';
import styles from '@styles/06-components/lists/sticky/list.module.scss';
import StickyListProps from './StickyListProps';
import useStickyList from './useStickyList';

// TODO: Add on click with smooth behavior go to element

/* The code defines a functional component called `StickyList` that takes in a single parameter `props`
of type `StickyListProps` and returns a JSX element. */
function StickyList(props: StickyListProps): JSX.Element {
  /* Destructuring the values returned from the `useStickyList` hook and assigning them to the
  corresponding variables. `sticky` is a boolean value indicating whether the sticky header is
  currently active or not, `stickyRef` is a reference to the sticky header element, `refGenerator`
  is a function that generates a reference to a specific content section, and `onClickScrollToView`
  is a function that handles scrolling to a specific content section when a header item is clicked */
  const { sticky, stickyRef, refGenerator, onClickScrollToView } = useStickyList();

  return (
    <nav>
      {props.items && props.items.length > 0 ? (
        <>
          <ul
            ref={stickyRef}
            className={clsx(styles['st-list__header'], 'd-none d-md-flex', {
              [styles['st-list__header--sticky']]: sticky,
            })}
          >
            {props.items.map((item) => (
              <li
                className={`${styles['st-list__header-item']} px-6`}
                data-attr={item.id}
                key={item.id}
              >
                <button type="button" onClick={() => onClickScrollToView(props.items, item.id)}>
                  {item.icon ? <i className={`ic ic-${item.icon}`} /> : null}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {props.contents && props.contents.length > 0
            ? props.contents.map((item, index) => (
                <div
                  className="mt-6"
                  ref={(el) => refGenerator(el, index)}
                  key={item.id}
                  id={item.id}
                  data-attr={item.id}
                >
                  <h6 className={`${styles['st-list__content-title']} mb-xxs-3 mb-md-5`}>
                    {item.icon ? <i className={`ic ic-${item.icon} d-none d-md-block`} /> : null}
                    {item.title}
                  </h6>
                  <div>{item.data}</div>
                </div>
              ))
            : null}
        </>
      ) : null}
    </nav>
  );
}

export default StickyList;
