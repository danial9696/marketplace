import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

function Hover() {
  return (
    <HoverCard.Root>
      {/* <HoverCard.Trigger asChild>
        <div
          style={{
            display: 'block',
            width: '10px',
            height: '10px',
            backgroundColor: 'var(--slider-thumb)',
          }}
        ></div>
      </HoverCard.Trigger> */}
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          byeeeee
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export default Hover;
