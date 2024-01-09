import '../styles/main.scss';
import '@styles/03-generic/generic.fonts.scss';
import '@styles/03-generic/generic.icons.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
