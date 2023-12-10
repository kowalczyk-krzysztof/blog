import Metadata from 'next/head';
import Layout, { siteTitle } from '../components/ArticleLayout';
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
      <section className='text-xl my-2'>
        <p>Software Engineer, problem solver.</p>
      </section>
      <section className='my-4'>
        <h2 className='text-xl my-2'>Articles</h2>
        <ul className='list-none p-0 m-0'>
          {/* @ts-ignore */}
          {allPostsData.map(({ id, date, title }) => (
            <li className='my-4' key={id}>
              <Link href={`/articles/${id}`}>{title}</Link>
              <br />
              <small className='text-gray-500'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}