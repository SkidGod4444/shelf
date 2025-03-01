export interface Video {
    id: number
    url: string
    title?: string,
    type: 'yt' | 'drive',
    thumbnail?: string
    category: string
  }

export const videos: Video[] = [
    {
      id: 1,
      type: "yt",
      url: "https://youtu.be/bI6q16ffdgQ?si=4M_UlqOjR4GuRwEk",
      category: "Designing Tutorials",
    },
    {
      id: 2,
      type: "yt",
      url: "https://youtu.be/DPqiIzK97K0?si=HIUlcacU02NNCvzn",
      category: "MicroControllers and IOTs",
    },
  ]