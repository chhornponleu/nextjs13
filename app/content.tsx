'use client';
import { QRCode } from './QRCode';

type Props = { host: string };
export function Content({ host }: Props) {
    const ios = `exp+nham24://expo-development-client/?url=${host}/api/manifest?platform=ios&runtime-version=1`;
    const android = `exp+nham24://expo-development-client/?url=${host}/api/manifest?platform=android&runtime-version=1`;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <span>iOS</span>
                <QRCode value={ios} />
                <span>{ios}</span>
            </div>

            <br />
            <div className="flex flex-col gap-4">
                <span>Android</span>
                <QRCode value={android} />
                <span>{android}</span>
            </div>
        </div>
    );
}
