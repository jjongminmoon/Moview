import { NextRequest, NextResponse } from "next/server";
import { getPost } from "@/service/posts";
import { withSessionUser } from "@/util/session";

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPost(context.params.id).then((data) => NextResponse.json(data))
  );
}
