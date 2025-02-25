

export interface Paper {
  id: number
  title: string
  cover?: string
  category: string
  downloadLink: string
  publishedIn?: string
  year: number
}


export const papers: Paper[] = [
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

