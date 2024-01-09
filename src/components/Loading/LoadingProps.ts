export enum LoadingType {
  circle = 1,
  dot = 2,
  progress = 3,
}
export default interface LoadingProps {
  type: LoadingType;
  alt?: string;
  width?: number;
  height?: number;
}
