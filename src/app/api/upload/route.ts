import { NextResponse } from "next/server";
import { uploadToIpfs } from "@/ai/flows/upload-to-ipfs";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const result = await uploadToIpfs(body);

        return NextResponse.json(result);
    } catch (err: any) {
        console.error("Upload error:", err);

        return NextResponse.json(
            { error: err.message || "Upload failed" },
            { status: 500 }
        );
    }
}