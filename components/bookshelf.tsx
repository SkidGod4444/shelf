import { books } from "@/config/books"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

const booksByCategory = books.reduce(
  (acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = []
    }
    acc[book.category].push(book)
    return acc
  },
  {} as Record<string, typeof books>,
)

export default function BookshelfContent() {
  return (
    <div className="grid gap-12">
      {Object.entries(booksByCategory).map(([category, books]) => (
        <section key={category}>
          <h2 className="text-3xl font-serif my-8">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={book.cover || "/images/book-placeholder.png"}
                      alt={book.cover!}
                      fill
                      className="object-cover w-full h-full p-2" // Added padding
                      // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {book.downloadLink && (
                        <Button variant="secondary" size="sm" asChild className="mr-2">
                          <a href={book.downloadLink} download>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      )}
                      {book.buyLink && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Buy
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  {/* <div className="p-4">
                    <h3 className="font-medium line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

