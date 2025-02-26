export interface Book {
    id: number
    cover?: string
    category: string
    buyLink?: string
    downloadLink?: string
  }


  export const books: Book[] = [
    {
      id: 3,
      category: "Backend System Design",
      cover: '/images/books/dda.png',
      downloadLink: "https://drive.google.com/file/d/1zbqhUvFrUcnMNO34W6s8lc1zx0G-NXcT/view?usp=sharing",
    },
    {
      id: 1,
      category: "Personal Productivity and Growth",
      cover: '/images/books/ath.png',
      buyLink: "https://amzn.in/d/awi2qQr",
    },
    {
      id: 2,
      category: "Personal Productivity and Growth",
      cover: '/images/books/48laws.png',
      buyLink: "https://amzn.in/d/ivVZgSW",
    },
    {
      id: 4,
      category: "Spirituality and Consciousness",
      cover: '/images/books/sexm.png',
       downloadLink: "https://drive.google.com/file/d/1vqYsHaMM2fKCZNJtRLupiDI9Jq41TXd8/view?usp=sharing",
    },
    {
      id: 5,
      category: "Spirituality and Consciousness",
      cover: '/images/books/mti.png',
       downloadLink: "https://drive.google.com/file/d/1vm59hwMy78V3sT-viJW9EX_dAWJJbR40/view?usp=sharing",
    },
  ]