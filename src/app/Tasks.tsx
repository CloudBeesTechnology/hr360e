import Image from "next/image";
import system from "../../public/assest/hr360e/system.png";
import { FaChevronDown,FaChevronUp  } from "react-icons/fa";

export const Tasks = () => {
  return (
    <section className="center md:px-10 px-3 my-8 md:my-20">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-[#1B8036] font-bold text-2xl md:text-3xl text-center mb-3 md:mb-10">
          Working off-hours to wrap up high-priority tasks?
        </h2>
        <div className="flex flex-wrap lg:gap-10 w-full max-w-screen-2xl">
          <div className=" md:w-[40%] flex justify-end">
            <Image src={system} alt="system  not found" width={400} />
          </div>

          <div className="flex-1 space-y-5 md:mt-10 text-[#1B1B1B] font-normal text-[16px] leading-7">
          
              <div className="border-b border-[#8F8A8A] py-2 my-8 px-5 flex justify-between items-center">
                <p className="text-[#7C7C7C] text-[16px]">Truly adaptable, Not complex</p>
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <div className="border-b border-[#8F8A8A] py-2 my-8 px-5 flex justify-between items-center">
                <p className="text-[#7C7C7C] text-[16px]">Truly adaptable, Not complex</p>{" "}
                <span>
                  <FaChevronDown />
                </span>
              </div>
              <div className="border-b border-[#8F8A8A] py-2 my-8 px-5 flex justify-between items-center">
                <p className="text-[#7C7C7C] text-[16px]">Truly adaptable, Not complex</p>{" "}
                <span>
                  <FaChevronDown />
                </span> 
              </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};
