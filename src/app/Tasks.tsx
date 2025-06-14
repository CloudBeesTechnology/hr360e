"use client";

import Image from "next/image";
import { useState } from "react";
import system from "../../public/assest/hr360e/system.png";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    title: "Truly adaptable, Not complex?",
    content: [
      "Our HR360 system is intuitive, ensuring you adapt quickly without lengthy training.",
    ],
  },
  {
    title: "Real-time tracking, real-time results?",
    content: [
      "Track your team’s progress and priorities in real-time for faster decisions.",
      "Track your team’s progress and priorities in real-time for faster decisions.",
      "Track your team’s progress and priorities in real-time for faster decisions.",
    ],
  },
  {
    title: "Secure, scalable, smart?",
    content: [
      "Built with enterprise-grade security and scalability to grow with your business.",
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
          <div className="md:w-[40%] flex justify-end">
            <Image src={system} alt="system not found" width={400} />
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
