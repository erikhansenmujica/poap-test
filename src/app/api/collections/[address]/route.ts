import { getUserCollections } from "@/actions/collections";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { address: string } }
) {
  const collections = await getUserCollections(params.address);
  return NextResponse.json(collections, { status: 200 });
}
