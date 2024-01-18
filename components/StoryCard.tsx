import { Card, CardHeader, CardBody, CardFooter, Link, Divider } from '@nextui-org/react'
import { Story } from '@/api/hackernews'
import StoryBaseInfo from '@/components/StoryBaseInfo'

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="my-4" isBlurred>
      <CardHeader className="flex-col items-start">
        <StoryBaseInfo story={story} />
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
