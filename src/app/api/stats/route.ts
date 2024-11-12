import { NextResponse } from "next/server";

export async function GET() {
  // In a real application, you would fetch this data from a database
  const stats = {
    visitorsCount: Math.floor(Math.random() * 10000) + 1000,
    pdfCount: Math.floor(Math.random() * 1000) + 500,
    branchCount: 4,
    subjectsCount: Math.floor(Math.random() * 100) + 50,
  };

  return NextResponse.json(stats);
}
