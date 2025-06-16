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
      desc: "Leave management is the streamlined process of handling employee leave, permissions and attendance. It allows employees to easily apply for leave or short permissions, view their balances instantly, and receive timely approvals. With real-time tracking, automated calculations, and policy compliance, it ensures accuracy, reduces manual errors, and helps managers plan better with shared calendars and insights.",
    },
    {
      pic: pic2,
      title: "Time and Attendance",
      desc: "Clock-in/out tracking through biometric systems ensures accurate and tamper-proof recording of employee work hours using fingerprint or facial recognition. These systems automatically calculate total working hours, including overtime, breaks, and absences, providing reliable attendance data and minimizing manual errors for efficient workforce management.",
    },
    {
      pic: pic3,
      title: "Employee Module",
      desc: "An employee management system centralizes essential HR functions by maintaining detailed employee profiles that include personal information, job roles, and employment dates. It streamlines document and compliance management by enabling the upload and tracking of critical documents such as resumes, contracts, identity proofs, certifications, and their expiration dates. Additionally, it supports performance and goal management through regular performance reviews and the monitoring of training and development progress.",
    },
    {
      pic: pic4,
      title: "Internship",
      desc: "Enroll through the website by submitting your interest using a simple online form—no paperwork required, just a few clicks to begin your journey. After enrollment, complete the registration process by filling in your profile details and uploading necessary documents such as your resume and cover letter for verification and approval. Once registered, tasks and project goals will be assigned by your mentor or supervisor based on your learning objectives. You can track your intern status in real-time through your dashboard, where you can monitor assignment progress, receive performance feedback, and view completion status.",
    },
    {
      pic: pic5,
      title: "Timesheet",
      desc: "Allocate hours to specific projects or tasks to gain clear visibility into labor distribution and ensure effective cost control. Employees can record clock-in/out times or manually enter start and end times to accurately log their daily work hours. Additionally, the system captures break durations and overtime, enabling comprehensive tracking of work patterns and ensuring compliance with labor regulations.",
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
            className="w-full max-w-screen-2xl"
          >
            <div className={`flex  flex-wrap justify-center  gap-10 ${idx % 2 == 0  ? "max-lg:flex-col-reverse" : ""}`}>
              
            {idx % 2 === 0 && (
              <div className={`xl:flex-1 flex justify-center xl:justify-start`}>
                {/* ${idx % 2 == 0  ? "max-lg:flex-row-reverse" : ""} */}
                <Image
                  src={item.pic}
                  alt={`${item.title} not found`}
                  width={400}
                />
              </div>
            )}
            <article className="lg:w-[75%] w-full space-y-5">
              <h2 className="text-[#1B8036] font-bold text-[1.5rem]">
                {item.title}
              </h2>
              <p className="text-[#1B1B1B] font-normal text-[16px] leading-7 max-md:text-justify">
                {item.desc}
              </p>
            </article>
            {idx % 2 !== 0 && (
              <div className={`xl:flex-1 flex xl:justify-end `}>
                <Image
                  src={item.pic}
                  alt={`${item.title} not found`}
                  width={400}
                />
              </div>
            )}
            </div>
          </div>
        );
      })}
    </section>
  );
};


