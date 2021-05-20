import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>Hosii</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
