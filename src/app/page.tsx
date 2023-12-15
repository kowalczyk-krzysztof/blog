import { Metadata } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Layout, { siteTitle } from "../components/ArticleLayout"
import { getSortedArticles } from "../lib/articles"
import ArticleCard from "@/components/ArticleCard"

export const metadata: Metadata = {
  title: siteTitle,
  description: "Krzysztof Kowalczyk - software engineer, problem solver",
  keywords: ["software", "engineer", "problem", "solver", "krzysztof", "kowalczyk", "blog"],
}

export default function Home() {
  const articles = getSortedArticles()
  return (
    <Layout home>
      <link rel="icon" href="/favicon.ico" />
      <section className="text-lg my-2 flex flex-col justify-center items-center">
        <p>Software Engineer, problem solver.</p>
        <div className="flex gap-2 mt-2">
          <a href="https://www.linkedin.com/in/krzys-dev" title="LinkedIn" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#0e76a8" />
          </a>
          <a href="https://github.com/kowalczyk-krzysztof" title="GitHub" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithubSquare} size="xl" />
          </a>
          <a href="mailto:kowalczykkrzysztof893@gmail.com" title="GitHub" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faEnvelopeSquare} size="xl" color='#0284C7' />
          </a>
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
