import { createPost } from "@/service/posts";
import { withSessionUser } from "@/util/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return withSessionUser(async (user) => {
    const form = await req.formData();
    const photo = form.get("photo")?.toString();
    const movieTitle = form.get("movieTitle")?.toString();
    const postTitle = form.get("postTitle")?.toString();
    const content = form.get("content")?.toString();

    if (!photo || !movieTitle || !postTitle || !content) {
      return new Response("Bad Request", { status: 400 });
    }

    console.log(user.id);

    return createPost(user.id, photo, movieTitle, postTitle, content).then((data) =>
      NextResponse.json(data)
    );
  });
}
