import Image from "next/image";
import mobile from "../../public/assest/hr360e/mobile.png";

export const Careers = () => {
  return (
    <section id="career" className="center px-3 md:px-10 md:my-20 my-5">
      <div className="max-w-screen-2xl w-full">
        <div className="flex flex-wrap gap-3 lg:gap-10 w-full max-w-screen-2xl">
          <article className="md:w-[75%] space-y-5 mt-10">
            <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
            Explore Top Empowering Careers
            </h2>
            <p className="text-[rgb(27,27,27)] font-normal text-[16px] leading-7">
             The easiest way to stay ahead of your competition while reducing time to hire and recruiting your dream workforce.
            </p>
            

            {/* <button className="rounded-md px-5 py-3 ml-40 mt-5 bg-[#1B8036] text-white">
                Request Demo
            </button> */}
        
          </article>
          <div className="flex-1 flex justify-start">
            <Image src={mobile} alt="computer not found" width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};
