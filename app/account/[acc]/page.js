"use client";

import { usePathname, useSearchParams, useSelectedLayoutSegments } from "next/navigation";

export default function AccountPage({ params: { acc } }) {
    return (
        <div>
            <h2>{acc}</h2>
        </div>
    )
}