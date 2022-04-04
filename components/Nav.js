import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <Link href={"#header"}>
                <a className="nav-link">HOME</a>
            </Link>
            <Link href={"#about"}>
                <a className="nav-link">ABOUT</a>
            </Link>
            <Link href={"#work"}>
                <a className="nav-link">WORK</a>
            </Link>
            <Link href={"#contact"}>
                <a className="nav-link">CONTACT</a>
            </Link>
        </nav>
    )
}