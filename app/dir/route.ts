import fs from 'fs/promises';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    let root = process.cwd();
    let dir = searchParams.get('path');
    if (dir) {
        root = path.join(root, dir);
    }
    const stat = await fs.stat(root);
    if (stat.isDirectory()) {
        return Response.json({
            files: await fs.readdir(root),
        });
    }
    if (stat.isFile()) {
        return new Response(await fs.readFile(root, 'utf8'));
    }
}
