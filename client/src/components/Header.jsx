import { HashLink } from "react-router-hash-link"

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img src="/image/logo.png" alt="A cupcake, logo of website" />
                </div>
                <nav className="header__nav">
                    <ul>
                        <HashLink to='/#' style={{textDecoration: 'none'}}>
                            <li><span>Home</span></li>
                        </HashLink>
                        <HashLink to='/cupcakes#' style={{textDecoration: 'none'}}>
                            <li><span>Cupcakes</span></li>
                        </HashLink>
                        <HashLink to='/corporate#' style={{textDecoration: 'none'}}>
                            <li><span>Corporate</span></li>
                        </HashLink>
                        <HashLink to='/connect#' style={{textDecoration: 'none'}}>
                            <li><span>Connect</span></li>
                        </HashLink>
                        <HashLink to='/faq#' style={{textDecoration: 'none'}}>
                            <li><span>Faq</span></li>
                        </HashLink>
                        <HashLink to='/about#' style={{textDecoration: 'none'}}>
                            <li><span>About</span></li>
                        </HashLink>
                    </ul>
                </nav>
            </header>
            <div style={{paddingTop: '10vh'}}></div>
        </>
    )
}
