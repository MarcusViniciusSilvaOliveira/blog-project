import Head from 'next/head'
import '../../styles/globals.css'
import { CookiesProvider } from "react-cookie";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/UI/nav/Nav';
import Footer from '../components/UI/footer/Footer';
import { useCookies } from "react-cookie";

function MyApp({ Component, pageProps }) {

  const setCookie = useCookies(["user"])[1];

  //Setting Cookies staticlly to test middleware behaviour
  setCookie('user','jaopreto',{
    path: '/'
  })

  return (
    <CookiesProvider>
      <Head>
        <title>Blog Project - NextJS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div className='container'>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CookiesProvider>
  )
}

export default MyApp
