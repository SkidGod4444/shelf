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
      slug: "https://notes.eatonphil.com/database-basics.html",
      category: "Low-level Systems",
      title: "Writing a SQL database from scratch in Go: 1. SELECT, INSERT, CREATE and a REPL",
      description: "The first part of a series on writing a SQL database from scratch in Go.",
      date: "06-Mar-2020",
      author: "Phil Eaton"
    },
    {
      slug: "https://overreacted.io/a-complete-guide-to-useeffect/",
      category: "React Internals",
      title: "A Complete Guide to useEffect",
      description: "Effects are a part of your data flow.",
      date: "09-Mar-2019",
      author: "Dan Abramov"
    },
  ];
