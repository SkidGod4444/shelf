import { blogs } from "@/config/blogs"

const blogsByCategory = blogs.reduce(
  (acc, blog) => {
    if (!acc[blog.category]) {
      acc[blog.category] = []
    }
    acc[blog.category].push(blog)
    return acc
  },
  {} as Record<string, typeof blogs>,
)

export default function BlogshelfContent() {
  return (
    <div>
      {Object.entries(blogsByCategory).map(([category, blogs]) => (
        <section key={category} className="pt-12">
          <h2 className="mb-5 font-serif text-xl font-medium sm:text-2xl">{category}</h2>
          <ul className="grid gap-10">
            {blogs.map((blog) => (
              <li key={blog.slug} className="max-w-[68ch]">
                <a href={blog.slug} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="font-serif text-2xl font-medium leading-tight group-hover:underline sm:text-3xl">
                    {blog.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{blog.description}</p>
                  <p className="mt-3 text-sm">
                    {[blog.author && `By ${blog.author}`, blog.date].filter(Boolean).join(", ")}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
