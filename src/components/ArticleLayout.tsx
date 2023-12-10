import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Krzysztof Kowalczyk';
export const siteTitle = 'Krzysztof Kowalczyk';

// @ts-ignore
export default function Layout({ children, home }) {
  return (
    <div className='max-w-xl px-4 mx-auto mt-12 mb-24'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Krzysztof Kowalczyk - software engineer, problem solver"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className='flex flex-col items-center my-4'>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className='rounded-full'
              height={144}
              width={144}
              alt={name}
            />
            <h1 className='text-xl'>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className='rounded-full'
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className='text-lg'>
              <Link href="/" className='text-inherit'>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-4'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
