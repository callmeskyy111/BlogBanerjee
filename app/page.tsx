import BlogpostCard from "@/components/general/BlogpostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl tracking-tight mb-8">Latest Posts</h1>
      <Suspense fallback={<h1 className="text-2xl">Loading... ⌛</h1>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
//using SUSPENSE for more granular approach compared to the 'loading.tsx' file.
//SUSPENSE-boundaries don't work with ASYNC functions.
async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        // <h1 key={item.title}>{item.title}</h1>
        <BlogpostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
