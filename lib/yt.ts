export async function getYouTubeVideoTitle(videoId: string): Promise<string> {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet`,
      )
      const data = await response.json()
  
      if (data.items && data.items.length > 0) {
        return data.items[0].snippet.title
      }
      throw new Error("Video not found")
    } catch (error) {
      console.error("Error fetching YouTube title:", error)
      return "Untitled Video"
    }
  }  
  
