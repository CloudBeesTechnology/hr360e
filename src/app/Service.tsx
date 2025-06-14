import pic1 from "../../public/assest/hr360e/Dashboard.png";
import pic2 from "../../public/assest/hr360e/Attendance_Management.png";
import pic3 from "../../public/assest/hr360e/employee.png";
import pic4 from "../../public/assest/hr360e/Payroll_Management.png";
import pic5 from "../../public/assest/hr360e/Performance_Management.png";
import pic6 from "../../public/assest/hr360e/Employee_Portal.png";
import Image from "next/image";

export const Service = () => {
  const serviceList = [
    {
      pic: pic1,
      title: "Leave  Management",
      desc: "The HR Management Dashboard is a streamlined, user-friendly platform designed to optimize your hiring and HR processes. It provides real-time insights into recruitment pipelines, tracks key hiring metrics, and simplifies applicant management. It’s the ultimate solution for staying competitive and building your dream team effortlessly.",
    },
    {
      pic: pic2,
      title: "Time and Attendance",
      desc: "The Time Management & Attendance Dashboard offers real-time tracking to keep you in sync with your workforce. It simplifies shift scheduling, handles emergency changes effortlessly, and ensures employees adhere to scheduled breaks.",
    },
    {
      pic: pic3,
      title: "Employee Module",
      desc: "The Employee Portal centralizes your entire organizational structure and HR processes into a user-friendly platform tailored for employees. It enables easy access to personal records, organizational charts, and compliance tools, fostering transparency and engagement. This portal streamlines efficiency and ensures seamless alignment across all HR touchpoints for employees.",
    },
    {
      pic: pic4,
      title: "Internship",
      desc: "The Payroll Management Dashboard simplifies and automates your payroll processes, saving time and ensuring accuracy. It offers real-time tracking of employee payments, tax calculations, and compliance updates, all in one place. It’s the easiest way to streamline payroll operations and focus on growing your workforce.",
    },
    {
      pic: pic5,
      title: "Timesheet",
      desc: "The Performance Management Dashboard brings clarity and focus to employee growth by aligning individual goals with overall business objectives. It provides tools for setting clear targets, tracking progress, and conducting insightful performance reviews. This dashboard ensures a transparent, goal-driven approach to unlocking employee potential and driving organizational success.",
    },
    {
      pic: pic6,
      title: "Employee Portal",
      desc: "The Employee Portal is a secure, one-stop digital platform designed to streamline workforce management by enabling employees to effortlessly handle leave applications (submit, track, and approve time-off requests), access the company's holiday calendar for planning, request permissions for short-term absences or schedule adjustments, and maintain up-to-date personal and professional information through an intuitive profile dashboard. This mobile-friendly hub enhances productivity by centralizing essential HR functions, reducing paperwork, and fostering seamless communication between staff and management, all while ensuring data security and 24/7 accessibility from any device.",
    },
  ];
  return (
    <section
      id="service"
      className="md:my-20 my-8 px-3 md:px-10 flex items-center flex-col gap-7 md:gap-20"
    >
      {serviceList.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex gap-10 flex-wrap justify-center w-full max-w-screen-2xl"
          >
            {idx % 2 === 0 && (
              <div className="xl:flex-1 flex xl:justify-start">
                <Image
                  src={item.pic}
                  alt={`${item.title} not found`}
                  width={400}
                />
              </div>
            )}
            <article className="md:w-[75%] space-y-5">
              <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                {item.title}
              </h2>
              <p className="text-[#1B1B1B] font-normal text-[16px] leading-7 max-md:text-justify">
                {item.desc}
              </p>
            </article>
            {idx % 2 !== 0 && (
              <div className="xl:flex-1 flex xl:justify-end">
                <Image
                  src={item.pic}
                  alt={`${item.title} not found`}
                  width={400}
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
