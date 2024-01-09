export default interface SliderProps {
  range: {
    min: number;
    max: number;
    step: number;
    minStepsBetweenThumbs: number;
  };
  name: string;
  dir: 'ltr' | 'rtl';
  ariaLabel?: string;
  width: number;
  sendSelectedValues?: (value: number[]) => void;
}
