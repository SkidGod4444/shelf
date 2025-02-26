

export interface Paper {
  id: number
  title: string
  cover?: string
  category: string
  downloadLink: string
  publishedIn?: string
  year?: number
}


export const papers: Paper[] = [
  {
    id: 2,
    title: "Introduction to React in 30 bite-size Morsels",
    category: "React Internals",
    cover: "/images/papers/30react.png",
    downloadLink: "https://drive.google.com/file/d/12vxQUnyxWn4AHCp9kkayeDSsHCqJ-qGR/view?usp=sharing",
    publishedIn: "Fullstack.io",
    // year: 2009,
  },
  {
    id: 4,
    title: "Didact: Build a Miniature React with Hooks",
    category: "React Internals",
    cover: "/images/papers/byr.png",
    downloadLink: "https://pomb.us/build-your-own-react/",
    publishedIn: "Rodrigo Pombo",
    year: 2019,
  },
  {
    id: 1,
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    category: "Blockchain Technology ",
    cover: "/images/papers/btc.png",
    downloadLink: "https://drive.google.com/file/d/1CLFOPITYqg0_jadee1Kep4_bYQ1BBqe9/view?usp=sharing",
    publishedIn: "Satoshi Nakamoto",
    year: 2009,
  },
]

