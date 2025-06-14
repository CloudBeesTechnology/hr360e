"use client";

import Image from "next/image";
import qa from "../../public/assest/hr360e/graph.png";
import card from "../../public/assest/hr360e/card.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Enquire = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNo: "",
    msg: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((perv) => ({
      ...perv,
      [name]: value,
    }));
  };
  const onSubmit = () => {
    // console.--log(formData);
    const service = process.env.NEXT_PUBLIC_ServiceID as string;
    const template = process.env.NEXT_PUBLIC_TemplateID as string;
    const publicKey = process.env.NEXT_PUBLIC_publicKey as string;
    // console.log(service, template);

    emailjs
      .send(service, template, formData, publicKey)
      .then((response) => {
        console.log(response);
        setStatus("Success! Your message has been sent.");
        setFormData({
          firstName: "",
          email: "",
          phoneNo: "",
          msg: "",
        });
        setIsSubmitting(false);
      })
      .catch((err) => {
        setStatus("Failed to send the message. Please try again later.");
          setIsSubmitting(false);
        console.log(err);
      });
  };
  return (
    <section id="contact" className="center px-3 md:px-10 my-5 md:my-20">
      <div className="max-w-screen-2xl w-full">
        <h2 className="text-[#1B8036] font-bold text-3xl text-center md:mb-10">
          Enquiry
        </h2>
        {status && <p className="text-center text-green-600">{status}</p>}
        <div className="center ">
          <div className="my-5 max-w-[500px] w-full space-y-5 relative ">
            <Image
              src={qa}
              alt="graph not found"
              className="absolute -top-5 -left-28  max-md:hidden block"
              width={100}
            />

            <Image
              src={card}
              alt="Card not found"
              className="absolute -top-5 -right-28  max-md:hidden block"
              width={100}
            />

            <div className="p-3 border border-[#b3faed]">
              <input
                className="placeholder:text-[#acaaaae3] outline-none"
                type="text"
                placeholder="Full Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleData}
              />
            </div>
            <div className="p-3 border border-[#b3faed]">
              <input
                className="placeholder:text-[#acaaaae3] outline-none"
                type="text"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleData}
              />
            </div>
            <div className="p-3 border border-[#b3faed]">
              <input
                className="placeholder:text-[#acaaaae3] outline-none"
                type="text"
                placeholder="Mobile No"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleData}
              />
            </div>
            <div className="p-3 border border-[#b3faed]">
              <textarea
                className="resize-none placeholder:text-[#acaaaae3] outline-none"
                placeholder="Message"
                name="msg"
                value={formData.msg}
                onChange={handleData}
              ></textarea>
            </div>
            <div className="center pb-5">
              <button
                className="rounded-md px-5 py-3  mt-5 bg-[#1B8036] text-white"
                onClick={onSubmit}
                  disabled={isSubmitting}
              >
                  {isSubmitting ? "Sending..." : " Send Enquiry"}
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
