import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Newspaper } from "lucide-react"
import BookshelfContent from "../components/bookshelf"
import PapershelfContent from "../components/papershelf"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 px-8">
        <div className="max-w-[900px]">
          <h1 className="text-4xl font-serif mb-4">Saidev&apos;s Library</h1>
          <p className="text-muted-foreground mb-8">
            I read books and papers every month around various topics and here are some of them that I recommend. Note: I am not promoting any piracy through this platform.
          </p>
        </div>

        <Tabs defaultValue="bookshelf" className="my-8">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2">
            <TabsTrigger value="bookshelf" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Bookshelf
            </TabsTrigger>
            <TabsTrigger value="papershelf" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Papershelf
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bookshelf">
            <BookshelfContent />
          </TabsContent>
          <TabsContent value="papershelf">
            <PapershelfContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

