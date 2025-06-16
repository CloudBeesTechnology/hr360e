import Image from "next/image";
import computer from "../../public/assest/hr360e/Computer.png";
import goal from "../../public/assest/hr360e/Goal.png";

export const AboutUs = () => {
  return (
    <section id="about" className="center px-3 lg:px-10 my-5 md:my-20">
      <div className="max-w-screen-2xl w-full">
<<<<<<< HEAD
        <h2 className="text-[#1B8036] font-bold text-3xl text-center md:mb-10">About Us</h2>
=======
        <h2 className="text-[#1B8036] font-bold text-3xl text-center md:mb-10">
          About Us
        </h2>
>>>>>>> bebff26c963c47cb6bddfa5ad8b33005fb19ce13
        <div>
          <div className="flex flex-wrap max-lg:justify-center lg:gap-10 gap-2 w-full max-w-screen-2xl">
            <article className="lg:w-[75%] space-y-5 mt-5 md:mt-10">
              {/* <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                We are INKO HCM
              </h2> */}
              <p className="text-[#1B1B1B] max-md:text-justify font-normal text-[16px] leading-7">
                HR360 is a comprehensive HR management software developed by
                *CloudBees Tech*, designed to streamline and digitize all core
                HR functions. By automating routine tasks and calculations,
                HR360 significantly reduces manual effort and human error. From
                attendance tracking and leave management to performance reviews
                and payroll support, every process is handled digitally—saving
                time, improving accuracy, and boosting overall
                efficiency for HR teams.
              </p>
            </article>
            <div className="flex-1 flex max-lg:justify-center min-w-[200px]">
              <Image
                src={computer}
                alt="computer not found"
                width={400}
                className="max-lg:w-[250px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap max-lg:justify-center gap-2 lg:gap-10 w-full max-w-screen-2xl max-lg:flex-col-reverse">
            <div className="flex-1 flex max-lg:justify-center min-w-[200px]">
              <Image
                src={goal}
                alt="goal not found"
                width={400}
                className="max-lg:w-[250px]"
              />
            </div>

            <article className="lg:w-[75%] space-y-5 mt-10">
              <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                Our Vision
              </h2>
              <p className="text-[#1B1B1B] max-md:text-justify font-normal text-[16px] leading-7">
                To revolutionize human resource management by delivering a
                smart, fully digital platform that simplifies processes, reduces
                manual effort, and empowers organizations to focus on people,
                not paperwork. Through HR360, we envision a future where HR
                operations are seamless, efficient, and strategically impactful.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
