import Loader from '../components/ui/Loader';
import Cursor from '../components/ui/Cursor';
import Seo from '../components/ui/Seo';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/sections/Hero';
import WhatWeBuild from '../components/sections/WhatWeBuild';
import BuildInMotion from '../components/sections/BuildInMotion';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Showcase from '../components/sections/Showcase';
import Closing from '../components/sections/Closing';

export default function Home() {
  return (
    <>
      <Seo title="ZENQUBIX | Websites built to perform" description="ZENQUBIX is a web development studio building fast, accessible, conversion-focused websites, supported by SEO, digital marketing and graphic design." />
      <Loader />
      <Cursor />
      <Header />
      <main id="top">
        <Hero />
        <WhatWeBuild />
        <BuildInMotion />
        <TechStack />
        <Process />
        <Services />
        <Showcase />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
