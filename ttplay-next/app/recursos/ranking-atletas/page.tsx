import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Ranking de Atletas de Tênis de Mesa - Sistema ELO Automático',
    description:
        'Sistema de ranking ELO automático para tênis de mesa. Acompanhe sua evolução, compare com outros atletas e suba no ranking a cada vitória.',
    keywords: [
        'ranking tênis de mesa',
        'sistema ELO ping pong',
        'pontuação atletas',
        'classificação mesatenistas',
        'rating tênis de mesa',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/recursos/ranking-atletas/',
    },
};

export default function RankingAtletasPage() {
    return (
        <>
            <Header />

            <main className="content-page">
                <section className="content-hero">
                    <div className="container">
                        <h1>Ranking Automático Para Atletas de Tênis de Mesa</h1>
                        <p className="lead">
                            Acompanhe sua evolução com um sistema de pontuação ELO que atualiza
                            automaticamente após cada partida. Compare-se com outros atletas e
                            veja seu progresso ao longo do tempo.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Como Funciona o Sistema de Ranking</h2>
                        <p>
                            A TTPlay utiliza o sistema ELO, o mesmo usado no xadrez e em diversos
                            esportes profissionais. A cada partida oficial registrada no sistema,
                            sua pontuação é recalculada automaticamente considerando:
                        </p>
                        <ul>
                            <li>Resultado da partida (vitória ou derrota)</li>
                            <li>Diferença de pontuação entre os jogadores</li>
                            <li>Importância do torneio</li>
                        </ul>
                        <p>
                            Vencer um oponente mais forte rende mais pontos. Perder para um
                            adversário mais fraco custa mais. Isso garante que o ranking reflita
                            fielmente o nível de cada atleta.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Benefícios do Ranking Automático</h2>
                        <ul>
                            <li>
                                <strong>Para Atletas:</strong> Motivação para competir, visão clara da evolução,
                                perfil com histórico completo de partidas.
                            </li>
                            <li>
                                <strong>Para Organizadores:</strong> Seeding automático em torneios,
                                chaves mais equilibradas, menos reclamações.
                            </li>
                            <li>
                                <strong>Para Clubes:</strong> Rankings internos para incentivar
                                competição saudável entre os membros.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Funcionalidades do Perfil do Atleta</h2>
                        <ul>
                            <li>Pontuação ELO atual e histórico</li>
                            <li>Gráfico de evolução ao longo do tempo</li>
                            <li>Histórico completo de partidas</li>
                            <li>Estatísticas de vitórias e derrotas</li>
                            <li>Conquistas e títulos</li>
                            <li>Head-to-head contra adversários específicos</li>
                        </ul>
                    </div>
                </section>

                <section className="light-cta">
                    <div className="container">
                        <p>
                            Cadastro de atleta é 100% gratuito para sempre.
                            Comece a acompanhar sua evolução hoje.
                        </p>
                        <a href="https://app.ttplay.com.br" className="btn-primary">
                            Criar Meu Perfil Grátis
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFAB />
        </>
    );
}
