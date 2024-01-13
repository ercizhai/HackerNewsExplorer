export interface PageQuery {
  page?: number
  pageSize?: number
}

export const getSubListByPage = <T>(list: Array<T>, query?: PageQuery) => {
  let page = 1,
    pageSize = 10
  if (query) {
    page = query.page ?? page
    pageSize = query.pageSize ?? pageSize
  }

  const start = pageSize * (page - 1)
  if (start >= list.length) return []

  const array = []
  const loopCount = Math.min(pageSize, list.length - start)
  for (let i = 0; i < loopCount; i++) {
    array.push(list[i + start])
  }

  return array
}
