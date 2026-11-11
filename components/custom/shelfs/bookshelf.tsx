import Image from "next/image"
import { books } from "@/config/books"

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
    <div className="shelf pt-12">
      {Object.entries(booksByCategory).map(([category, books]) => (
        <section key={category} className="shelf-group">
          <h2 className="mb-4 font-serif text-lg font-medium sm:text-xl">{category}</h2>
          <ul className="shelf-books">
            {books.map((book) => {
              const href = book.downloadLink ?? book.buyLink
              const action = book.downloadLink ? "Read on Google Drive" : "Buy a copy"
              const cover = (
                <span className="book relative h-44 w-[8.25rem] sm:h-52 sm:w-[9.75rem]">
                  <Image
                    src={book.cover || "/images/book-placeholder.png"}
                    alt={`Cover of a book in ${category}`}
                    fill
                    sizes="(min-width: 640px) 156px, 132px"
                    className="object-contain object-left-bottom"
                  />
                </span>
              )

              return (
                <li key={book.id}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shelf-item group"
                    >
                      {cover}
                      <span className="shelf-caption text-sm text-muted-foreground group-hover:text-foreground group-hover:underline">
                        {action}
                      </span>
                    </a>
                  ) : (
                    <div className="shelf-item">{cover}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
