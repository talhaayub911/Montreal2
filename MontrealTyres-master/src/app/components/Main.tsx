import React from "react";

const Main = () => {   
  return (
    <div className="w-full">
      <img className="mt-16 w-full sm:w-full" src="/assets/MainImg.png" />
      <div className="hidden lg:block absolute top-[300px]  left-[calc(50%_+_126px)] w-13 h-17 text-md">
        <div className=" hidden md:block absolute
          top-[0px] left-[calc(50%_-_196.5px)] 
          leading-15 font-extrabold [-webkit-text-stroke:1px_#fff]">
          WE KEEP YOU
        </div>
        <div className="hidden md:block absolute top-[48px] left-[calc(50%_-_131.5px)] text-Primary-White leading-15 font-extrabold">
          RUNNING
        </div>
      </div>
      <div className="hidden md:block absolute top-[430px] left-[calc(50%_+_139px)] text-lg text-Primary-White leading-14  font-medium">
        TOP GRADE TIRES FOR TRUCKS, BUSES AND CARS
      </div>

      <div className="absolute lg:top-[472px] top-[170px] lg:left-[868px] left-[25%]  w-14 h-11 text-base">
        <img
          className="absolute top-[0px] left-[0px] w-14 h-11"
          alt=""
          src="/assets/IconImg.png"
          width={188}
          height={52}
        />
        <div className="absolute top-[16px] left-[35px] font-Montserrat text-xl text-Primary-White font-semibold cursor-pointer">
          Discover More
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-around md:gap-15 px-11 md:px-12 lg:px-13 text-center bg-Primary-Red text-Primary-White w-full h-auto md:h-16 font-serif text-sm md:text-base lg:text-lg ">
        <div className="flex items-center justify-center gap-13 md:gap-15">
          <img
            src="/assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="font-Montserrat text-lg ">7-Days Return</p>
          <div className="mt-17 md:mt-34 ml-34 md:ml-44 hidden md:block">
            <img src="/assets/Rectangle1.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-13 md:gap-15 mt-44 md:mt-34">
          <img
            src="/assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="font-Montserrat text-lg ">Online Support</p>
          <div className="mt-17 md:mt-34 ml-34 md:ml-49 hidden md:block">
            <img src="/assets/Rectangle1.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-13 md:gap-15 mt-44 md:mt-34">
          <img
            src="./assets/7dayIcon.svg"
            alt="7dayicon"
            width={20}
            height={20}
          />
          <p className="text-lg  font-Montserrat">Guaranteed Lowest Price</p>
          <div className="mt-17 md:mt-34 ml-34 md:ml-49 hidden md:block">
            <img src="/assets/Rectangle1.png" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-13 mt-44 md:mt-34">
          <img
            src="./assets/7dayIcon.svg"
            alt="7dayicon"
            width={14}
            height={10}
          />
          <p className="text-lg font-Montserrat">Free Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
