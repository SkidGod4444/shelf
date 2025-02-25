

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
    title: "Detecting Near Duplicates for Web Crawling",
    category: "Machine Learning",
    downloadLink: "https://arxiv.org/pdf/1706.03762.pdf",
    publishedIn: "NeurIPS",
    year: 2017,
  },
  {
    id: 2,
    title: "Snapshot-Free, Transparent, and Robust Memory Reclamation for Lock-Free Data Structures",
    category: "Computer Vision",
    downloadLink: "https://arxiv.org/pdf/1512.03385.pdf",
    publishedIn: "CVPR",
    year: 2016,
  },
  {
    id: 3,
    title: "Language Models are Few-Shot Learners",
    category: "Natural Language Processing",
    downloadLink: "https://arxiv.org/pdf/2005.14165.pdf",
    publishedIn: "NeurIPS",
    year: 2020,
  },
]

