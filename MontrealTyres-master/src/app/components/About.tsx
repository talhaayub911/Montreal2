import React from "react";
import Image from "next/image";
//import { url } from "inspector";

const About = () => {
  return (
    <>
    <section
        className="  flex flex-col sm:flex-row justify-between w-full h-auto sm:h-10 gap-12 mx-auto bg-no-repeat bg-center sm:bg-cover overflow-x-hidden "
    style={{ backgroundImage: `url('/assets/curve1.png')` }}
      >
        <div className="flex-1 ml-10  w-full sm:w-auto mt-5 sm:mt-10 sm:ml-auto"> 
          <img
            src="/assets/AboutImg.png"           
            className="w-20 h-10"
            alt="Description of your image"   
          />
        </div>
        <div className="mr-43 flex flex-1 flex-col w-full mt-34 sm:mt-16 sm:mr-39">
          <h2 className="text-Primary-Black  font-Montserrat text-2xl font-semibold  leading-12">
            About Montreal
          </h2>
          <Image
            src="/assets/SliderLine2.png"
            alt="slider"
            width={138}
            height={6}
          />

          <div className="mt-13 font-Montserrat">
            <p className="m-34 font-medium">
              We’re more than just a tire company;
              <br />
              we’re your trusted partners on the road.
            </p>
            <p className="mt-44 font-medium">
              With a passion for delivering top-notch
            </p>
            <p className="m-34 font-medium">
              tire solutions, we have been serving for over a decade.
            </p>
            <p className="m-34 font-medium">&nbsp;</p>
            <p className="m-34">
              <span className="font-medium">{`Discover the `}</span>
              <b className="font-Montserrat">MONTREAL TIRES</b>
              <span className="font-medium font-Montserrat">
                {` difference today,`}
                <br />
                {`where `}
              </span>
              <i className="font-semibold font-Montserrat">
                Quality, Reliability and Customer Satisfaction
              </i>
              <span className="font-medium font-Montserrat">{` `}</span>
            </p>
            <p className="m-34 font-medium">drive everything we do.</p>
          </div>
          <div className=" mb-14  flex flex-col sm:flex-row gap-11">
            <div className="     flex flex-col mb-13 mt-42 sm:mt-42">
              <img
                className="w-14 h-11"
                src="/assets/Vector 3.png"
                alt="aaa"
              />
              <div className=" w-60 h-12   top-1817 absolute ml-42  mt-36 sm:mt-40 font-Montserrat font-medium text-Primary-White">
                Join Us
              </div>
            </div>
            <div className="   flex mb-13 mt-41 sm:mt-42 ">
              <img
                src="/assets/BorderImg.png"
                className="w-14 h-11"
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </section>

{/* 
      <section
        className="flex flex-col sm:flex-row justify-between w-full h-auto sm:h-[540px] gap-10 mx-auto bg-no-repeat bg-center sm:bg-cover overflow-x-hidden"
        style={{ backgroundImage: `url('/assets/curve1.png')` }}
      >
        <div className="w-full sm:w-auto mt-5 sm:mt-0 sm:ml-auto">
          <img
            src="/assets/AboutImg.png"
            className="w-full h-auto sm:w-full sm:h-[540px]"
            alt="Description of your image"
          />
        </div>
        <div className="flex flex-1 flex-col w-full mt-10 sm:mt-20 sm:mr-[5%]">
          <h2 className="text-black font-montserrat text-2xl font-semibold lineHeight-9">
            About Montreal
          </h2>
          <Image
            src="/assets/SliderLine2.png"
            alt="slider"
            width={138}
            height={6}
          />
          <div className="mt-13 font-abc">
            <p className="m-34 font-font-medium">
              We’re more than just a tire company;
              <br />
              we’re your trusted partners on the road.
            </p>
            <p className="mt-44 font-font-medium">
              With a passion for delivering top-notch
            </p>
            <p className="m-34 font-font-medium">
              tire solutions, we have been serving for over a decade.
            </p>
            <p className="m-34 font-font-medium">&nbsp;</p>
            <p className="m-34">
              <span className="font-font-medium">{`Discover the `}</span>
              <b className="font-abc">MONTREAL TIRES</b>
              <span className="font-font-medium font-montserrat">
                {` difference today,`}
                <br />
                {`where `}
              </span>
              <i className="font-semibold font-montserrat">
                Quality, Reliability and Customer Satisfaction
              </i>
              <span className="font-font-font-medium font-montserrat">{` `}</span>
            </p>
            <p className="m-34 font-font-font-medium">drive everything we do.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col mb-6 mt-10 sm:mt-42">
              <img
                className="w-full h-auto sm:w-full sm:h-11"
                src="/assets/Vector 3.png"
                alt="aaa"
              />
              <div className="mt-1 sm:mt-[15px] font-abc font-font-font-medium text-white">
                Join Us
              </div>
            </div>
            <div className="flex mb-6 mt-10 sm:mt-42">
              <img
                src="/assets/BorderImg.png"
                className="w-full h-auto sm:w-full sm:h-11"
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </section> */}
 
       <section
        className="   flex flex-col sm:flex-col justify-between items-center gap-12 mx-auto bg-cover w-full h-13 ml-7  "
    style={{ backgroundImage: `url('/assets/curve2.png')` }}
      >
        <div className="   sm:flex flex-col sm:flex-row justify-around gap-15 sm:gap-16 ml-auto mr-12 mt-13 ">
      
          <div   className="text-center sm:text-left">
            <h1 className="text-Secondary-Blue text-3xl text-center font-Montserrat text-4xl font-semibold leading-13">
              25 <span className=" ml-2 sm:ml-16 text-Primary-Grey ">/</span>
            </h1>
            <p className="text-lg font-Montserrat text-Secondary-Dark mt-44">Awards</p>
          </div>
          <div>
            <h1 className="text-Secondary-Blue  text-3xl text-center font-Montserrat text-4xl font-semibold leading-13">
              4562 <span className=" ml-25 sm:ml-14 text-Primary-Grey">/</span>
            </h1>

            <p className="text-lg  font-Montserrat text-Secondary-Dark mt-44">
              Happy Clients
            </p>
          </div>
          <div className="text-center sm:text-left mt-44 sm:mt-10">
            <h1 className=" text-Secondary-Blue  text-3xl text-center font-Montserrat text-4xl font-semibold leading-13">
    
              1569 <span className=" sm ml-17 sm:ml-45 text-Primary-Grey">/</span>
            </h1>
            <p className="text-lg font-Montserrat text-Secondary-Dark
             mt-44">
              Questions Answered
            </p>
          </div>
          <div>
            <h1
              className="text-Secondary-Blue  mr-30
            text-3xl text-center font-Montserrat text-4xl font-semibold leading-13"
            >
              2089
            </h1>
            <p className="  text-lg font-Montserrat  text-Secondary-Dark mt-44">Orders</p>
          </div>
        </div>
      </section> 

      {/* <section
        className="flex flex-col sm:flex-row justify-between items-center gap-10 mx-auto bg-cover w-full h-13 ml-7"
        style={{ backgroundImage: `url('/assets/curve2.png')` }}
      >
        <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-8 ml-auto mr-12 mt-13">
          <div className="text-center sm:text-left">
            <h1 className="text-[#1A355A] text-[54px] font-Montserrat text-4xl font-semibold leading-13">
              25 <span className="ml-2 sm:ml-14 text-gray-400">/</span>
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-44">Awards</p>
          </div>
          <div className="text-center sm:text-left mt-44 sm:mt-0">
            <h1 className="text-[#1A355A] text-[54px] font-Montserrat text-4xl font-semibold leading-13">
              4562 <span className="ml-2 sm:ml-14 text-gray-400">/</span>
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-44">
              Happy Clients
            </p>
          </div>
          <div className="text-center sm:text-left mt-44 sm:mt-0">
            <h1 className="text-[#1A355A] text-[54px] font-Montserrat text-4xl font-semibold leading-13">
              1569 <span className="ml-2 sm:ml-14 text-gray-400">/</span>
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-44">
              Questions Answered
            </p>
          </div>
          <div className="text-center sm:text-left mt-44 sm:mt-0">
            <h1 className="text-[#1A355A] text-[54px] font-Montserrat text-4xl font-semibold leading-13">
              2089
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-44">Orders</p>
          </div>
        </div>
      </section>
      <section className="  h-[50px]"></section> */}
    </>
  );
};

export default About;
