import { papers } from "@/config/papers"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

const papersByCategory = papers.reduce(
  (acc, paper) => {
    if (!acc[paper.category]) {
      acc[paper.category] = []
    }
    acc[paper.category].push(paper)
    return acc
  },
  {} as Record<string, typeof papers>,
)

export default function PapershelfContent() {
  return (
    <div className="grid gap-12">
      {Object.entries(papersByCategory).map(([category, papers]) => (
        <section key={category}>
          <h2 className="text-3xl font-serif my-8">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {papers.map((paper) => (
              <Card key={paper.id} className="group relative overflow-hidden">
                <CardContent className="p-0">
                <div className="aspect-[3/4] relative">
                    <Image
                      src={paper.cover || "/images/paper-placeholder.png"}
                      alt={paper.title}
                      fill
                      className="object-cover w-full h-full p-2" 
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={paper.downloadLink} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium line-clamp-4">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {paper.publishedIn} {paper.year}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

