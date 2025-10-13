import React from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import CVSLogoImg from "../assets/cvs-logo/footer-logo.png";
import CVSLogoBg from "../assets/cvs-logo/footer-bg.png";
import CenturyBank from "../assets/footer-img/first-century-bank.png";
import PNCbank from "../assets/footer-img/pnc-bank.png";
import DMCAprotected from "../assets/footer-img/dmca-protected.png";
import GoogleDevAgency from "../assets/footer-img/google-dev-agency.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  PhoneIcon,
  Send,
} from "lucide-react";

// TwitterX SVG Icon
const TwitterXIcon: React.FC = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    style={{ display: "block" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1 2H21.4025L14.1125 10.2536L22.6632 22H16.2042L10.9695 15.0114L4.97779 22H0.6726L8.38867 13.2268L0.119141 2H6.73336L11.4871 8.41057L17.1 2ZM16.0346 20.0887H17.7977L6.79774 3.81441H4.91137L16.0346 20.0887Z"
      fill="currentColor"
    />
  </svg>
);

const FooterSection: React.FC = () => (
  <SectionContainer
    id="footer-section"
    fullWidth
    padding="none"
    background="#13416b"
    className="bg-[#13416b] text-white flex flex-col items-center pt-20"
  >
    <ContentContainer
      maxWidth="7xl"
      paddingX="lg"
      className="relative flex flex-col justify-center items-center text-center"
    >
      <div className="relative w-full max-w-2xl">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-between w-full gap-2">
          <h5 className="font-heading font-bold text-title-md text-[#ff7e59] uppercase text-center md:text-left leading-tight max-w-md">
            GET THE LATEST UPDATES,
            <br />
            TIPS & INSIGHTS
          </h5>

          <form
            className="flex items-center bg-[#f4faff] rounded-full pl-4 pr-0.5 max-w-full md:max-w-[400px] w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Email ID"
              className="flex-1 text-[#13416b] text-base py-2 outline-none"
            />
            <button
              type="submit"
              className="ml-3 px-6 py-1.5 gap-2 rounded-full font-heading font-bold uppercase bg-[#e55e36] hover:bg-[#ff7e59] min-w-[150px] flex items-center justify-center"
            >
              SEE ALL
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Main Footer Card */}
        <div className="mt-12 p-6 md:pt-12 md:px-12 pb-4 bg-[rgba(34,69,110,0.9)] rounded-t-4xl flex flex-col gap-6 shadow-[0_8px_60px_rgba(0,0,0,0.1)]">
          <div className="w-full flex flex-wrap items-start justify-between">
            <div className="flex flex-col items-left mb-8">
              <img
                src={CVSLogoImg}
                alt="CVS Logo"
                className="h-12 w-auto mb-10"
              />
              <p className="font-sans text-white text-left mb-12 leading-relaxed max-w-xs">
                We help startups and brands launch fast, reliable digital
                products. From UX and design to modern development and growth,
                our team builds experiences that look great and perform even
                better.
              </p>
              <div className="flex justify-start md:justify-center items-center space-x-3">
                <button className="w-11 h-11 rounded-full bg-[#ff7e59] hover:bg-[#fb976e] flex items-center justify-center text-white">
                  <FacebookIcon />
                </button>
                <button className="w-11 h-11 rounded-full bg-[#ff7e59] hover:bg-[#fb976e] flex items-center justify-center text-white">
                  <InstagramIcon />
                </button>
                <button className="w-11 h-11 rounded-full bg-[#ff7e59] hover:bg-[#fb976e] flex items-center justify-center text-white">
                  <LinkedinIcon />
                </button>
                <button className="w-11 h-11 rounded-full bg-[#ff7e59] hover:bg-[#fb976e] flex items-center justify-center text-white">
                  <TwitterXIcon />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start mb-8">
              <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                MENU
              </h6>
              <div className="flex flex-col items-start space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Reviews",
                  "Portfolio",
                  "Blog",
                  "Contact",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-[#a6b5ce] text-sm hover:text-[#ffffff] font-sans font-[300]"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <h6 className="font-heading font-bold text-body mt-8 mb-2 tracking-wider text-white">
                PARTNERS
              </h6>
              <div className="flex flex-col items-start gap-2">
                <div className="">
                  <img src={PNCbank} alt="PNC Bank" className="h-8 w-auto" />
                </div>

                <div className="">
                  <img
                    src={CenturyBank}
                    alt="Century Bank"
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start mb-8">
              <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                IMPORTANT
              </h6>
              <div className="flex flex-col items-start space-y-2">
                {[
                  "Refund Policy",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Careers at CVS",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-[#a6b5ce] text-sm hover:text-[#ffffff] font-sans font-[300]"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <h6 className="font-heading font-bold text-body mt-8 mb-2 tracking-wider text-white">
                CONTACT
              </h6>
              <div className="flex flex-col space-y-1.5">
                <div className="flex text-left text-sm text-[#f0f0f0] font-sans font-[300] gap-2">
                  <PhoneIcon className="w-5 h-5" /> +91 8637515632
                </div>
                <div className="flex text-left text-sm text-[#f0f0f0] font-sans font-[300] gap-2">
                  <Mail className="w-5 h-5" />
                  office@codevisionaryservices.com
                </div>
                <div className="flex text-left text-sm text-[#f0f0f0] font-sans font-[300] gap-2">
                  <MapPin className="w-5 h-5" /> Kolkata, India
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start mb-8">
              <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                BUSINESS
              </h6>
              <p className="text-left text-sm text-[#f0f0f0] font-sans font-[300]">
                Monday - Friday :<br /> 10:00 PST to 5:00 PST
                <br />
                Saturday & Sunday :<br />
                Fixed Off
              </p>

              <h6 className="font-heading font-bold text-body mt-8 mb-2 tracking-wider text-white">
                PAYMENT
              </h6>
              <button className="bg-gradient-to-r from-[#e86d3a] to-[#c8462b] hover:from-[#c8462b] hover:to-[#e86d3a] text-white text-xs font-semibold rounded-[18px] py-1 px-5 mb-2 shadow">
                PAY NOW!
              </button>
              <div className="flex gap-1.5 mt-2">
                <div className="">
                  <img
                    src={GoogleDevAgency}
                    alt="Century Bank"
                    className="h-10 w-auto"
                  />
                </div>

                <div className="">
                  <img
                    src={DMCAprotected}
                    alt="Century Bank"
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-0.5">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(181, 68, 44, 0) 0%, #B5442C 35%, #B5442C 65%, rgba(181, 68, 44, 0) 100%)",
              }}
            />
          </div>

          {/* Bottom CVS Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-sm text-[#f0f0f0]">2025 All rights reserved.</p>
            <p className="text-sm text-[#f0f0f0]">
              Designed by Code Visionary Services.
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  </SectionContainer>
);

export default FooterSection;
