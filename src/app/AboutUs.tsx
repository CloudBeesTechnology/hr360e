import Image from "next/image";
import computer from "../../public/assest/hr360e/Computer.png";
import goal from "../../public/assest/hr360e/Goal.png";

export const AboutUs = () => {
  return (
    <section id="about" className="center px-3 lg:px-10 my-5 md:my-20">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-[#1B8036] font-bold text-3xl text-center md:mb-10">About Us</h2>
        <div>
          <div className="flex flex-wrap max-lg:justify-center lg:gap-10 gap-2 w-full max-w-screen-2xl">
            <article className="lg:w-[75%] space-y-5 mt-5 md:mt-10">
              <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                We are INKO HCM
              </h2>
              <p className="text-[#1B1B1B] max-md:text-justify font-normal text-[16px] leading-7">
                We aim to empower organizations with cutting-edge technology and
                automation, enabling a new kind of growth. A growth where
                employees thrive doing what they love, and managers focus on
                leading and driving success. By eliminating outdated HR tasks,
                we free teams to innovate, excel, and inspire. Our mission is to
                let the human factor shine and chieve greatness.
              </p>
            </article>
            <div className="flex-1 flex max-lg:justify-center min-w-[200px]">
              <Image src={computer} alt="computer not found" width={400} className="max-lg:w-[250px]" />
            </div>
          </div>
          <div className="flex flex-wrap max-lg:justify-center gap-2 lg:gap-10 w-full max-w-screen-2xl">
            <div className="flex-1 flex max-lg:justify-center min-w-[200px]">
              <Image src={goal} alt="goal not found" width={400} className="max-lg:w-[250px]" />
            </div>

            <article className="lg:w-[75%] space-y-5 mt-10">
              <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                Our Vision
              </h2>
              <p className="text-[#1B1B1B] max-md:text-justify font-normal text-[16px] leading-7">
                Our mission is to deliver top-notch software solutions that
                spark innovation and drive success. We’re the bridge between
                your ideas and their potential, turning challenges into triumphs
                with creativity, trust, and a relentless commitment to
                excellence. Let’s make your next breakthrough our shared
                success.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
