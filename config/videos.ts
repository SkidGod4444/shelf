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
    // For YouTube videos, `title` is shown when the title lookup has no API key or fails.
    {
      id: 20,
      type: "yt",
      url: "https://youtu.be/7NPIENPr-zk",
      title: "CMU Intro to Database Systems: #01 Relational Model & Algebra",
      category: "Tech Courses",
    },
    {
      id: 21,
      type: "yt",
      url: "https://youtu.be/cQP8WApzIQQ",
      title: "MIT 6.824 Distributed Systems: Lecture 1, Introduction",
      category: "Tech Courses",
    },
    {
      id: 22,
      type: "yt",
      url: "https://youtu.be/VMj-3S1tku0",
      title: "The spelled-out intro to neural networks and backpropagation: building micrograd",
      category: "AI & Machine Learning",
    },
    {
      id: 23,
      type: "yt",
      url: "https://youtu.be/HyznrdDSSGM",
      title: "Ben Eater: 8-bit computer update",
      category: "MicroControllers and IOTs",
    },
  ]