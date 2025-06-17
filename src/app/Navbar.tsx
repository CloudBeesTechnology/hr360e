"use client";
import Image from "next/image";
import logo from "../../public/assest/logo/HR360e.svg";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const sections = ["home", "service", "about", "career", "contact"];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("nav");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.position = "fixed";
          navbar.style.top = "0";
          navbar.style.left = "0";
          navbar.style.backgroundColor = "white";
          navbar.style.padding = "2px 3px";
          navbar.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
        } else {
          navbar.style.position = "absolute";
          navbar.style.backgroundColor = "transparent"; // or your default
          navbar.style.padding = ""; // reset to default or define default
          navbar.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const sections = ["#home", "#service", "#about", "#career", "#contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = document.querySelector(sections[i]) as HTMLElement;
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="nav" className="absolute top-0 left-0 w-full py-4 z-[9999]">
      <div className="max-w-screen-2xl w-full flex lg:justify-around justify-between max-lg:px-5 items-center">
        <Image src={logo} alt="Logo not found" width={100} />
        <div className="bg-white flex items-center gap-20 px-5 lg:px-20 py-5 rounded-full">
          <div className="flex justify-between gap-10 max-lg:hidden">
            <a
              href="#home"
              onClick={() => setActiveSection("#home")}
              className={
                activeSection === "#home" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Home
            </a>
            <a
              href="#service"
              onClick={() => setActiveSection("#service")}
              className={
                activeSection === "#service" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Recruitment & Onboarding
            </a>
            <a
              href="#about"
              onClick={() => setActiveSection("#about")}
              className={
                activeSection === "#about" ? "text-[#1B8036] font-bold" : ""
              }
            >
              About Us
            </a>
            <a
              href="#career"
              onClick={() => setActiveSection("#career")}
              className={
                activeSection === "#career" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Careers
            </a>
          </div>
          <div className="max-lg:block hidden cursor-pointer text-xl">
            {showMenu ? (
              <p onClick={handleMenu}>
                <RiMenuUnfold2Line />
              </p>
            ) : (
              <p onClick={handleMenu}>
                <RiMenuFold2Line />
              </p>
            )}
          </div>
          <div className="max-lg:hidden">
            <a
              href="#contact"
              onClick={() => {
                setActiveSection("#contact");
              }}
              className={
                activeSection === "#contact"
                  ? "text-[#1B8036] font-bold bg-transparent border border-[#1B8036] rounded-full px-5 py-3"
                  : "rounded-full px-5 py-3 bg-[#1B8036] text-white"
              }
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="bg-white h-screen py-5 px-3 fixed right-0 top-0 z-[999] shadow-md max-lg:block hidden">
          <p onClick={handleMenu} className=" text-xl cursor-pointer">
            {" "}
            <FaRegWindowClose />
          </p>
          <div className="flex flex-col justify-between gap-8 py-5 ">
            <a
              href="#home"
              onClick={() => {
                setActiveSection("#home");
                handleMenu();
              }}
              className={
                activeSection === "#home" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Home
            </a>
            <a
              href="#service"
              onClick={() => {
                setActiveSection("#service");
                handleMenu();
              }}
              className={
                activeSection === "#service" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Recruitment & Onboarding
            </a>
            <a
              href="#about"
              onClick={() => {
                setActiveSection("#about");
                handleMenu();
              }}
              className={
                activeSection === "#about" ? "text-[#1B8036] font-bold" : ""
              }
            >
              About Us
            </a>
            <a
              href="#career"
              onClick={() => {
                setActiveSection("#career");
                handleMenu();
              }}
              className={
                activeSection === "#career" ? "text-[#1B8036] font-bold" : ""
              }
            >
              Careers
            </a>
          </div>
          <div className="mt-3">
            <a
              href="#contact"
              onClick={() => {
                setActiveSection("#contact");
                handleMenu();
              }}
              className={
                activeSection === "#contact"
                  ? "text-[#1B8036] font-bold bg-transparent border border-[#1B8036] rounded-full p-3"
                  : "rounded-full p-3 bg-[#1B8036] text-white"
              }
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
