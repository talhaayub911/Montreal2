import type { NextPage } from "next";


import Image from "next/image";


const Rectangle: NextPage = () => {
  return (
    <>
      <div
        className="relative text-center font-Montserrat 
        
           
            bg-Secondary-Blue  text-Primary-White  md:w-full h-14  text-sm font-normal pt-10"
      >
        Welcome to our Store!
      </div>


      {/* <div className='pt-2 pl-[64px] flex-4 item-center justify-between w-full h-16 bg-white shadow'>
                <Image
                src="/assets/NavbarImg.png"
                alt='NavbarImage'
                width={201.426}
                height={560}
                />


                <ul className='flex justify-center items-center gap-8 mt-[-25px]'>
                    <li>Products</li>
                    <li>About</li>
                    <li>Join us</li>
                    <li>Contact Us</li>
                   
                </ul>
               
               


           




               
       
           
            </div> */}
    </>
  );
};


export default Rectangle;