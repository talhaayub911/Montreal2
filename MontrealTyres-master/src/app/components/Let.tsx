import React from "react";
import Image from "next/image";
// import { url } from "inspector";

const Let = () => {
  return (
    <>
      <section
        className="flex justify-between w-full h-[540px] 
    items-center max-xl:flex-col-reverse gap-10 mx-auto 
    bg-cover ml-auto mr-auto  "
        style={{ backgroundImage: `url('/assets/curve1.png')` }}
      >
        <div className="flex-1 ml-0 mt-5">
          <Image
            src="/assets/AboutImg.png"
            width="652"
            height="540"
            alt="Description of your image"
          />
        </div>
        <div className="flex flex-1 flex-col mt-20 mr-[180px]">
          <h2 className="text-black font-montserrat text-2xl font-semibold leading-9">
            About Montreal
          </h2>
          <Image
            src="/assets/SliderLine2.png"
            alt="slider"
            width={138}
            height={6}
          />

          <div className="mt-8 font-abc">
            <p className="m-0 font-medium">
              We’re more than just a tire company;
              <br />
              we’re your trusted partners on the road.
            </p>
            <p className="mt-4 font-medium">
              With a passion for delivering top-notch
            </p>
            <p className="m-0 font-medium">
              tire solutions, we have been serving for over a decade.
            </p>
            <p className="m-0 font-medium">&nbsp;</p>
            <p className="m-0">
              <span className="font-medium">{`Discover the `}</span>
              <b className="font-abc">MONTREAL TIRES</b>
              <span className="font-medium font-montserrat">
                {` difference today,`}
                <br />
                {`where `}
              </span>
              <i className="font-semibold font-montserrat">
                Quality, Reliability and Customer Satisfaction
              </i>
              <span className="font-medium font-montserrat">{` `}</span>
            </p>
            <p className="m-0 font-medium">drive everything we do.</p>
          </div>
          <div className="flex gap-6">
            <div className="flex mb-6 mt-16">
              <Image
                className="w-full"
                src="/assets/Vector 3.png"
                width={188}
                height={52}
                alt="aaa"
              />
              <div className=" w-60 h-20 font-abc text-[16px] top-1817 absolute ml-12 mt-[15px] font-medium text-white">
                Join Us
              </div>
            </div>
            <div className="flex mb-6 mt-16  ">
              <Image
                src="/assets/BorderImg.png"
                width={188}
                height={52}
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex justify-between  
    items-center max-xl:flex-col-reverse gap-10 mx-auto
    bg-cover w-full h-[265px]    ml-7  "
        style={{ backgroundImage: `url('/assets/curve2.png')` }}
      >
        <div className="flex justify-around gap-[100px] ml-auto mr-12 mt-[50px] ">
          <div>
            <h1 className="text-[#1A355A] text-[54px] text-center font-Montserrat text-4xl font-semibold leading-14">
              25 <span className="ml-14 text-gray-400">/</span>
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-4">Awards</p>
          </div>
          <div>
            <h1 className="text-[#1A355A]  text-[54px] text-center font-Montserrat text-4xl font-semibold leading-14">
              4562 <span className="ml-14 text-gray-400">/</span>
            </h1>

            <p className="text-[14px] font-abc text-[#182F43] mt-4">
              Happy Clients
            </p>
          </div>
          <div>
            <h1 className=" text-[#1A355A]  text-[54px] text-center font-Montserrat text-4xl font-semibold leading-14">
              1569 <span className="ml-14 text-gray-400">/</span>
            </h1>
            <p className="text-[14px] font-abc text-[#182F43] mt-4">
              Questions Answered
            </p>
          </div>
          <div>
            <h1
              className="text-[#1A355A]  mr-[100px]
            text-[54px] text-center font-Montserrat text-4xl font-semibold leading-14"
            >
              2089
            </h1>
            <p className="text-[14px] font-abc  text-[#182F43] mt-4">Orders</p>
          </div>
        </div>
      </section>
      <section className="  h-[50px]"></section>
    </>
  );
};

export default Let;
