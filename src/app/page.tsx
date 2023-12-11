import Metadata from "next/head";
import Layout, { siteTitle } from "../components/ArticleLayout";
import { getSortedArticles } from "../lib/articles";
import Link from "next/link";
import { Date } from "../components/Date";

export default function Home() {
  const articles = getSortedArticles();
  return (
    <Layout home>
      <Metadata>
        <title>{siteTitle}</title>
      </Metadata>
      <section className="text-lg my-2 flex justify-center">
        <p>Software Engineer, problem solver.</p>
      </section>
      <section className="my-4">
        <h2 className="text-xl mt-4">Articles</h2>
        <ul className="list-none p-0 m-0">
          {articles.map(({ id, date, title }) => (
            <li className="my-4" key={id}>
              <Link className="text-sky-600" href={`/articles/${id}`}>
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
