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
    id: 8,
    type: "yt",
    url: "https://youtu.be/ztHopE5Wnpc?si=SJkJDkAFx5lhZNty",
    category: "Tech Courses",
  },
  {
    id: 3,
    type: "yt",
    url: "https://youtu.be/jjW8w8ED3Ns?si=R6OSihf6a0GOBDXa",
    category: "Tech Internals Playlists",
  },
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