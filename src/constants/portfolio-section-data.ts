import kaltechImg from "../assets/portfolio_Responsive_design-1.png";
import gutCheckImg from "../assets/portfolio_Responsive_design-2.png";
import moneyBlasterImg from "../assets/portfolio_Responsive_design-3.png";
import dorjiEcommerceImg from "../assets/portfolio_Responsive_design-4.png";
import harmonyRehabImg from "../assets/portfolio_Responsive_design-5.png";
import ospDashboardImg from "../assets/portfolio_Responsive_design-6.png";

export interface PortfolioItem {
  id: string;
  title: string;
  img: string;
  description: string;
  category: string;
}

export const categories = [
  { label: "All" },
  { label: "Websites" },
  { label: "Mobile application" },
  { label: "Web application" },
  { label: "Branding" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "CVS-PRO-1",
    title: "KALTECH CONSULTANCY",
    category: "Websites",
    img: kaltechImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-2",
    title: "GUT CHECK",
    category: "Websites",
    img: gutCheckImg,
    description:
      "Website redesign focused on clarity, performance, and higher conversions across devices.",
  },
  {
    id: "CVS-PRO-3",
    title: "MONEY BLASTER",
    category: "Websites",
    img: moneyBlasterImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-4",
    title: "DORJI ECOMMERCE",
    category: "Web applications",
    img: dorjiEcommerceImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-5",
    title: "HARMONY REHAB",
    category: "Websites",
    img: harmonyRehabImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-6",
    title: "OSP DASHBOARD",
    category: "Web applications",
    img: ospDashboardImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
];

export interface ChallengeItem {
  title: string;
  description: string;
  icon?: string;
}

export interface TechStackItem {
  name: string;
  description: string;
  icon?: string;
}

export interface ApproachLevel {
  title: string;
  description: string | string[];
}

export interface Approach {
  title: string;
  subtitle?: string;
  levels: ApproachLevel[];
}

export interface ResultMetric {
  percentage: string;
  title: string;
  description: string;
}

export interface PortfolioItemDetails {
  id: string;

  hero: {
    title: string;
    subtitle?: string;
    description: string;
    client: string;
    role: string;
    date: string;
    heroImg: string;
    featuredVideo?: string;
  };

  challenges: {
    title: string;
    subtitle: string;
    items: ChallengeItem[];
  };

  services: string[];

  solutions: {
    title: string;
    subtitle: string;
    description: string;
    techStack: TechStackItem[];
    approaches: Approach[];
  };

  summary: {
    title: string;
    description: string;
    image: string;
    keyAchievements?: string[];
  };

  results: {
    title?: string;
    metrics: ResultMetric[];
  };
}

export const portfolioItemsDetails: PortfolioItemDetails[] = [
  {
    id: "CVS-PRO-1",

    hero: {
      title: "KALTECH CONSULTANCY",
      subtitle: "Leathertalks' 80% Sales Surge",
      description:
        "From custom websites and software to creative graphic design, we deliver tailored services that combine innovation, functionality, and style. Helping your brand thrive in the digital world.",
      client: "Digital Marketing",
      role: "Digital Marketing",
      date: "20 Jan, 2024",
      heroImg: "/images/project1-thumb.jpg",
    },

    challenges: {
      title: "The Challenge",
      subtitle:
        "Before our engagement, Leathertalks faced sub-2% MoM growth, a low repeat purchase rate, and data silos that prevented a unified customer view.",
      items: [
        {
          title: "Stagnant Sales Growth",
          description:
            "Initial growth had plateaued, with a high blended CPA and difficulty acquiring qualified customers profitably.",
          icon: "item icon",
        },
        {
          title: "Fragmented Customer View",
          description:
            "Data was siloed across Shopify, Google Analytics, and email platforms, making true personalization impossible.",
          icon: "item icon",
        },
        {
          title: "Low Repeat Purchase Rate",
          description:
            "Revenue was overly reliant on first-time buyers, with over 85% of customers never making a second purchase.",
          icon: "item icon",
        },
        {
          title: "Inefficient Marketing",
          description:
            "Broadcast-style communication failed to resonate, leading to low engagement and a poor LTV:CAC ratio.",
          icon: "item icon",
        },
      ],
    },

    services: ["SEO", "Social Media Marketing", "Social Media Management"],

    solutions: {
      title: "The Solution",
      subtitle: "Deconstructing the Funnels",
      description:
        "Our success was built on two interconnected funnels: one to acquire new customers efficiently, and another to retain them for life.",

      techStack: [
        {
          name: "Klaviyo",
          description:
            "Leveraged for event-triggered automation and predictive analytics (like predicted CLV and churn risk) to create hyper-personalized email/SMS campaigns.",
        },
        {
          name: "Mailchimp",
          description: "Corresponding description",
        },
        {
          name: "Zoho CRM",
          description: "Corresponding description",
        },
      ],

      approaches: [
        {
          title: "Full-Funnel Performance Marketing",
          subtitle: "",
          levels: [
            {
              title: "Audience Sculpting",
              description:
                "Deployed 1% Lookalike Audiences from top-quartile spenders and layered niche luxury interest targeting on Meta platforms. Leveraged intent-based keyword strategies on Google Search.",
            },
            {
              title: "Creative Excellence",
              description:
                "Implemented a rigorous A/B testing framework for ad creatives and copy to identify statistically significant winners for scaling.",
            },
            {
              title: "Conversion Rate Optimization (CRO)",
              description:
                "Optimized mobile UX, improved page load speed by 40%, and streamlined the checkout flow from 5 steps to 3 to reduce friction.",
            },
          ],
        },
        {
          title: "The Leather Ledger Loyalty Program",
          subtitle:
            "The cornerstone of our retention strategy was a tiered loyalty program with segmentation based on spend velocity and purchase frequency.",
          levels: [
            {
              title: "Rewards included",
              description: [
                "Early access to new collections.",
                "Exclusive invitations to virtual brand events.",
                "Complimentary monogramming services.",
                "Anniversary gifts and surprise rewards.",
              ],
            },
          ],
        },
      ],
    },

    summary: {
      title: "Deconstructing the Funnels",
      description:
        "Our success was built on two interconnected funnels: one to acquire new customers efficiently, and another to retain them for life.",
      image: "/images/project1-summary.jpg",
    },

    results: {
      metrics: [
        {
          percentage: "80%",
          title: "Increase in Sales",
          description:
            "From higher-quality traffic and improved conversion rates.",
        },
        {
          percentage: "80%",
          title: "Increase in Sales",
          description:
            "From higher-quality traffic and improved conversion rates.",
        },
        {
          percentage: "80%",
          title: "Increase in Sales",
          description:
            "From higher-quality traffic and improved conversion rates.",
        },
        {
          percentage: "80%",
          title: "Increase in Sales",
          description:
            "From higher-quality traffic and improved conversion rates.",
        },
      ],
    },
  },
];
