"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { videos } from "@/config/videos"
import { getYouTubeVideoTitle } from "@/lib/yt"
import { Skeleton } from "@/components/ui/skeleton"

// Group videos by category
const videosByCategory = videos.reduce(
  (acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = []
    }
    acc[video.category].push(video)
    return acc
  },
  {} as Record<string, typeof videos>,
)

function getVideoId(url: string): string | null {
  // YouTube URL patterns
  const youtubeRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  const youtubeMatch = url.match(youtubeRegex)

  if (youtubeMatch) return youtubeMatch[1]

  // Google Drive URL pattern
  const driveRegex = /drive\.google\.com\/file\/d\/(.*?)(?:\/|$)/
  const driveMatch = url.match(driveRegex)

  if (driveMatch) return driveMatch[1]

  return null
}

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const [title, setTitle] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const videoId = getVideoId(video.url)

  useEffect(() => {
    async function fetchTitle() {
      if (video.type === "yt" && videoId) {
        try {
          const ytTitle = await getYouTubeVideoTitle(videoId)
          setTitle(ytTitle)
        } catch (error) {
          console.error("Error fetching title:", error)
          setTitle("Untitled Video")
        }
      } else if (video.type === "drive") {
        setTitle(video.title || "Untitled Video")
      }
      setIsLoading(false)
    }

    fetchTitle()
  }, [video, videoId])

  const handleClick = () => {
    if (video.type === "yt") {
      window.open(video.url, "_blank")
    } else if (video.type === "drive" && videoId) {
      window.open(`https://drive.google.com/file/d/${videoId}/preview`, "_blank")
    }
  }

  return (
    <Card
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="aspect-video relative">
          {video.type === "yt" ? (
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title || "Video thumbnail"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Image
              src={video.thumbnail || "/images/videos-placeholder.png"}
              alt={title || "Video thumbnail"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button variant="secondary" size="lg" className="gap-2">
              <ExternalLink className="h-5 w-5" />
              Watch
            </Button>
          </div>
        </div>
        <div className="p-2 h-auto">
          {isLoading ? <Skeleton className="h-2 w-full" /> : <h3 className="font-medium line-clamp-4">{title}</h3>}
        </div>
      </CardContent>
    </Card>
  )
}

export default function VideoshelfContent() {
  return (
    <div className="grid gap-12">
      {Object.entries(videosByCategory).map(([category, videos]) => (
        <section key={category}>
          <h2 className="text-3xl font-serif my-8">{category}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

