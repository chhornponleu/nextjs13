'use client';

import ReactQRCode from 'react-qr-code';

type Props = {
    value: string;
    size?: number;
};
export function QRCode({ value, size = 140 }: Props) {
    return (
        <ReactQRCode
            size={size}
            style={{ height: size, width: size }}
            viewBox={`0 0 256 256`}
            value={value}
        />
    );
}
