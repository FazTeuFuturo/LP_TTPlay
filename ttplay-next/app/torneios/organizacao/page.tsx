import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Organização de Torneios de Tênis de Mesa - Sistema Profissional',
    description:
        'Organize torneios de tênis de mesa profissionais em minutos. Inscrições online, chaves automáticas, pagamentos integrados e notificações para atletas.',
    keywords: [
        'organizar torneio tênis de mesa',
        'sistema de chaveamento',
        'software torneios ping pong',
        'inscrições torneio online',
        'chaves eliminação',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/torneios/organizacao/',
    },
};

export default function OrganizacaoTorneiosPage() {
    return (
        <>
            <Header />

            <main className="content-page">
                <section className="content-hero">
                    <div className="container">
                        <h1>Organize Torneios de Tênis de Mesa Como um Profissional</h1>
                        <p className="lead">
                            Crie torneios em minutos, não em horas. Inscrições online, chaves automáticas,
                            pagamentos integrados e atletas notificados automaticamente.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Chega de Planilhas e Trabalho Manual</h2>
                        <p>
                            Você já conhece a rotina: criar chaves no Excel, conferir PIX pelo WhatsApp,
                            avisar cada atleta individualmente sobre horários. A TTPlay automatiza tudo isso
                            para você focar no que realmente importa: proporcionar uma experiência incrível
                            aos participantes.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Como Funciona</h2>
                        <ul>
                            <li>
                                <strong>Crie seu torneio:</strong> Nome, data, categorias, valor da inscrição.
                                Em 5 minutos está pronto.
                            </li>
                            <li>
                                <strong>Compartilhe o link:</strong> Atletas se inscrevem e pagam online.
                                Sistema confirma automaticamente.
                            </li>
                            <li>
                                <strong>Gere as chaves:</strong> Um clique e o sistema monta as chaves
                                respeitando seeding e rankings.
                            </li>
                            <li>
                                <strong>Acompanhe em tempo real:</strong> Registre resultados e o sistema
                                atualiza tudo: chaves, rankings, notificações.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Formatos de Torneio Disponíveis</h2>
                        <ul>
                            <li>Eliminação Simples (mata-mata)</li>
                            <li>Eliminação Dupla (repescagem)</li>
                            <li>Fase de Grupos + Eliminatória</li>
                            <li>Round-Robin (todos contra todos)</li>
                            <li>Múltiplas categorias simultâneas</li>
                            <li>Seeding automático baseado em ranking</li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Planos Para Organizadores</h2>
                        <p>
                            <strong>Torneios Free:</strong> Comece com 1 torneio trial completo grátis.
                            Depois, organize torneios ilimitados em eliminação simples com taxa de 11,5%.
                        </p>
                        <p>
                            <strong>Torneios Pro (R$ 29,90/mês):</strong> Todos os formatos desbloqueados,
                            taxa reduzida de 7,5%, branding personalizado. Com 19 atletas, a economia
                            já paga o plano.
                        </p>
                    </div>
                </section>

                <section className="light-cta">
                    <div className="container">
                        <p>
                            Pronto para organizar seu primeiro torneio profissional?
                        </p>
                        <a href="https://app.ttplay.com.br" className="btn-primary">
                            Criar Meu Torneio Grátis
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFAB />
        </>
    );
}
