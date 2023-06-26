type Context = {
  params: {
    slug: string[];
  };
};

import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;

  let request = getPostOf;
  if (type === "liked") {
    request = getLikePostOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
