import { Card } from '@/components/ui/card'
import { blogs } from '@/config/blogs'
import Link from 'next/link'
import React from 'react'

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
    <div className="grid gap-12">
      {Object.entries(blogsByCategory).map(([category, blogs]) => (
        <section key={category}>
          <h2 className="text-3xl font-serif my-8">{category}</h2>
          <div className="flex flex-col items-start justify-center gap-6">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={blog.slug} target="_blank" rel="noopener noreferrer" className='border-border border-dashed border-b-2'>
                <Card className='flex flex-col h-full w-auto p-2 gap-2 cursor-pointer border-none'>
                <h1 className='text-2xl font-semibold hover:underline'>{blog.title}</h1>
                <span className='text-muted-foreground'>{blog.description}</span>
                <span>By <span className='text-muted-foreground'>{blog.author} • {blog.date}</span></span>
              </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
