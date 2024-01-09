import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="rtl" style={{ direction: 'rtl' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
