import { getPost } from "@/data/getPost";
import PostView from "./post-view";

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const paramsValue = await params
  const postId = Number(paramsValue.id)

  const post = await getPost(postId)

  return <PostView {...post} />
}
