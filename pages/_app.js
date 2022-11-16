import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css'
import '../styles/responsive.css'
import Head from "next/head";
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
<>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</>
);
}

export default MyApp
