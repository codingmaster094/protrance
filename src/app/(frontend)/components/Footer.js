import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ FooterDatas }) => {
  if (!FooterDatas) return null;

  const { sprechzeiten, kontakt, navigationLinks, legalLinks, copyright } =
    FooterDatas;


  return (
    <footer className="border-t border-border">
      <div className="container">
        <div className="flex flex-col gap-10 py-12 1xl:flex-row justify-between 1xl:gap-32">
          <div className="flex flex-col footer-menu gap-4 md:border-b pb-4 sm:text-center 1xl:border-none 1xl:text-start">
            <Link href="/" aria-label="foot-logo" className="md:mx-auto 1xl:m-0">
              <Image src={FooterDatas.footerlogo.url} width={170} height={95} alt="footer-logo" />
            </Link>
            <div className="max-w-lg md:mx-auto 1xl:max-w-[383px]"
              dangerouslySetInnerHTML={{ __html: FooterDatas.description }}
            ></div>
          </div>

          <div className="flex flex-col gap-10 md:grid grid-cols-2 lg:flex lg:flex-row lg:gap-16 1xl:gap-32 justify-between">
            <div className="flex flex-col footer-menu gap-4 1xl:pt-12 1xl:max-w-52">
              <h5>Sprechzeiten</h5>
              <ul>
                {sprechzeiten?.map(({ id, day, time }) => (
                  <li key={id}>
                    {day} {time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 1xl:pt-12 1xl:max-w-52">
              <h5>Kontakt</h5>
              <ul>
                <li>
                  <Link href={kontakt?.phone_url || "#"} aria-label="phone">
                    {kontakt?.phone}
                  </Link>
                </li>
                <li>
                  <Link href={kontakt?.email_url || "#"} aria-label="email">
                    {kontakt?.email}
                  </Link>
                </li>
                <li>
                  {kontakt?.address?.split("\n").map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </li>
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 1xl:pt-12">
              <h5>Navigation</h5>
              <ul>
                {navigationLinks?.map(({ id, label, url }) => (
                  <li key={id}>
                    <Link href={url || "#"} aria-label="nav-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 1xl:pt-12">
              <h5>Rechtliches</h5>
              <ul>
                {legalLinks?.map(({ id, label, url }) => (
                  <li key={id}>
                    <Link href={url || "#"} aria-label="legal-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-center p-[10px]">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
