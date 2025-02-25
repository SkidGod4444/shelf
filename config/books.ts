export interface Book {
    id: number
    cover?: string
    category: string
    buyLink?: string
    downloadLink?: string
  }


  export const books: Book[] = [
    {
      id: 1,
      category: "Personal Productivity and Growth",
      buyLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    },
    {
      id: 2,
      category: "Self Help",
      downloadLink: "https://www.amazon.com/Amp-It-Up-Leading-Hypergrowth/dp/1119836115",
    },
    {
      id: 3,
      category: "Personal Productivity and Growth",
      buyLink: "https://www.amazon.com/Think-Again-Power-Knowing-What/dp/1984878106",
    },
    {
      id: 4,
      category: "Personal Productivity and Growth",
      buyLink: "https://www.amazon.com/Courage-Be-Disliked-Phenomenon-Happiness/dp/1501197274",
    },
  ]