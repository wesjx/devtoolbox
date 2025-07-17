"use server"

import { db } from "@/db/index"
import { postsTable } from "@/db/schema"

export async function getPosts() {
    const posts = await db.select({
        id: postsTable.id,
        title: postsTable.title,
        subtitle_pt: postsTable.subtitle_pt,
        subtitle_en: postsTable.subtitle_en,
        description_pt: postsTable.description_pt,
        description_en: postsTable.description_en,
        category: postsTable.category,
        link: postsTable.link,
        img_link: postsTable.img_link,

    }).from(postsTable)
    return posts
}