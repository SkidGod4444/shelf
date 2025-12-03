export interface Book {
    id: number
    cover?: string
    category: string
    buyLink?: string
    downloadLink?: string
  }


  export const books: Book[] = [
    {
      id: 30,
      category: "Computer Languages",
      cover: '/images/books/js.png',
      downloadLink: "https://drive.google.com/file/d/1RhLeFbhPJ8JlQx6eVvJeL-HkmHtTCEwN/view?usp=sharing",
    },
    {
      id: 10,
      category: "Computer Languages",
      cover: '/images/books/letusc.png',
      downloadLink: "https://drive.google.com/file/d/1ntlt_dEopGGYSiQ9KzuzSJVOg7Vb7geR/view?usp=sharing",
    },
    {
      id: 3,
      category: "Data Science & Algorithms",
      cover: '/images/books/dda.png',
      downloadLink: "https://drive.google.com/file/d/1zbqhUvFrUcnMNO34W6s8lc1zx0G-NXcT/view?usp=sharing",
    },

    {
      id: 4,
      category: "AI Agents",
      cover: '/images/books/pbai.png',
      downloadLink: "https://drive.google.com/file/d/1g0gk0jb9kPQZf23XO3LkVCHGzIC-lZcJ/view?usp=sharing",
    },

    {
      id: 110,
      category: "Data Science & Algorithms",
      cover: '/images/books/algoi.png',
      downloadLink: "https://drive.google.com/file/d/1ouyRO87P_QSZyBymrq5HarzrQiEi_Eg3/view?usp=sharing",
    },

    // Personal Productivity and Growth

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
      id: 21,
      category: "Personal Productivity and Growth",
      cover: '/images/books/lim.png',
      downloadLink: "https://drive.google.com/file/d/1rA3kRjxXFTsJisIdXqvQ9ahvK3ORTqAZ/view?usp=sharing",
    },

    // Enterpreneurship,Startup and Business

    {
      id: 120,
      category: "Enterpreneurship,Startup and Business",
      cover: '/images/books/100m.png',
      downloadLink: "https://drive.google.com/file/d/1R7F0I2dLekZmUwVPaxPjVvRLRUuqxt9d/view?usp=sharing",
    },
    {
      id: 121,
      category: "Enterpreneurship,Startup and Business",
      cover: '/images/books/tls.png',
      buyLink: "https://amzn.in/d/jbtgxDY",
    },

    // Spirituality and Consciousness

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