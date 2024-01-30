import { type NextRequest } from "next/server";

export const maxDuration = 300;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = searchParams.get("delay")
    ? Number(searchParams.get("delay"))
    : 5000;
  const start = Date.now();
  await new Promise((resolve) => setTimeout(resolve, delay));
  const end = Date.now();
  const duration = (end - start) / 1000;
  return Response.json({ duration: `${duration} seconds` });
}
