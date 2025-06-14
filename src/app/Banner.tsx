import Image from "next/image";
import dots from "../../public/assest/home/dots_bg.png";
import { Navbar } from "./Navbar";

export default function Banner() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[#CCFAFF94] to-[#FFFFFF] h-[400px] md:h-[550px] relative overflow-hidden flex justify-center items-center"
    >
      <Navbar />
      <div className="absolute top-20 opacity-50 left-0 w-full h-full ">
        <Image src={dots} alt="dot image not found" fill className="object-c" />
      </div>
      <p className="lg:text-[4rem] font-bold z-10 max-md:text-2xl md:text-4xl max-sm:text-center px-1 ">
        Comprehensive HR Software to
        <br /> Power Your Digital{" "}
        <span className="bg-gradient-to-t from-[#74EBD5] to-[#ACB6E5] bg-clip-text text-transparent">
          HR Goals
        </span>
      </p>
    </section>
  );
}
