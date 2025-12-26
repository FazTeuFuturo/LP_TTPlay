import Link from 'next/link';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/" className="logo">
                    <span>TT</span>
                    <span>Play</span>
                </Link>
                <a href="https://app.ttplay.com.br" className="nav-cta">
                    Começar Agora
                </a>
            </nav>
        </header>
    );
}
