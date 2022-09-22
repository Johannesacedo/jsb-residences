import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
  </>
    
  )
}

export default MyApp
