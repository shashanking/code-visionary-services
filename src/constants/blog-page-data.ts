import BlogImg1 from "../assets/blog-page/blog-img-1.jpg";
import BlogImg2 from "../assets/blog-page/blog-img-2.jpg";
import BlogImg3 from "../assets/blog-page/blog-img-3.jpg";
import BlogImg4 from "../assets/blog-page/blog-img-4.jpg";

interface BlogHero {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export const BlogHeroData: BlogHero[] = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg1,
    slug: "blog-123",
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg2,
    slug: "blog-456",
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg3,
    slug: "blog-789",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg4,
    slug: "blog-321",
  },
];
