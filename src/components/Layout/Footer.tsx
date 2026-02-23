import React from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import CVSLogoImg from "../../assets/cvs-logo/footer-logo.png";
import CVSLogoBg from "../../assets/cvs-logo/footer-bg.png";

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
// const TwitterXIcon: React.FC = () => (
//   <svg
//     width={24}
//     height={24}
//     viewBox="0 0 24 24"
//     fill="none"
//     style={{ display: "block" }}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M17.1 2H21.4025L14.1125 10.2536L22.6632 22H16.2042L10.9695 15.0114L4.97779 22H0.6726L8.38867 13.2268L0.119141 2H6.73336L11.4871 8.41057L17.1 2ZM16.0346 20.0887H17.7977L6.79774 3.81441H4.91137L16.0346 20.0887Z"
//       fill="currentColor"
//     />
//   </svg>
// );

const Footer: React.FC = () => {
  return (
    <SectionContainer
      id="footer-section"
      fullWidth
      padding="none"
      background="linear-gradient(287.56deg, #0861AA 0%, #032744 100%)"
      className="text-white flex flex-col items-center pt-20 relative"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl">
          {/* Newsletter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-between w-full gap-2">
            <h5 className="font-heading font-bold text-title-md bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent uppercase text-center md:text-left leading-tight max-w-md">
              GET THE LATEST UPDATES,
              <br />
              TIPS & INSIGHTS
            </h5>

            <form
              className="flex items-center bg-[#f4faff] rounded-full pl-4 pr-0.5 max-w-full mx-auto md:mx-0 sm:max-w-[400px] w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Email ID"
                className="flex-1 text-[#13416b] text-base py-2 outline-none"
              />
              <button
                type="submit"
                className="ml-3 px-6 py-1.5 gap-2 rounded-full font-heading font-bold uppercase bg-[#B5442C] hover:bg-[#e86d3a] min-w-[150px] flex items-center justify-center cursor-pointer"
              >
                SEE ALL
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Main Footer Card with Background Image and Blur Effect */}
          <div className="mt-12 rounded-t-4xl flex flex-col gap-6 shadow-[0_8px_60px_rgba(0,0,0,0.1)] relative overflow-hidden">
            {/* Background Image with Blur Effect */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${CVSLogoBg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(8px) brightness(0.8)",
                transform: "scale(0.8)",
              }}
            />

            {/* Content Container with Backdrop Blur */}
            <div className="relative z-10 p-6 md:pt-12 md:px-12 pb-4 bg-[#265c8090] backdrop-blur-lg rounded-t-4xl">
              <div className="w-full flex flex-wrap items-start justify-between">
                <div className="flex flex-col items-left mb-8">
                  <img
                    src={CVSLogoImg}
                    alt="CVS Logo"
                    className="h-12 w-auto mb-10"
                  />
                  <p className="font-sans text-white text-left mb-12 leading-relaxed max-w-xs">
                    We help companies and brands launch fast, reliable digital
                    products. From UX and design to modern development and
                    growth, our team builds experiences that look great and
                    perform even better.
                  </p>
                  <div className="flex justify-start md:justify-center items-center space-x-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61579748491813"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full text-black hover:text-[#131a22] bg-gradient-to-r from-[#B5442C] to-[#FF9C87] hover:from-[#f0f0f0] hover:to-[#ffffff] cursor-pointer"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://www.instagram.com/codevisionaryservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full text-black hover:text-[#131a22] bg-gradient-to-r from-[#B5442C] to-[#FF9C87] hover:from-[#f0f0f0] hover:to-[#ffffff] cursor-pointer"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/code-visionary-services/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 rounded-full text-black hover:text-[#131a22] bg-gradient-to-r from-[#B5442C] to-[#FF9C87] hover:from-[#f0f0f0] hover:to-[#ffffff] cursor-pointer"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-start mb-8">
                  <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                    MENU
                  </h6>
                  <div className="flex flex-col items-start space-y-2">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-[#a6b5ce] text-sm hover:text-[#ffffff] font-sans font-[300]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>


                </div>

                <div className="flex flex-col items-start mb-8">
                  <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                    IMPORTANT
                  </h6>
                  <div className="flex flex-col items-start space-y-2">
                    {[
                      { label: "Privacy Policy", href: "/privacy-policy" },
                      { label: "Terms & Conditions", href: "/terms-and-conditions" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-[#a6b5ce] text-sm hover:text-[#ffffff] font-sans font-[300]"
                      >
                        {item.label}
                      </Link>
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
                      <MapPin className="w-5 h-5" /> Flat no. 402, Harendra Niwas, 71/A <br />
                      H.N. Nag Road, Jagaccha, Howrah, 711112
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start mb-8">
                  <h6 className="font-heading font-bold text-body mb-2 tracking-wider text-white">
                    BUSINESS
                  </h6>
                  <p className="text-sm text-[#f0f0f0]">
                    Udyam Registration Number:<br />UDYAM-WB-08-0128101
                  </p>
                  <p className="text-sm text-[#f0f0f0]">
                    CIN:<br />ACR-1254
                  </p>
                  <p className="text-left text-sm text-[#f0f0f0] font-sans font-[300]">
                    Monday - Friday :<br /> 10:00 PST to 5:00 PST
                    <br />
                    Saturday & Sunday :<br />
                    Fixed Off
                  </p>

                  <h6 className="font-heading font-bold text-body mt-8 mb-2 tracking-wider text-white">
                    PAYMENT
                  </h6>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <img
                      src="/indusind-logo.jpg"
                      alt="IndusInd Bank"
                      className="h-8 w-auto object-contain bg-white rounded p-1"
                    />
                    <img
                      src="/psypal-logo.png"
                      alt="PsyPal"
                      className="h-8 w-auto object-contain bg-white rounded p-1"
                    />
                    <img
                      src="/skydo-logo.webp"
                      alt="Skydo"
                      className="h-8 w-auto object-contain bg-white rounded p-1"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-full h-0.5 mb-4">
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(181, 68, 44, 0) 0%, #B5442C 35%, #B5442C 65%, rgba(181, 68, 44, 0) 100%)",
                  }}
                />
              </div>

              {/* Bottom Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
                
                <p className="text-sm text-[#f0f0f0]">
                  Copyright © 2025, Visionary Services LLP. All rights reserved.
                </p>
                <p className="text-sm text-[#f0f0f0]">
                  Code Visionary Services is now Visionary Services LLP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Footer;
