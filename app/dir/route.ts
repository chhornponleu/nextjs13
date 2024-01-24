import fs from 'fs/promises';
import getConfig from 'next/config';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(request: NextRequest) {
    const { serverRuntimeConfig } = getConfig()

    console.log(serverRuntimeConfig.PROJECT_ROOT);

    const searchParams = request?.nextUrl?.searchParams;
    let root = serverRuntimeConfig.PROJECT_ROOT || process?.cwd();
    let dir = searchParams?.get('path');
    if (dir) {
        root = path.join(root, dir);
    }
    const stat = await fs.stat(root);
    if (stat.isDirectory()) {
        return Response.json({
            cwd: process?.cwd(),
            root: serverRuntimeConfig.PROJECT_ROOT,
            files: await fs.readdir(root),
        });
    }
    if (stat.isFile()) {
        return new Response(await fs.readFile(root, 'utf8'));
    }
}