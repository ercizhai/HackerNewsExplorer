import { Story, getItem } from '@/api/hackernews'

export default async function ViewPage({ params }: { params: { id: number } }) {
  const item = await getItem(params.id)
  let jsx
  if (item.type === 'story') {
    const story = item as Story
    if (story.url) {
      jsx = <iframe style={{ width: '100%', height: 'calc(100vh - 4rem)' }} src={story.url}></iframe>
    }
  }
  return <>{jsx ? jsx : <pre>{JSON.stringify(item, null, 2)}</pre>}</>
}
