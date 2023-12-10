import Layout from '../../components/ArticleLayout'
import { getAllPostIds, getPostData } from '../../lib/articles';
import Head from 'next/head';
import { Date } from '../../components/Date';
import '../../app/globals.css';


// @ts-ignore
export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='text-lg'>{postData.title}</h1>
        <div className='text-gray-500'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


// @ts-ignore
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
