import React from "react";
import Image from "next/image";


const Nain = () => {
  return (
    <div className="w-full">
      {/* <Image
        className="mt-20 w-full"
        src="/assets/MainImg.png"
        alt="mainimg"
        width={1280}
        height={560}
      /> */}
      {/* <img className="mt-20 w-full sm:w-full" src="/assets/MainImg.png" /> */}
      <div className="absolute top-[300px]  left-[calc(50%_+_126px)] w-[393px] h-[126px] text-[52px]">
        <div className=" hidden md:block absolute font-montserrat text-[52px] w-[393px] h-[78px] top-[0px] left-[calc(50%_-_196.5px)] leading-[150%] font-extrabold [-webkit-text-stroke:1px_#fff]">
          <h1> WE KEEP YOU</h1>
        </div>
        <div className="hidden md:block absolute top-[48px] text-[52px] left-[calc(50%_-_131.5px)] text-white leading-[150%] font-extrabold">
          RUNNING
        </div>
      </div>
      <div className="hidden font-abc md:block absolute top-[430px] left-[calc(50%_+_139px)] text-[14px] text-white leading-[16px] pt-0.2 font-medium">
        TOP GRADE TIRES FOR TRUCKS, BUSES AND CARS
      </div>


      <div className="absolute top-[472px] left-[868px] w-[188px] h-[52px] text-base">
        <Image
          className="absolute top-[0px] left-[0px] w-[188px] h-[52px]"
          alt=""
          src="/assets/btttt.png"
          width={188}
          height={52}
        />
        {/* <div className="absolute top-[16px] left-[35px] text-white font-semibold">
             Discover More
            </div>  */}


        <div
          className="relative flex justify-around gap-10 px-[104px]


           text-center bg-[#C03545] text-white w-full
           h-[64px] font-serif text-[12px] font-normal pt-2 "
        >
          <div className="flex items-center justify-center gap-3">
            <Image
              src="./assets/7dayIcon.svg"
              alt="7dayicon"
              width={14}
              height={10}
            />
            <p>7-Days Return</p>
            <div className="px-[85px]">|</div>
          </div>


          <div className="flex items-center justify-center gap-3">
            <Image
              src="./assets/7dayIcon.svg"
              alt="7dayicon"
              width={14}
              height={10}
            />
            <p>Online Support</p>
            <div className="px-[75px]">|</div>
          </div>


          <div className="flex items-center justify-center gap-3">
            <Image
              src="./assets/7dayIcon.svg"
              alt="7dayicon"
              width={14}
              height={10}
            />
            <p>Guaranteed Lowest Price</p>
            <div className="px-[75px]">|</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image
              src="./assets/7dayIcon.svg"
              alt="7dayicon"
              width={14}
              height={10}
            />
            <p>Free Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Nain;
