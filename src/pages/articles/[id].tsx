import Head from "next/head"
import Layout from "../../components/ArticleLayout"
import { Date } from "../../components/Date"
import {
  ArticleData,
  getAllArticlesIds,
  getArticleData,
} from "../../lib/articles"
import "../../app/globals.css"

interface Props {
  articleData: ArticleData
}

export default function Article({ articleData }: Props) {
  const { title, date, contentHtml } = articleData
  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className="text-2xl">{title}</h1>
        <div className="text-gray-500 my-2">
          <Date dateString={date} />
        </div>
        <div
          className="[&>p]:my-2"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllArticlesIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const articleData = await getArticleData(id)
  return {
    props: {
      articleData,
    },
  }
}
