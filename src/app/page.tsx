import Metadata from "next/head"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Layout, { siteTitle } from "../components/ArticleLayout"
import { getSortedArticles } from "../lib/articles"
import ArticleCard from "@/components/ArticleCard"

export default function Home() {
  const articles = getSortedArticles()
  return (
    <Layout home>
      <Metadata>
        <title>{siteTitle}</title>
      </Metadata>
      <section className="text-lg my-2 flex flex-col justify-center items-center">
        <p>Software Engineer, problem solver.</p>
        <div className="flex gap-2 mt-2">
          <Link href="https://www.linkedin.com/in/krzys-dev">
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#0e76a8" title="LinkedIn" />
          </Link>
          <Link href="https://github.com/kowalczyk-krzysztof" title="GitHub">
            <FontAwesomeIcon icon={faGithubSquare} size="xl" />
          </Link>
          <Link href="mailto:kowalczykkrzysztof893@gmail.com" title="GitHub">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="xl" color='#0284C7' />
          </Link>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <ul className="list-none p-0 m-0">
          {articles.map(({ id, date, title }) => (
            <ArticleCard key={id} title={title} date={date} url={`/articles/${id}`} imageId={id} />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
