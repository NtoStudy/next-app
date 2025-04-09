import {Metadata} from "next";

export const metadata: Metadata = {
  title: '博客列表',
}

import BlogList from "@/app/components/BlogList";

export default function Page() {
  return (
    <BlogList />
  );
}
