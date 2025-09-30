import React from "react";

import kbidLogo from "../assets/clients/k-bid.jpeg";
import ospLogo from "../assets/clients/osp-logo.png";
import riqshaLogo from "../assets/clients/riqsha.jpeg";
import rideeasyLogo from "../assets/clients/rideeasy.webp";
import moneyblasterLogo from "../assets/clients/moneyblaster.jpg";
import dentologieLogo from "../assets/clients/dentologie.jpg";
import pistonheadLogo from "../assets/clients/pistonhead.png";
import shopinfinityLogo from "../assets/clients/shopinfinity.webp";
import happyhelpLogo from "../assets/clients/happyhelpinghands.webp";

const clients: Array<{ name: string; logo?: string }> = [
  { name: "K-Bid", logo: kbidLogo },
  { name: "OSP Broker", logo: ospLogo },
  { name: "HHH", logo: happyhelpLogo },
  { name: "RiQsha", logo: riqshaLogo },
  { name: "ShopInfinity", logo: shopinfinityLogo },
  { name: "Ride Easy", logo: rideeasyLogo },
  { name: "MoneyBlaster", logo: moneyblasterLogo },
  { name: "Dentologie", logo: dentologieLogo },
  { name: "PistonHeads", logo: pistonheadLogo },
];

const RowItem: React.FC<{ name: string; logo?: string }> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/50 backdrop-saturate-120 backdrop-blur-sm whitespace-nowrap w-30 h-30 md:w-40 md:h-35 flex-shrink-0">
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-14 h-14 rounded-none object-contain bg-transparent md:w-16 md:h-16"
        />
      ) : (
        <div className="w-14 h-14 rounded-none bg-gradient-to-br from-[#b44a2c] to-[#882f1a] text-white text-base font-extrabold font-montserrat flex items-center justify-center tracking-wider md:w-16 md:h-16">
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
      )}

      <div className="font-montserrat font-bold text-xs md:text-sm text-[#143255] text-center mt-2 max-w-full overflow-hidden text-ellipsis">
        {name}
      </div>
    </div>
  );
};

const ClientsMarqueeSection: React.FC = () => {
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <div
      id="clients"
      className="relative w-screen -ml-[calc(50vw-50%)] py-20 bg-[#f0f0f0] overflow-x-hidden"
    >
      <div className="w-full text-center px-8">
        <div className="font-earth-orbiter font-bold text-body1 tracking-widest uppercase text-[#b44a2c] mb-4 md:text-xl">
          Trusted by clients
        </div>
        <div className="font-earth-orbiter font-bold text-title-md tracking-widest uppercase text-[#143255] mb-10 md:text-3xl md:mb-16">
          Across industries
        </div>
      </div>

      <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex items-center gap-6 animate-marquee w-max">
          {marqueeList.map((c, i) => (
            <RowItem key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarqueeSection;
