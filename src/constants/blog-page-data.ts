import BlogImg1 from "../assets/blog-page/blog-img-1.jpg";
import BlogImg2 from "../assets/blog-page/blog-img-2.jpg";
import BlogImg3 from "../assets/blog-page/blog-img-3.jpg";
import BlogImg4 from "../assets/blog-page/blog-img-4.jpg";
import BlogImg5 from "../assets/blog-page/blog-img-5.jpg";
import BlogImg6 from "../assets/blog-page/blog-img-6.jpg";
import BlogImg7 from "../assets/blog-page/blog-img-7.jpg";
import BlogImg8 from "../assets/blog-page/blog-img-8.jpg";

interface Blogs {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  author?: string;
  description?: string;
}

export const BlogsData: Blogs[] = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg1,
    slug: "blog-123",
    author: "Daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg2,
    slug: "blog-456",
    author: "daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg3,
    slug: "blog-789",
    author: "Daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg4,
    slug: "blog-321",
    author: "daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "05",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg5,
    slug: "blog-123",
    author: "Daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "06",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg6,
    slug: "blog-456",
    author: "daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "07",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg7,
    slug: "blog-789",
    author: "Daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
  {
    id: "08",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg8,
    slug: "blog-321",
    author: "daniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis placerat enim, ut imperdiet mi pulvinar et. Vivamus vitae vestibulum nisi. Sed facilisis dui eu ex tempor volutpat ac a nisl.",
  },
];
