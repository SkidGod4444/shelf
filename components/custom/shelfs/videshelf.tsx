"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { videos } from "@/config/videos"
import { getYouTubeVideoTitle } from "@/lib/yt"
import { Skeleton } from "@/components/ui/skeleton"

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

  // Without a YouTube API key the title lookup falls back to a placeholder.
  // Use the title from the config instead, or lead with the category.
  const shownTitle = title && title !== "Untitled Video" ? title : video.title
  const hasTitle = Boolean(shownTitle)

  const href =
    video.type === "drive" && videoId
      ? `https://drive.google.com/file/d/${videoId}/preview`
      : video.url
  const thumbnail =
    video.type === "yt"
      ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
      : video.thumbnail || "/images/videos-placeholder.webp"

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <span className="relative block aspect-video overflow-hidden rounded-sm bg-muted shadow-[3px_4px_0_var(--wall-shade)]">
        <Image
          src={thumbnail}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </span>
      <span className="mt-4 block">
        {isLoading ? (
          <Skeleton className="h-5 w-3/4" />
        ) : hasTitle ? (
          <>
            <span className="block text-lg font-medium leading-snug group-hover:underline">
              {shownTitle}
            </span>
            <span className="mt-1 block text-muted-foreground">{video.category}</span>
          </>
        ) : (
          <span className="block text-lg font-medium leading-snug group-hover:underline">
            {video.category}
          </span>
        )}
        <span className="mt-2 block text-sm text-primary">
          {video.type === "yt" ? "Watch on YouTube" : "Watch on Google Drive"}
        </span>
      </span>
    </a>
  )
}

export default function VideoshelfContent() {
  return (
    <ul className="grid gap-x-8 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <li key={video.id}>
          <VideoCard video={video} />
        </li>
      ))}
    </ul>
  )
}
