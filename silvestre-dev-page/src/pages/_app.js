
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MyNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
