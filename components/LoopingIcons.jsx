import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import { gsap } from 'gsap';
import '../styles/LoopingIcons.css';

function LoopingIcons() {
 const iconsRef = useRef([]);
 const [screenWidthLessThan768, setScreenWidthLessThan768] = useState(false);

 useEffect(() => {
  // Check screen width on mount and resize
  const handleResize = () => {
   setScreenWidthLessThan768(window.innerWidth < 768);
  };

  handleResize(); // Initial check
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 const addToRefs = (el) => {
  if (el && !iconsRef.current.includes(el)) {
   iconsRef.current.push(el);
  }
 };

 useEffect(() => {
  iconsRef.current.forEach((icon, index) => {
   gsap.to(icon, {
    x: screenWidthLessThan768 ? `random(-80, 60)` : `random(-200, 200)`,
    y: screenWidthLessThan768 ? `random(-80, 60)` : `random(-200, 200)`,
    repeat: -1,
    yoyo: true,
    duration: 4,
    delay: 0.5 + (index * 0.2),
    ease: 'power1.inOut',
   });
  });
 }, [screenWidthLessThan768]);

 return (
  <div className="loop md:h-[500px] md:w-[500px]">
   {[FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaReact, SiNextdotjs, FaNodeJs, SiExpress, SiMongodb, SiMongoose].map((Icon, index) => (
    <div key={index} ref={addToRefs} className="icon-container">
     <Icon   size={screenWidthLessThan768 ? 50 : 100} className='icon' />
    </div>
   ))}
  </div>
 );
}

export default LoopingIcons;
