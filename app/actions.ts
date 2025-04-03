import { prisma } from "./utils/db";

//server-action fx
export async function handleSubmission() {
  "use server";
  const data = await prisma.blogPost.create({});
}
