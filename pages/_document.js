import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocuments extends Document{
  render() {
    return (
      <Html>
        <Head>
          {/* google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"></link>
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>

      </Html>
    )
  }
}

export default MyDocuments;
