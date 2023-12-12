import Image from "next/image"
import Link from "next/link"
import { Date } from "@/components/Date"


interface Props {
  title: string,
  date: string,
  url: string,
  imageId: string
}

export default function ArticleCard({ title, date, url, imageId }: Props) {
  return (
    <div className="mt-2 mb-6">
      <Link href={url}>
        <div className="max-w-sm bg-white shadow-md rounded-b-md">
          <div className="flex justify-center">
            <Image
              priority
              src={`/images/${imageId}.jpg`}
              alt={imageId}
              width={384}
              height={250}
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl text-sky-600"> {title}</h2>
            <div className="text-gray-500 my-2 text-sm">
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}


