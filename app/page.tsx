"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogshelfContent from "@/components/custom/shelfs/blogshelf";
import BookshelfContent from "@/components/custom/shelfs/bookshelf";
import PapershelfContent from "@/components/custom/shelfs/papershelf";
import VideoshelfContent from "@/components/custom/shelfs/videshelf";
import { blogs } from "@/config/blogs";
import { books } from "@/config/books";
import { papers } from "@/config/papers";
import { videos } from "@/config/videos";

const shelves = [
  { value: "blogshelf", param: "blogs", label: "Blogshelf", count: blogs.length },
  { value: "bookshelf", param: "books", label: "Bookshelf", count: books.length },
  { value: "papershelf", param: "papers", label: "Papershelf", count: papers.length },
  { value: "videoshelf", param: "videos", label: "Videoshelf", count: videos.length },
];

function TabSelector() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const initial = shelves.find((shelf) => shelf.param === tab) ?? shelves[0];

  return (
    <Tabs defaultValue={initial.value}>
      <TabsList className="h-auto w-full justify-start gap-4 rounded-none border-b border-border bg-transparent p-0 sm:gap-9">
        {shelves.map((shelf) => (
          <TabsTrigger
            key={shelf.value}
            value={shelf.value}
            className="-mb-px gap-2 rounded-none border-b-2 border-transparent px-0 pb-3 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none sm:text-lg"
          >
            {shelf.label}
            <span className="hidden text-sm font-normal tabular-nums text-muted-foreground sm:inline">
              {shelf.count}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="blogshelf" className="mt-0">
        <BlogshelfContent />
      </TabsContent>
      <TabsContent value="bookshelf" className="mt-0">
        <BookshelfContent />
      </TabsContent>
      <TabsContent value="papershelf" className="mt-0">
        <PapershelfContent />
      </TabsContent>
      <TabsContent value="videoshelf" className="mt-0">
        <VideoshelfContent />
      </TabsContent>
    </Tabs>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-10 sm:pt-24">
        <header className="mb-12 sm:mb-16">
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            Saidev&apos;s Library
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
            I read books, papers & watch some tutorials every month around various topics and here are some of them that
            I recommend. Note: I am not promoting piracy through this platform.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            last updated: {formatDistanceToNow(new Date("2025-12-03"), { addSuffix: true })}
          </p>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <TabSelector />
        </Suspense>
      </main>
    </div>
  );
}
