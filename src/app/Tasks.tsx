"use client";

import Image from "next/image";
import { useState } from "react";
import system from "../../public/assest/hr360e/system.png";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    title: "Is HR360 customizable??",
    content: [
      "Yes, HR360 can be fully customized to meet your organization’s HR policies, workflows, and reporting needs.",
    ],
  },
  {
    title: "How does the backend of HR360 work?",
    content: [
      "HR360 is built using secure, scalable technologies with cloud-based architecture, enabling smooth integration, performance, and real-time data sync.",
    ],
  },
  {
    title: "What about the safety and security of HR360?",
    content: [
      "HR360 uses encrypted data transmission, role-based access control, and regular security audits to ensure data privacy and protection.",
    ],
  },
  {
    title: "What about the safety and security of HR360?",
    content: [
      "HR360 uses encrypted data transmission, role-based access control, and regular security audits to ensure data privacy and protection.",
    ],
  },
  {
    title: "Does HR360 support both desktop and mobile?",
    content: [
      "Yes, HR360 is fully responsive and works seamlessly on both desktop and mobile devices for user convenience.",
    ],
  },
  {
    title: "Do I get notifications for updates or approvals?",
    content: [
      "Yes, notifications are sent for leave requests, approvals, document uploads, and assigned tasks.",
    ],
  },
  {
    title: "Who do I contact for HRMS support?",
    content: ["You can mail to hr@cloudbeestech.com"],
  },
  {
    title: "Can I check my leave balance and history?",
    content: [
      "Yes, your dashboard displays all leave balances, previous requests, and approval statuses.",
    ],
  },
  {
    title: "Does HR360 support multiple user roles?",
    content: [
      "Absolutely. HR360 offers role-based access for admins, HR personnel, managers, and employees, ensuring secure and controlled access to features.",
    ],
  },
  {
    title: "Is there an option to generate reports in HR360?",
    content: [
      "Yes, HR360 includes customizable reporting tools to generate reports on attendance, leave, payroll, performance, and more.",
    ],
  },
];
export const Tasks = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // open 1st by default

  const toggle = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section className="center md:px-10 px-3 my-8 md:my-20">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-[#1B8036] font-bold text-2xl md:text-3xl text-center mb-3 md:mb-10">
          Working off-hours to wrap up high-priority tasks?
        </h2>
        <div className="flex flex-wrap lg:gap-10 w-full max-w-screen-2xl">
          <div className="md:w-[40%] flex justify-end items-center h-full mt-10">
            <Image src={system} alt="system not found" width={400}/>
          </div>

          <div className="flex-1 space-y-3 md:mt-10 text-[#1B1B1B] font-normal text-[16px] leading-7">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-700">
                    {/* {index + 1}. */}
                    {item.title}
                  </h3>
                  <span className="text-sm mt-1">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="ml-5 mt-3 text-sm text-gray-500 space-y-2">
                    {item.content.map((point, idx) => (
                      <p
                        key={idx}
                        dangerouslySetInnerHTML={{
                          __html: point.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
