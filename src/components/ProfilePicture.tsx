import { siteTitle } from "@/components/ArticleLayout";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      priority
      src="/images/profile.png"
      className="rounded-full border-4 border-sky-600"
      alt={siteTitle}
      width={152}
      height={152}
    />
  );
}
