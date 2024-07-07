'use client';
import React, { useEffect, useRef } from "react";
import "../styles/Header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {motion} from "framer-motion";


function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }, []);
  })




  return (
    <div className="header-wrapper ">

      <div className="header-container flex flex-row items-center  bg-[#53535371] h-[60px] justify-between w-full fixed top-0 z-50">

        <MobileMenu />
        <div className="logo flex items-center justify-center ">
          <span className="custom-font ml-5 md:text-[1.6rem] text-black">
            <Image src={"/malek mostafa.png"} alt="logo" width={60} height={60} />
          </span>
        </div>
        <div className="nav flex flex-row gap-[1.3rem] justify-center items-center">
          {[
            { href: '#who-am-i', label: 'Who am I ?' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact me' }
          ].map((link, index) => (
            <Link key={link.href} href={link.href} className="">
              <motion.div 
              initial={{ opacity: 0,y: -100 }}
              animate={{ opacity: 1,y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
                className=" font-bold link hover:animate-pulse bg-black rounded-full p-2 flex items-center justify-center">
                {link.label}
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="accounts flex flex-row gap-7 justify-center items-center mr-5">
          {
            [
              { href: 'https://github.com/01Malek01', label: 'Github',icon: <BsGithub className="text-[25px] link" /> },
              { href: 'https://www.linkedin.com/in/malek-mostafa-salah-026362222/', label: 'Linkedin',icon: <BsLinkedin className="text-[25px] link" /> },
              { href: 'mailto:malekmostafa0051@gmail.com', label: 'Email' ,icon: <HiOutlineMail className="text-[25px] link" />},].map((link, index) => (
                <Link key={link.href} href={link.href} className="hover:scale-125">
                  <motion.div 
                  initial={{ opacity: 0,x: 100 }}
                  animate={{ opacity: 1,x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className=" font-bold link">
                    {link.icon}
                  </motion.div>
                </Link>
              ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default Header;
