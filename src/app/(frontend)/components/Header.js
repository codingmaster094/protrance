"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileToggle from "../../../../public/images/mobile-toggle.svg";
import Lenis from "@studio-freight/lenis";

const Header = ({ Menus, HeaderData }) => {
  const pathname = usePathname();

  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const isActive = (url) => {
    return pathname === url;
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <header
      className={`transition-all duration-300 p-4 z-[999] ${isFixed
        ? "top-0 bg-primary shadow left-0 w-full fixed"
        : "bg-transparent fixed w-full"
        }`}
    >
      <div className="container">
        <nav className="flex w-full py-4 items-center lg:justify-center justify-between">
          <div className="logo lg:w-[15%] 1xl:w-[25%]">
            <Link href="/" aria-label="logo" role="logo">
              <Image
                src={HeaderData.Header_Logo.url}
                width={165}
                height={55}
                alt="Logo.png"
              />
            </Link>
          </div>

          {/* Menu Container */}
          <div
            className={`side-menu fixed opacity-0 z-[999] px-4 w-72 -left-full top-0 bg-white h-full pt-16 border-r-4 border-gray-light lg:bg-transparent bg-blur-[40px] lg:border-none  lg:opacity-100 lg:w-[70%] 1xl:w-[50%] lg:static  lg:flex lg:items-center transition-all duration-[0.4s] ease-in lg:transition-none lg:pt-0  lg:justify-center ${menuOpen ? "left-0 opacity-100" : ""
              }`}
          >
            <span
              className="close block absolute top-4 right-4 w-8 h-8 lg:hidden cursor-pointer"
              aria-label="close"
            >
              <Image
                src={'/images/close.svg'}
                width={32}
                height={32}
                alt="close-btn"
                onClick={handleMenuToggle}
              />
            </span>

            {/* Menu Items */}
            <ul className={`flex font-medium transition-all duration-700 ease-in-out flex-col lg:flex-row  lg:rounded-[20px] gap-4  ${pathname === "/" ? "" : "backdrop-blur-[40px]"} px-[11px] lg:w-[80%] 1xl:w-[70%] lg:justify-center `}>
              {Menus.map((item) => {
                const hasSubmenu = item.submenus?.length > 0;
                return (
                  <li
                    key={item.id}
                    className={` text-black lg:text-white relative menu-animate ${isActive(item.link?.url) && !hasSubmenu ? "" : ""}`}
                  >
                    {hasSubmenu ? (
                      <div
                        className="inline-block hassubmenu w-full"

                        onMouseOver={() => {
                          if (!isMobile) {
                            clearTimeout(window.dropdownTimeout);
                            setOpenDropdown(true);
                          }
                        }}
                        onMouseOut={() => {
                          if (!isMobile) {
                            window.dropdownTimeout = setTimeout(() => {
                              setOpenDropdown(false);
                            }, 200);
                          }
                        }}
                      >
                        <button
                          onClick={() => isMobile && setOpenDropdown(!openDropdown)}
                          className="flex gap-1 text-black lg:text-white w-full !justify-between"
                          aria-label="menu-link"
                        >
                          {item.link?.label?.trim()}
                          <span
                            className={`transition-transform duration-300 w-6 h-6 ${openDropdown ? "rotate-180" : "rotate-0"}`}
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-black lg:text-white"
                            >
                              <path
                                d="M7 10L12 15L17 10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                          </span>
                        </button>

                        {openDropdown && (
                          <ul className="staic lg:absolute left-0 mt-4 bg-white shadow-lg rounded min-w-40 z-[999] overflow-hidden">
                            {item.submenus[0]?.links?.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  href={submenu.link?.url || "#"}
                                  className={`block px-4 py-2 text-black hover:bg-gray-200 ${isActive(submenu.link?.url) ? "bg-gray-100" : ""
                                    }`}
                                >
                                  {submenu.link?.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.link?.url || "#"}
                        className={`block ${isActive(item.link?.url) ? "" : ""}`}
                        aria-label="menu-link"
                        role="link"
                      >
                        {item.link?.label?.trim()}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>


            {/* Mobile only button */}
            <Link
              href={HeaderData.link.url}
              className="btn btn-primary lg:hidden hover:bg-black mt-4"
            >
              {HeaderData.link.Kontakt_label}
            </Link>
          </div>

          {/* Desktop only button */}
          <div className="lg:w-[15%] 1xl:w-[25%] hidden lg:inline-flex justify-end">
            <Link
              href={HeaderData.link.url}
              className="btn btn-primary hidden lg:inline-flex mt-0 hover:bg-black"
            >
              {HeaderData.link.Kontakt_label}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <span
            className="mobile-toggle w-8 flex lg:hidden cursor-pointer"
            aria-label="mobile-menu"
          >
            <Image
              src={MobileToggle}
              alt="mobile-btn"
              onClick={handleMenuToggle}
            />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
