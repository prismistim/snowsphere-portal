export type LinkItem = {
  id: string
  url: string
  category: ("social" | "fediverse" | "dev" | "video" | "photo" | "voip" | "game" | "website" | "email" | "misskey" | "mastodon" | "pgp" | "live" | "music")[],
  title: string
  rss: {
    hasRss: boolean
    url?: string
  }
  isPrimary: boolean
}
