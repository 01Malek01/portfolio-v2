import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

function Footer() {
 return (
  <>

   <div className="divider bg-slate-200 h-[0.5px]"></div>

   <footer className=" py-6">
    <div className="container mx-auto flex flex-col items-center justify-center text-center text-slate-200">
     <p className="text-lg mb-4 c-text-secondary">© 2024 Malek Mostafa</p>
     <div className="accounts flex flex-row gap-7 justify-center items-center">
      <span>
       <Link href="https://github.com/01Malek01">
        <BsGithub className="text-[25px] link" />
       </Link>
      </span>
      <span>
       <Link href="https://www.linkedin.com/in/malek-mostafa-salah-026362222/">
        <BsLinkedin className="text-[25px] link" />
       </Link>
      </span>
      <span>
       <Link href="mailto:malekmostafa0051@gmail.com">
        <HiOutlineMail className="text-[25px] link" />
       </Link>
      </span>
      <span>
       <Link href="https://wa.me/201125485384">
        <BsWhatsapp className="text-[25px] link" />
       </Link>
      </span>
     </div>
    </div>
   </footer>
  </>
 );
}

export default Footer;
