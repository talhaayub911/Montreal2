import Image from "next/image";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slide = () => {
  return (
    <div
      className="mr-29  w-full h-19 "
      style={{
        backgroundImage: `url('/assets/papa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HiChevronLeft
        className="hidden md:block text-Primary-White text-5xl absolute
        mx-8 mt-18 cursor-pointer  "
        //onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-Primary-White text-5xl absolute
        mx-8 mt-19 cursor-pointer right-0"
        //onClick={() => sliderRight(elementRef.current)}
      />
      <div className="mt-16">
        <h1
          className="item-center flex text-Primary-White justify-center pt-14
   font-montserrat text-2xl font-extrabold leading-16"
        >
          Choose Your Type
        </h1>
        <div
          className="absolute top-[876px]
   mt-21
   left-[calc(50%_-_69px)] w-15 h-20"
        >
          <Image
            src="/assets/SliderLine1.png"
            width="138"
            height="6"
            alt="heijjjjjjj"
          />
        </div>
        <p className="justify-center flex items-center font-normal font-Montserrat text-Primary-White underline mt-22">
          View All
        </p>
      </div>

      <div
        className="flex  px-14 py-4
                justify-between "
      >
        {" "}
        <div className=" hidden lg:flex ">
          <Image
            className=" pt-15 mt-13 opacity-80 top-[1024px] left-[1085px]"
            src="/assets/UhpImg.png"
            width={137}
            height={177}
            alt="a"
          />
          <p className=" font-Montserrat mt-23 text-2xl font-bold  leading-16 text-Primary-White opacity-60 tracking-normal  text-center">
            UHP
          </p>
        </div>
        <div className=" hidden  lg:flex "> {/*ml-[100px]*/}
          <Image
            className="top-[784px] ml-30 left-[254px]"
            src="/assets/HpImg.png"
            width={178}
            height={243}
            alt="a"
          />
          <p className=" text-Primary-White font-Montserrat mt-47 text-2xl ml-31 font-bold  leading-16  opacity-60 tracking-normal  text-center">
            HP
          </p>
        </div>
        <div className=" hidden lg:flex ">
          <Image
            className="top-[970px] left-[443px] mt-27"
            src="/assets/pcrImg.png"
            width={393}
            height={243.52}
            alt="a"
          />
          <p className=" font-Montserrat mt-25 text-2xl font-bold  leading-16 mr-17  text-Primary-White  tracking-normal  text-center">
            PCR
          </p>
        </div>
        <div className=" hidden lg:flex ">
          <Image
            className=" Top-983 Left-853 mr-46"
            src="/assets/TbrImg.png"
            width={163}
            height={233}
            alt="a"
          />
          <p className=" font-Montserrat text-2xl ml-32 mt-26 font-bold  leading-16 pt-16 text-Primary-White opacity-60 tracking-normal  ">
            TBR
          </p>
        </div>
        <div className="  hidden lg:flex ">
          <Image
            className="  pt-15 mt-22 top-[1024px] left-[1085px]"
            src="/assets/SuvImg.png"
            width={137}
            height={177}
            alt="a"
          />
          <p className=" font-Montserrat text-2xl ml-48 mt-26 font-bold  leading-16 pt-17 text-Primary-White opacity-60 tracking-normal  text-center">
            SUV
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;

