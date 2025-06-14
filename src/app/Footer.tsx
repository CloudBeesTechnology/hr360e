import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <section className="center md:p-10 p-5 bg-gradient-to-b from-[#74EBD5] via-[#8ED2DCEE] to-[#ACB6E5DB]">
      <div className="max-w-screen-2xl w-full">
        <div className="flex justify-evenly flex-wrap gap-5 text-[#1F614C]">
          <div className="md:w-[40%] w-full text-justify space-y-2">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-[16px] leading-7 max-w-[400px]">
              HR360 is a thinking company on a mission to
              connect people and businesses with meaningful innovation.
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="text-[16px] space-y-2">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Gas-Free Marketplace</li>
              <li>Docs</li>
              <li> Utility</li>
            </ul>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold">Serivces</h3>
            <ul className="text-[16px] space-y-2">
              <li>Employee portal</li>
              <li>Website Developing</li>
              <li>HRMS portal</li>
            </ul>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold">Quicklinks</h3>
            <ul className="text-[16px] space-y-2">
              <li>Careers</li>
              <li>Recruitment & Onboarding</li>
              <li>Contact</li>
           
            </ul>
          </div>
        </div>
        <div className="flex gap-5 py-3 max-md:justify-center">
          <span className="w-10 h-10 text-[#b1ababe3] bg-white rounded-full center">
            <FaTwitter />
          </span>
          <span className="w-10 h-10 text-[#b1ababe3] bg-white rounded-full center">
            <FaFacebookF />
          </span>
          <span className="w-10 h-10 text-[#b1ababe3] bg-white rounded-full center">
            <FaInstagram />
          </span>
          <span className="w-10 h-10 text-[#b1ababe3] bg-white rounded-full center">
            <FaLinkedinIn />
          </span>
        </div>
        <p className="text-center text-[#1F614C] font-normal pt-2">
          Copyright © 2025 by HR360. All rights reserved.
        </p>
      </div>
    </section>
  );
};
