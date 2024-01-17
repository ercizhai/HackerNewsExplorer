import { Card, CardHeader, CardBody, CardFooter, Link, Divider } from '@nextui-org/react'
import { RiTimeLine, RiUserLine, RiChat2Line, RiFireLine } from 'react-icons/ri'
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
    <Card className="my-4" isBlurred>
      <CardHeader className="flex-col items-start">
        <h2>
          <Link color="success" className="text-xl font-bold" href={`/view/${story.id}`}>
            {story.type}: {story.title}
          </Link>
        </h2>
        <p className="mt-1 flex items-center text-default-500">
          <RiUserLine />
          &nbsp;
          {story.by}&emsp;
          <RiFireLine />
          &nbsp;
          {story.score}&emsp;
          {story.descendants ? (
            <>
              <RiChat2Line />
              &nbsp;
              {story.descendants}&emsp;
            </>
          ) : null}
          <RiTimeLine />
          &nbsp;
          {formatTime(story.time)}
        </p>
      </CardHeader>
      {story.text ? (
        <CardBody>
          <p dangerouslySetInnerHTML={{ __html: story.text }}></p>
        </CardBody>
      ) : null}
      {story.url ? (
        <>
          <Divider />
          <CardFooter className="flex justify-end">
            <Link href={story.url} target="_blank" color="success" size="sm">
              View Source
            </Link>
          </CardFooter>
        </>
      ) : null}
    </Card>
  )
}
