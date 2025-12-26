import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    <span className="brand-text">
                        <span>TT</span>
                        <span>Play</span>
                    </span>{' '}
                    - A Plataforma Completa para Gestão de Tênis de Mesa
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    <Link href="/plataforma/tenis-de-mesa" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                        Saiba mais sobre a plataforma
                    </Link>
                </p>
                <p>&copy; {new Date().getFullYear()} TTPlay. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
