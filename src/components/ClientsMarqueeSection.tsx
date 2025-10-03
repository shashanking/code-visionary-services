import React from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import { clients } from "../constants/clients-data";

const RowItem: React.FC<{ name: string; logo?: string }> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/50 backdrop-saturate-120 backdrop-blur-sm whitespace-nowrap w-40 md:h-35 flex-shrink-0">
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
    <SectionContainer
      id="clients"
      fullWidth
      background="#f0f0f0"
      padding="lg"
      className="overflow-x-hidden"
    >
      <ContentContainer maxWidth="7xl" paddingX="xl">
        <div className="w-full text-center">
          <div className="font-earth-orbiter font-bold text-body1 tracking-widest uppercase text-[#b44a2c] mb-4 md:text-xl">
            Trusted by clients
          </div>
          <div className="font-earth-orbiter font-bold text-title-md tracking-widest uppercase text-[#143255] mb-10 md:text-3xl md:mb-16">
            Across industries
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex items-center gap-6 animate-marquee w-max">
            {marqueeList.map((c, i) => (
              <RowItem key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ClientsMarqueeSection;
