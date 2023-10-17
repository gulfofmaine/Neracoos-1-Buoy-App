import 'ol/ol.css'
import '../src/index.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>NERACOOS Mariners Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
