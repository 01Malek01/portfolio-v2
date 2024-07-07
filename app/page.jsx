'use client';
import { useState, useEffect } from 'react';
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";
import Footer from '@/components/Footer';
import { IoMdRocket } from "react-icons/io";



export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Header />
      <Hero />
      <div id='who-am-i'>
        <WhoAmI />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {showScrollToTop && (
        <button className="scroll-to-top text-sm flex flex-col hover:text-[#FFD700] hover:scale-125 transition-all tracking-tight" onClick={scrollToTop}>
          <IoMdRocket size={50} />
          <span className='text-sm'>Top</span>
        </button>
      )}
      <Footer />
    </main>
  );
}
