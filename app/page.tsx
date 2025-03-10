"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Newspaper, Video } from "lucide-react";
import BookshelfContent from "../components/custom/shelfs/bookshelf";
import PapershelfContent from "../components/custom/shelfs/papershelf";
import ShinyText from "@/components/custom/shiny-text";
import { useSearchParams } from "next/navigation";
import VideoshelfContent from "@/components/custom/shelfs/videshelf";

function TabSelector() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <Tabs
      defaultValue={
        tab === "books"
          ? "bookshelf"
          : tab === "papers"
          ? "papershelf"
          : tab === "videos"
          ? "videoshelf"
          : "bookshelf"
      }
      className="my-8"
    >
      <TabsList className="grid w-full max-w-[600px] grid-cols-3">
        <TabsTrigger value="bookshelf" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Bookshelf
        </TabsTrigger>
        <TabsTrigger value="papershelf" className="flex items-center gap-2">
          <Newspaper className="h-4 w-4" />
          Papershelf
        </TabsTrigger>
        <TabsTrigger value="videoshelf" className="flex items-center gap-2">
          <Video className="h-4 w-4" />
          Videoshelf
        </TabsTrigger>
      </TabsList>
      <TabsContent value="bookshelf">
        <BookshelfContent />
      </TabsContent>
      <TabsContent value="papershelf">
        <PapershelfContent />
      </TabsContent>
      <TabsContent value="videoshelf">
        <VideoshelfContent />
      </TabsContent>
    </Tabs>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 px-8">
        <div className="max-w-[900px]">
          <h1 className="text-muted-foreground mb-5">last updated: Mar 10th</h1>
          <ShinyText
            text="Saidev&apos;s Library"
            disabled={false}
            speed={3}
            className="text-5xl font-serif mb-4"
          />
          <p className="text-muted-foreground mb-8">
            I read books, papers & watch some tutorials every month around various topics and here are some of them that
            I recommend. Note: I am not promoting piracy through this platform.
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <TabSelector />
        </Suspense>
      </main>
    </div>
  );
}