import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </Head>
        <body className='text-black'>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
