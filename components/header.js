import Link from 'next/link'
function Header() {
    return (
        <>
            <div className={"header"}>
                <nav className="menu" id="menu">
                    <ul className={"flex justify-center p-4"}>
                        {/*<li><a className="Menu-Item p-4" href="about">about*/}
                        {/*</a></li>*/}
                        {/*<li><a className="Menu-Item p-4" href="contact">contact</a></li>*/}
                        {/*<li><a className="Menu-Item p-4" href="home">home</a></li>*/}
                        <li>
                            <Link href="/about" replace>about</Link>
                        </li>
                        <li>
                            <Link href="/contact" replace>contact</Link>
                        </li>
                        <li>
                            <Link href="/home" replace>home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header