import { ReactElement } from 'react';

interface CarouselItem {
  content: ReactElement;
  id: string;
}

export default interface CarouselProps {
  data: CarouselItem[];
}
