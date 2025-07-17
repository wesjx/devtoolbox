import "server-only"
import { db } from "@/db/index"
import { postsTable } from "@/db/schema"
import { and, eq } from "drizzle-orm"

export async function getPost(postId: number) {

    const [post] = await db.select().from(postsTable).where(and(
        eq(postsTable.id, postId)
    ));
    
    return post
}