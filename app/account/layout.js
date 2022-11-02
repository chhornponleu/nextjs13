import Link from "next/link";

export default function AccountLayout({ children }) {
    return (
        <div>
             <aside>
                <Link href={"/account/hi"}>Hi</Link>
                <br/>
                <Link href="/account/hello">Hello</Link>
            </aside>
            <h1>Account</h1>
            {children}
        </div>
    )
}
