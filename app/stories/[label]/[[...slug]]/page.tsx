import { Story, getStories } from '@/api/hackernews'
import StoryCard from '@/components/StoryCard'
import AppPagination from '@/components/AppPagination'
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
  const result = await getStories(params.label, query)
  return (
    <>
      <ul>
        {result.stories.map(story => (
          <StoryCard key={story.id} story={story as Story} />
        ))}
      </ul>
      <AppPagination label={params.label} total={result.totalPage} page={result.page} />
    </>
  )
}
