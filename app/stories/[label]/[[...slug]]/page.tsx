import { Item, Story, getStories } from '@/api/hackernews'
import StoryCard from '@/components/StoryCard'
import { PageQuery } from '@/utils'

interface Params {
  label: 'new' | 'top' | 'best' | 'ask' | 'job' | 'show'
  slug?: string[]
}

export default async function Page({ params }: { params: Params }) {
  const query: PageQuery = {}
  if (params.slug) {
    if (params.slug[0]) query.page = parseInt(params.slug[0])
    if (params.slug[1]) query.pageSize = parseInt(params.slug[1])
  }
  const stories = await getStories(params.label, query)
  return (
    <ul>
      {stories.map((story, i) => (
        <StoryCard key={story.id} story={story as Story} />
      ))}
    </ul>
  )
}
