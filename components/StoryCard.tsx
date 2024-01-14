import { Card, CardHeader, CardBody, CardFooter, Link, Divider } from '@nextui-org/react'
import { Story } from '@/api/hackernews'

function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="my-4">
      <CardHeader>
        <h2 className="text-xl text-default-700 font-bold">
          {story.type}: {story.title}
        </h2>
      </CardHeader>
      <CardBody>
        {story.text ? <p dangerouslySetInnerHTML={{ __html: story.text }}></p> : null}
        <p className="mt-4 text-right">
          Author: {story.by}&emsp;Score: {story.score}&emsp;
          {story.descendants ? <span>Comment: {story.descendants}&emsp;</span> : null}Time: {formatTime(story.time)}
        </p>
      </CardBody>
      {story.url ? (
        <>
          <Divider />
          <CardFooter className="flex justify-end">
            <Link href={story.url} target="_blank" color="success">
              View Source
            </Link>
          </CardFooter>
        </>
      ) : null}
    </Card>
  )
}
