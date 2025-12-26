import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Gestão de Clubes de Tênis de Mesa - Controle Financeiro e Mensalidades',
    description:
        'Sistema completo para gestão de clubes de tênis de mesa. Controle mensalidades, automatize cobranças, reduza inadimplência e gerencie seus atletas em uma plataforma integrada.',
    keywords: [
        'gestão de clubes tênis de mesa',
        'controle de mensalidades',
        'software para clubes esportivos',
        'cobrança automática atletas',
        'sistema financeiro clubes',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/gestao/clubes-tenis-de-mesa/',
    },
};

export default function GestaoClubesPage() {
    return (
        <>
            <Header />

            <main className="content-page">
                {/* Hero */}
                <section className="content-hero">
                    <div className="container">
                        <h1>Gestão Completa Para Clubes de Tênis de Mesa</h1>
                        <p className="lead">
                            Controle mensalidades, automatize cobranças e tenha visibilidade total do seu clube.
                            Tudo integrado com torneios e rankings em uma única plataforma.
                        </p>
                    </div>
                </section>

                {/* O Problema dos Clubes */}
                <section className="content-section">
                    <div className="container">
                        <h2>Os Desafios de Gerir um Clube</h2>
                        <p>
                            Você conhece a rotina: planilha de mensalidades desatualizada, inadimplência descoberta
                            tarde demais, horas gastas cobrando quem não pagou. Enquanto isso, sistemas genéricos
                            cobram fortunas e não entendem as particularidades do tênis de mesa.
                        </p>
                        <p>
                            Na TTPlay, resolvemos isso com um modelo que faz sentido: <strong>você só paga pelo
                                que realmente usa</strong>. Quando seu clube tem menos movimento (férias, por exemplo),
                            seu custo também diminui.
                        </p>
                    </div>
                </section>

                {/* Funcionalidades */}
                <section className="content-section">
                    <div className="container">
                        <h2>O Que a TTPlay Oferece Para Seu Clube</h2>
                        <ul>
                            <li>
                                <strong>Cadastro de Mensalistas:</strong> Perfil completo de cada atleta com status
                                de pagamento, histórico e dados de contato.
                            </li>
                            <li>
                                <strong>Cobrança Automática:</strong> Boleto, PIX e cartão de crédito. O sistema
                                gera e envia cobranças automaticamente todo mês.
                            </li>
                            <li>
                                <strong>Alertas de Vencimento:</strong> Atletas recebem lembretes antes de atrasar.
                                Você recebe relatórios de quem precisa de atenção.
                            </li>
                            <li>
                                <strong>Dashboard Financeiro:</strong> Receita mensal, inadimplência, previsão de
                                faturamento. Decisões baseadas em dados, não em achismo.
                            </li>
                            <li>
                                <strong>Ranking Interno:</strong> Seus atletas têm pontuação ELO dentro do clube,
                                incentivando competição saudável.
                            </li>
                            <li>
                                <strong>Integração com Torneios:</strong> Organize torneios internos ou abertos
                                usando a mesma base de atletas. Sem recadastro.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Comparativo de Preços */}
                <section className="content-section">
                    <div className="container">
                        <h2>Por Que o Modelo TTPlay é Mais Justo?</h2>
                        <p>
                            Sistemas tradicionais cobram um valor fixo alto (R$ 400-600/mês) independente de
                            quantos atletas você tem ou se é período de férias. A TTPlay funciona diferente:
                        </p>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '2rem',
                                marginTop: '2rem',
                            }}
                        >
                            <div
                                style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    textAlign: 'center',
                                }}
                            >
                                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Sistema Tradicional</h3>
                                <p style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>R$ 520/mês</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    Cobra igual mesmo com o clube vazio
                                </p>
                            </div>
                            <div
                                style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    textAlign: 'center',
                                }}
                            >
                                <h3 style={{ color: 'white', marginBottom: '1rem' }}>TTPlay</h3>
                                <p style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>
                                    R$ 197/mês + 3%
                                </p>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    Seu custo reduz quando o movimento cai
                                </p>
                            </div>
                        </div>
                        <p style={{ marginTop: '2rem' }}>
                            <strong>Dica:</strong> Os 3% sobre mensalidades podem ser repassados ao atleta como
                            &quot;taxa de conveniência&quot; pelo pagamento online. Assim, seu custo real é apenas
                            R$ 197/mês.
                        </p>
                    </div>
                </section>

                {/* O que está incluso */}
                <section className="content-section">
                    <div className="container">
                        <h2>O Plano de Gestão de Clubes Inclui</h2>
                        <ul>
                            <li>
                                <strong>Todos os recursos do Torneios Pro</strong> - organize torneios com fase de
                                grupos, dupla eliminação e seeding automático
                            </li>
                            <li>Gestão completa de mensalistas</li>
                            <li>Cobrança automática multicanal (PIX, Boleto, Cartão)</li>
                            <li>Alertas e relatórios de inadimplência</li>
                            <li>Dashboard financeiro em tempo real</li>
                            <li>Rankings internos do clube</li>
                            <li>Suporte prioritário por WhatsApp</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="light-cta">
                    <div className="container">
                        <p>
                            Simplifique a gestão do seu clube. Comece gratuitamente e migre quando estiver pronto.
                        </p>
                        <a href="https://app.ttplay.com.br" className="btn-primary">
                            Quero Para Meu Clube
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFAB />
        </>
    );
}
