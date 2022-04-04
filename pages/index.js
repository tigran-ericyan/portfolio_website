import Header from '../components/Header';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  )
}
