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
    {
      slug: "https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it",
      category: "Databases",
      title: "What is the N+1 Query Problem and How to Solve it?",
      description: "Learn what the N+1 queries problem is by working through an example N+1 query updating it to a JOIN statement and going over how to identify them in the future.",
      date: "18-Jan-2023",
      author: "JD Lien"
    },
    {
      slug: "https://discord.com/blog/how-discord-stores-trillions-of-messages",
      category: "Databases",
      title: "How Discord Stores Trillions of Messages",
      description: "Engineer Bo Ingram shares insight into how Discord shoulders its traffic and provides a platform for our users to communicate.",
      date: "06-Mar-2023",
      author: "Bo Ingram"
    },
    {
      slug: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/",
      category: "Distributed Systems",
      title: "How Figma's multiplayer technology works",
      description: "A peek into the homegrown solution we built as the first design tool with live collaborative editing.",
      date: "16-Oct-2019",
      author: "Evan Wallace"
    },
    {
      slug: "https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/",
      category: "Distributed Systems",
      title: "Notes on Distributed Systems for Young Bloods",
      description: "Lessons for engineers who are new to building distributed systems.",
      date: "14-Jan-2013",
      author: "Jeff Hodges"
    },
    {
      slug: "https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/",
      category: "Distributed Systems",
      title: "Details of the Cloudflare outage on July 2, 2019",
      description: "Cloudflare's write-up of how one regular expression took down its network, and what changed afterwards.",
      date: "12-Jul-2019",
      author: "John Graham-Cumming"
    },
    {
      slug: "https://mcfunley.com/choose-boring-technology",
      category: "Software Engineering",
      title: "Choose Boring Technology",
      description: "Why a team should spend its few innovation tokens carefully and default to well-understood tools.",
      date: "30-Mar-2015",
      author: "Dan McKinley"
    },
    {
      slug: "https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/",
      category: "Software Engineering",
      title: "Parse, don't validate",
      description: "Using the type system to turn checks into data, so invalid states cannot be passed around.",
      date: "05-Nov-2019",
      author: "Alexis King"
    },
    {
      slug: "https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/",
      category: "Software Engineering",
      title: "Falsehoods Programmers Believe About Names",
      description: "Classic essay about how software routinely bumbles human names.",
      date: "17-Jun-2010",
      author: "Patrick McKenzie"
    },
    {
      slug: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/",
      category: "Software Engineering",
      title: "Things You Should Never Do, Part I",
      description: "Why rewriting working software from scratch is usually a mistake, told through Netscape.",
      date: "06-Apr-2000",
      author: "Joel Spolsky"
    },
  ];
