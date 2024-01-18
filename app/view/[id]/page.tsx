import { Story, getItem } from '@/api/hackernews'
import StoryBaseInfo from '@/components/StoryBaseInfo'

export default async function ViewPage({ params }: { params: { id: number } }) {
  let item = await getItem(params.id)
  let main, aside
  if (item.type === 'story') {
    const story = item as Story
    if (story.url) {
      main = <iframe className="w-full h-full" src={story.url}></iframe>
      aside = (
        <>
          <StoryBaseInfo story={story} />
        </>
      )
    }
  }
  return (
    <div className="flex bg-default-50" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="flex-[3]">{main ? main : <pre>{JSON.stringify(item, null, 2)}</pre>}</div>
      <div className="flex-[1] p-2">
        <h2>{aside}</h2>
      </div>
    </div>
  )
}
