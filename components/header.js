import Link from 'next/link'
function Header() {
    return (
        <>
            <div className={"header"}>
                <nav className="menu" id="menu">
                    <ul className={"flex-grow p-4"}>
                        <li>
                            <Link className="text-white" href="/about">about</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/contact">contact</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/home">home</Link>
                        </li>
                        <li>
                            <Link className="text-white" href="/products">products</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header