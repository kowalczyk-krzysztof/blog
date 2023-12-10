import Metadata from 'next/head';
import Layout, { siteTitle } from '../components/ArticleLayout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/articles';
import Link from 'next/link';
import { Date } from '../components/Date';


// @ts-ignore
export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <Layout home>
      <Metadata>
        <title>{siteTitle}</title>
      </Metadata>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer, problem solver.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* @ts-ignore */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/articles/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
