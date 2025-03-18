export interface Blog {
    slug: string
    title: string
    description: string
    date: string
    cover?: string
    category: string
    author?: string
  }


  export const blogs: Blog[] = [
    {
     slug: "https://b.devwtf.in/byodb",
    category: "Low-level Systems",
    //   cover: '/images/books/dda.png',
    title: "Build your own Custom Database using TypeScript",
    description: "This project will help you grasp low-level systems without requiring any prior knowledge of database engineering.  This post outlines my journey of creating LumeDB, an industry-ready, file-based, and performant database.",
    date: "19-Mar-2025",
    author: "Saidev Dhal"
    },
  ];
