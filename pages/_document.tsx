import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} type="image/vnd.microsoft.icon" />
          <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}/neracoos_favicon.png`} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="stylesheet" href="https://openlayers.org/en/v5.2.0/css/ol.css" type="text/css" />
          <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
        </Head>
        
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument      
