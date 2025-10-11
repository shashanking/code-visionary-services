import kbidLogo from "../assets/clients/k-bid.jpeg";
import ospLogo from "../assets/clients/osp-logo.png";
import riqshaLogo from "../assets/clients/riqsha.jpeg";
import rideeasyLogo from "../assets/clients/rideeasy.webp";
import moneyblasterLogo from "../assets/clients/moneyblaster.jpg";
import dentologieLogo from "../assets/clients/dentologie.jpg";
import pistonheadLogo from "../assets/clients/pistonhead.png";
import shopinfinityLogo from "../assets/clients/shopinfinity.webp";
import happyhelpLogo from "../assets/clients/happyhelpinghands.webp";
import kaltechLogo from "../assets/clients/kaltech.jpeg";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  video?: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "K-Bid",
    title: "E-commerce Platform",
    image: kbidLogo,
    // video: dummyTestimonialVideo,
    text: "“CVS rebuilt our storefront with blazing performance and a clean UX. Conversions are up and maintenance is a breeze.”",
  },
  {
    id: 2,
    name: "OSP Broker",
    title: "Logistics SaaS",
    image: ospLogo,
    // video: dummyTestimonialVideo,
    text: "“Reliable team, clear communication, and on-time delivery. Our onboarding flow is now 2× faster.”",
  },
  {
    id: 3,
    name: "HHH",
    title: "Nonprofit",
    image: happyhelpLogo,
    // video: dummyTestimonialVideo,
    text: "“They modernized our website and donation experience. The impact on engagement has been immediate.”",
  },
  {
    id: 4,
    name: "RiQsha",
    title: "Mobility App",
    image: riqshaLogo,
    // video: dummyTestimonialVideo,
    text: "“From idea to launch, CVS handled design and engineering seamlessly. The app feels polished and fast.”",
  },
  {
    id: 5,
    name: "ShopInfinity",
    title: "Retail Brand",
    image: shopinfinityLogo,
    // video: dummyTestimonialVideo,
    text: "“Beautiful UI, stable integrations, and attentive support. A great partner for our growth.”",
  },
  {
    id: 6,
    name: "Ride Easy",
    title: "Auto Services",
    image: rideeasyLogo,
    // video: dummyTestimonialVideo,
    text: "“Excellent communication and execution. Our booking experience is significantly better now.”",
  },
  {
    id: 7,
    name: "MoneyBlaster",
    title: "FinTech Tournament",
    image: moneyblasterLogo,
    // video: dummyTestimonialVideo,
    text: "“CVS delivered a performant, real-time experience on a tight timeline. We'll work with them again.”",
  },
  {
    id: 8,
    name: "Dentologie",
    title: "Healthcare",
    image: dentologieLogo,
    // video: dummyTestimonialVideo,
    text: "“Thoughtful design and smooth implementation. Our patients love the updated portal.”",
  },
  {
    id: 9,
    name: "PistonHeads",
    title: "Media",
    image: pistonheadLogo,
    // video: dummyTestimonialVideo,
    text: "“High-quality engineering and attention to detail. The site feels premium and quick.”",
  },
  {
    id: 10,
    name: "Kaltech",
    title: "Industrial",
    image: kaltechLogo,
    // video: dummyTestimonialVideo,
    text: "“CVS helped us modernize internal systems and data flows. Their AI-driven automation reduced manual effort dramatically.”",
  },
];
