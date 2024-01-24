import { promises as fs } from 'fs';
import { Content } from './content';

export default async function Home() {
    const URL = process.env.VERCEL_URL || process.env.DEPLOY_URL;
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-8">
            <h1 className="hello">Custom Expo updates</h1>
            <span>{URL}</span>
            <Content host={URL || ''} />
        </main>
    );
}
