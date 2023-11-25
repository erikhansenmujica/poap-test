import { getUserCollections } from "@/actions/collections";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { address: string } }
) {
  const collections = await getUserCollections(params.address);
  return NextResponse.json(collections, { status: 200 });
}
