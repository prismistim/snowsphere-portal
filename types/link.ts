export type LinkListItem = {
  id: string
  url: string
  category: "dev" | "social" | "media" | "contact" | "own_website",
  tag: ("fediverse" | "video" | "photo" | "voip" | "game" | "misskey" | "mastodon" | "pgp" | "live" | "music")[],
  title: string
  rss: {
    hasRss: boolean
    url?: string
  }
  isPrimary: boolean
}
