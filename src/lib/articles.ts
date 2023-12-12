import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'articles')

export interface ArticleData {
  id: string
  date: string
  title: string
  contentHtml: string
}

export const getSortedArticles = (): ArticleData[] => {
  const fileNames = fs.readdirSync(articlesDirectory)
  const articles: ArticleData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as ArticleData
  })

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getAllArticlesIds = () => {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getArticleData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
