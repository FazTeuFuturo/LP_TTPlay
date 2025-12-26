import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Inscrições Online Para Torneios - Pagamento Automático',
    description:
        'Sistema de inscrições online para torneios de tênis de mesa. Atletas se inscrevem, pagam por PIX ou cartão, e recebem confirmação automática.',
    keywords: [
        'inscrição torneio online',
        'pagamento torneio tênis de mesa',
        'cadastro atletas',
        'confirmação automática',
        'PIX torneio esportivo',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/recursos/inscricoes-online/',
    },
};

export default function InscricoesOnlinePage() {
    return (
        <>
            <Header />

            <main className="content-page">
                <section className="content-hero">
                    <div className="container">
                        <h1>Inscrições e Pagamentos Online Para Torneios</h1>
                        <p className="lead">
                            Chega de conferir PIX pelo WhatsApp. Atletas se inscrevem, pagam online
                            e recebem confirmação automática. Você só acompanha.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>O Problema das Inscrições Manuais</h2>
                        <p>
                            Todo organizador conhece: atleta manda mensagem pedindo para se inscrever,
                            você passa os dados do PIX, ele paga, você confere, confirma manualmente...
                            Multiplique por 50 atletas e você perdeu um dia inteiro.
                        </p>
                        <p>
                            Com a TTPlay, esse processo é 100% automático. O atleta faz tudo sozinho
                            e você recebe apenas uma notificação de &quot;inscrição confirmada&quot;.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Como Funciona</h2>
                        <ul>
                            <li>
                                <strong>Atleta acessa o link do torneio</strong> que você compartilhou
                            </li>
                            <li>
                                <strong>Escolhe a categoria</strong> e vê os detalhes do torneio
                            </li>
                            <li>
                                <strong>Paga por PIX ou Cartão</strong> diretamente na plataforma
                            </li>
                            <li>
                                <strong>Recebe confirmação automática</strong> por email e notificação
                            </li>
                            <li>
                                <strong>Você não faz nada</strong> - o sistema cuida de tudo
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Formas de Pagamento</h2>
                        <ul>
                            <li>PIX (confirmação em segundos)</li>
                            <li>Cartão de crédito (parcelado ou à vista)</li>
                            <li>Boleto bancário (para quem preferir)</li>
                        </ul>
                        <p>
                            O dinheiro das inscrições vai direto para a sua conta, descontada
                            apenas a taxa da plataforma. Sem intermediários, sem burocracia.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Benefícios Para Organizadores</h2>
                        <ul>
                            <li>Zero trabalho manual de conferência</li>
                            <li>Lista de inscritos sempre atualizada</li>
                            <li>Relatório de pagamentos em tempo real</li>
                            <li>Sem risco de erro ou esquecimento</li>
                            <li>Recebimento automático na sua conta</li>
                        </ul>
                    </div>
                </section>

                <section className="light-cta">
                    <div className="container">
                        <p>
                            Automatize as inscrições do seu próximo torneio.
                        </p>
                        <a href="https://app.ttplay.com.br" className="btn-primary">
                            Criar Torneio Grátis
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFAB />
        </>
    );
}
