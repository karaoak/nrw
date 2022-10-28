import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  console.log('_document');
  return (
    <Html lang="nl">
      <Head></Head>
      <body style={{ padding: '20px' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
