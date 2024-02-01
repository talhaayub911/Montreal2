import React from "react";
//import Image from "next/image";
const Nav = () => {
  return (
    <header className=" py-23 absolute  w-full h-16 padding-x  z-10 ">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto ">
        {/* <a href="/">
          <img
            src="/assets/NavbarImg.png"
            alt="logo"
            width={129}
            height={29}
            className=" w-[201px] h-[32px] ml-[64px] "
          />
        </a> */}
        <a href="/">
          <img
            src="/assets/NavbarImg.png"
            alt="logo"
            width={129}
            height={29}
            className="m-34 w-12 h-15 ml-10 md:ml-15"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center   gap-16 max-lg:hidden">
          <li className="font-Montserrat text-base font-medium leading-14 tracking-tighter  text-Primary-Black">
            Products
          </li>
          <li className="font-Montserrat   text-base font-medium leading-14 tracking-tighter text-Primary-Black ">
            About
          </li>
          <li className="font-Montserrat text-base font-medium leading-14 tracking-tighter  text-Primary-Black">
            Join us
          </li>
          <li className="font-Montserrat text-base font-medium leading-14 tracking-tighter  text-Primary-Black">
            Contact Us
          </li>
        </ul>
        <div
          className="  flex gap-13  text-Primary-Red mr-44
           max-lg:hidden wide:mr-17 font-Montserrat text-base
           font-bold leading-14 tracking-normal  text-left"
        >  
          <a href="/">Find a Dealer</a>
        </div>
        {/* <div className="hidden max-lg:block ">
          <img
            src="/assets/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div> */}
        <div className="hidden max-lg:block absolute top-0 right-0 mr-11 mt-11">
          <img
            src="/assets/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
