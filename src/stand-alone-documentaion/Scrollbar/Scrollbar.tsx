import { Root as ScrollRoot, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import React from 'react';

function ScrollbarSample(): JSX.Element {
  return (
    <ScrollRoot dir="rtl" className="o-scrollbar">
      <Viewport className="o-scrollbar__viewport {">
        <ul>
          <li>Item 1</li>
        </ul>
      </Viewport>

      <Scrollbar className="o-scrollbar__area" orientation="horizontal">
        <Thumb className="o-scrollbar__thumb" />
      </Scrollbar>
    </ScrollRoot>
  );
}

export default ScrollbarSample;
