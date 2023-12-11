import ProfileImage from "@/components/ProfilePicture";
import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Krzysztof Kowalczyk";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <div className="max-w-xl mx-auto mt-12 mb-24 px-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Krzysztof Kowalczyk - software engineer, problem solver"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="flex flex-col items-center my-4">
        {home ? (
          <>
            <ProfileImage />
            <h1 className="text-2xl my-2">{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <ProfileImage />
            </Link>
            <h2 className="text-xl mb-2 mt-4 text-sky-600">
              <Link href="/">{siteTitle}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-4 text-sky-600">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
