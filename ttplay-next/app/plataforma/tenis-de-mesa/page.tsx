import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Plataforma de Tênis de Mesa - Sistema Completo de Gestão',
    description:
        'A TTPlay é a plataforma SaaS especializada em tênis de mesa. Gerencie torneios, rankings, clubes e mensalidades em um único sistema profissional.',
    keywords: [
        'plataforma tênis de mesa',
        'sistema tênis de mesa',
        'software ping pong',
        'gestão esportiva',
        'SaaS esportivo',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/plataforma/tenis-de-mesa/',
    },
};

export default function PlataformaTenisDeMesaPage() {
    return (
        <>
            <Header />

            <main className="content-page">
                {/* Hero */}
                <section className="content-hero">
                    <div className="container">
                        <h1>A Plataforma Definitiva para Tênis de Mesa no Brasil</h1>
                        <p className="lead">
                            A TTPlay é uma plataforma de gestão de torneios e clubes de tênis de mesa.
                            Criada por quem vive o esporte, é o único sistema que integra torneios,
                            rankings, gestão de clubes e cobrança de mensalidades em uma única plataforma.
                        </p>
                    </div>
                </section>

                {/* Por que escolher a TTPlay */}
                <section className="content-section">
                    <div className="container">
                        <h2>Por Que a TTPlay é Diferente?</h2>
                        <p>
                            Enquanto sistemas genéricos tentam atender todos os esportes, a TTPlay foi construída
                            exclusivamente para o tênis de mesa. Cada funcionalidade foi pensada para resolver
                            problemas reais que organizadores e clubes enfrentam diariamente.
                        </p>
                        <ul>
                            <li>
                                <strong>Especialização total:</strong> Não tentamos ser tudo para todos. Somos a
                                melhor solução para tênis de mesa.
                            </li>
                            <li>
                                <strong>Integração completa:</strong> Torneios, rankings e financeiro conversam
                                entre si automaticamente.
                            </li>
                            <li>
                                <strong>Modelo parceiro:</strong> Nosso sucesso está atrelado ao seu. Quanto mais
                                você cresce, mais ganhamos juntos.
                            </li>
                            <li>
                                <strong>Suporte humanizado:</strong> Somos mesatenistas. Entendemos suas dores
                                porque vivemos elas.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Funcionalidades Principais */}
                <section className="content-section">
                    <div className="container">
                        <h2>Funcionalidades da Plataforma</h2>

                        <h3 style={{ color: 'var(--primary-light)', marginTop: '2rem', marginBottom: '1rem' }}>
                            Para Organizadores de Torneios
                        </h3>
                        <ul>
                            <li>Criação de torneios em menos de 5 minutos</li>
                            <li>Inscrições e pagamentos online automáticos</li>
                            <li>
                                Geração de chaves profissionais (eliminação simples, dupla, fase de grupos)
                            </li>
                            <li>Seeding automático baseado em ranking</li>
                            <li>Notificações para atletas sobre jogos e resultados</li>
                            <li>Placar ao vivo e atualização em tempo real</li>
                        </ul>

                        <h3 style={{ color: 'var(--accent)', marginTop: '2rem', marginBottom: '1rem' }}>
                            Para Gestores de Clubes
                        </h3>
                        <ul>
                            <li>Cadastro completo de mensalistas</li>
                            <li>Cobrança automática por PIX, boleto ou cartão</li>
                            <li>Alertas de vencimento e inadimplência</li>
                            <li>Relatórios financeiros em tempo real</li>
                            <li>Rankings internos do clube</li>
                            <li>Integração com torneios organizados pelo clube</li>
                        </ul>

                        <h3 style={{ color: 'var(--secondary)', marginTop: '2rem', marginBottom: '1rem' }}>
                            Para Atletas
                        </h3>
                        <ul>
                            <li>Cadastro 100% gratuito para sempre</li>
                            <li>Perfil com histórico de partidas e conquistas</li>
                            <li>Ranking atualizado automaticamente (sistema ELO)</li>
                            <li>Inscrição em torneios com pagamento online</li>
                            <li>Notificações de jogos, horários e resultados</li>
                        </ul>
                    </div>
                </section>

                {/* CTA Leve */}
                <section className="light-cta">
                    <div className="container">
                        <p>
                            Mais de 500 torneios organizados e milhares de atletas cadastrados.
                            Junte-se à comunidade TTPlay.
                        </p>
                        <a href="https://app.ttplay.com.br" className="btn-primary">
                            Criar Conta Grátis
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFAB />
        </>
    );
}
