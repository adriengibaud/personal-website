import Head from 'next/head';
import Image from 'next/image';
import HomeBody from '../components/Home/HomeBody';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrien Gibaud web dev</title>
        <meta name='description' content='web developer portfolio' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <HomeBody />
    </>
  );
}
