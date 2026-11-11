import Image from "next/image"
import { papers } from "@/config/papers"

const papersByCategory = papers.reduce(
  (acc, paper) => {
    const category = paper.category.trim()
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(paper)
    return acc
  },
  {} as Record<string, typeof papers>,
)

function readLabel(link: string) {
  try {
    const host = new URL(link).hostname.replace(/^www\./, "")
    return host === "drive.google.com" ? "Read on Google Drive" : `Read at ${host}`
  } catch {
    return "Read the paper"
  }
}

export default function PapershelfContent() {
  return (
    <div>
      {Object.entries(papersByCategory).map(([category, papers]) => (
        <section key={category} className="pt-12">
          <h2 className="mb-5 font-serif text-xl font-medium sm:text-2xl">{category}</h2>
          <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {papers.map((paper) => (
              <li key={paper.id}>
                <a
                  href={paper.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5"
                >
                  <span className="relative h-28 w-[5.25rem] shrink-0 overflow-hidden rounded-[2px] bg-foreground shadow-[2px_3px_0_var(--wall-shade)]">
                    <Image
                      src={paper.cover || "/images/paper-placeholder.webp"}
                      alt=""
                      fill
                      sizes="84px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-lg font-medium leading-snug group-hover:underline">
                      {paper.title}
                    </span>
                    <span className="mt-1 text-muted-foreground">
                      {[paper.publishedIn, paper.year].filter(Boolean).join(", ")}
                    </span>
                    <span className="mt-auto pt-3 text-sm text-primary">
                      {readLabel(paper.downloadLink)}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
