// import Image from 'next/image';
// import Link from 'next/link';
// import React, {FC} from 'react'
// import { BiSearch } from 'react-icons/bi';

// type Props = {}

// const Hero: FC<Props> = (props) => {
//   return (
//     <div className="w-full 1000px:flex items-center">
//         <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation">
//         <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
//           <Image
//             src={require("../../../public/assests/banner-img-1.png")}
//             alt=""
//             className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
//           />
//         </div>
//         <div className="1000px:w-[60%] flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
//             <h2 className="dark:text-white text-[#000000c7] text-[300px] px-3 w-full 1000px:text-[70px] font-[600] font-josefin py-2 1000px:leading-[75px] 1500px:w-[60]">
//               Improve Your Online Learning Experience Better Instantly
//             </h2>
//             <br />
//             <p className="dark:text-[#edfff4] text-[#000000ac] font-josefin font-[600] text[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
//                 We have 40k+ online courses & 500k+ Online registered student. Find
//                 your desired courses from them.
//             </p>
//             <br />
//             <br />
//             <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
//                 <input
//                  type="search"
//                  placeholder="Search Courses..."
//                  className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
//                 />
//                 <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39clf3] rounded-r-[5px]">
//                     <BiSearch
//                         className="text-white"
//                         size={30}
//                         {...({} as React.ComponentProps<'svg'>)}
//                     />
//                 </div>
//             </div>
//             <br />
//             <br />
//             <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
//                 <Image
//                   src={require("../../../public/assests/client-1.jpg")}
//                   alt=""
//                   className="rounded-full ml-[-20px]"
//                 />
//                  <Image
//                   src={require("../../../public/assests/client-2.jpg")}
//                   alt=""
//                   className="rounded-full ml-[-20px]"
//                 />
//                  <Image
//                   src={require("../../../public/assests/client-3.jpg")}
//                   alt=""
//                   className="rounded-full ml-[-20px]"
//                 />
//                 <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 tex[18px] font-[600]">
//                     500k+ People already trusted us.{" "}
//                     <Link
//                       href="/courses"
//                       className="dark:text-[#46e256] text-[crimson]"
//                     >
//                         View Courses
//                     </Link>{" "}
//                 </p>
//                 </div>
//                 <br />
//         </div>
//     </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = () => {
  return (
    <div className="w-full mt-16 1000px:flex items-center relative dark:bg-gray-900 bg-white">
      {/* Animated Circle Background */}
      <div className="absolute left-8 top-[100px] 1000px:top-[unset] 1500px:h-[600px] 1500px:w-[600px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vh] hero_animation rounded-full" />

      {/* Hero Image Section */}
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
        <Image
          src={require("../../../public/assests/banner-img-1.png")}
          alt="Hero Banner"
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10"
        />
      </div>
      {/* Hero Text Section */}
      <div className="1000px:w-[60%] flex-col items-center text-center 1000px:text-left mt-[250px] 1000px:mt-16 pl-32 pr-20">        
        <h2 className="dark:text-white text-[#000000c7] text-[18px] 1000px:text-[50px] font-[600] font-josefin leading-[1.2] 1000px:leading-[60px]">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-josefin font-[600] text-[18px] 1500px:w-[55%] 1100px:w-[78%]">
          We have 40k+ online courses & 500k+ registered students. Find your
          desired courses from them.
        </p>
        <br />
        <br />
        {/* Search Bar */}
        <div className="relative 1500px:w-[55%] 1100px:w-[78%] w-[90%]">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-[50px] outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39clf3] rounded-r-[5px]">
            <BiSearch
              className="text-white"
              size={30}
              {...({} as React.ComponentProps<"svg">)}
            />
          </div>
        </div>

        {/* Client Images and Trust Section */}
        <div className="mt-8 1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={require("../../../public/assests/client-1.jpg")}
            alt="Client 1"
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/assests/client-2.jpg")}
            alt="Client 2"
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/assests/client-3.jpg")}
            alt="Client 3"
            className="rounded-full ml-[-20px]"
          />
          <p className="font-josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[16px] font-[600]">
            500k+ People already trust us.{" "}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
