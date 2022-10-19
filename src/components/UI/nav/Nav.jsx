import Link from "next/link";

const Nav = () => {
    return <nav className="nav row  p-3 border-bottom">
        <div className="col-2">
            <Link href="/" passHref>
                <strong className="col-8 pointer">Home</strong>
            </Link>
        </div>
        <div className="col-6">
            <Link href="/revalidate" passHref>
                <span className="col-8 pointer">API</span>
            </Link>
        </div>
        <div className="col-2">
            <Link href="/albums" passHref>
                <span className="col-2 pointer">SSR Content</span>
            </Link>
        </div>
        <div className="col-2">
            <Link href="/users" passHref>
                <span className="pointer">ISR Content</span>
            </Link>
        </div>
    </nav>;
}

export default Nav;