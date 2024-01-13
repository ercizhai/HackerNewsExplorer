import { getSubListByPage, PageQuery } from '@/utils'

export type StoryListLabel = 'new' | 'top' | 'best' | 'ask' | 'job' | 'show'

export interface Item {
  id: number
  deleted?: boolean
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt'
  by: string
  text: string
  time: number
  dead?: boolean
  kids: number[]
}

export interface Job extends Item {
  title: string
  score: number
  url: string
}

export interface Story extends Item {
  url: string
  score: number
  title: string
  descendants: number
}

export interface Comment extends Item {
  parent: number
}

export interface Poll extends Item {
  title: string
  parts: number[]
  score: number
  descendants: number
}

export interface PollOpt extends Item {
  poll: number
  score: number
}

export interface User {
  id: string
  created: number
  karma: number
  about: string
  submitted: number[]
  delay: number
}

const baseUrl = 'https://hacker-news.firebaseio.com/v0'

const request = async (url: string) => {
  const response = await fetch(url, { next: { revalidate: 600 } })
  return response.json()
}

export const getItem = async <T extends Item>(id: number): Promise<T> => {
  return request(`${baseUrl}/item/${id}.json`)
}

export const getUser = async (id: string): Promise<User> => {
  return request(`${baseUrl}/user/${id}.json`)
}

export const getStories = async (label: StoryListLabel, query: PageQuery): Promise<Item[]> => {
  const all = await request(`${baseUrl}/${label}stories.json`)
  const ids = getSubListByPage<number>(all, query)

  const stories: Item[] = []
  for await (const id of ids) {
    const result = await getItem(id)
    stories.push(result)
  }

  return stories
}
