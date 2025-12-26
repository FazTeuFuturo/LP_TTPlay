import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Sobre a TTPlay - A História Por Trás da Plataforma',
    description:
        'Conheça a história da TTPlay, a plataforma criada por um mesatenista para resolver os problemas reais de organizadores e atletas de tênis de mesa.',
    keywords: [
        'TTPlay',
        'sobre nós',
        'tênis de mesa Brasil',
        'Leandro Guerra',
        'história TTPlay',
    ],
    alternates: {
        canonical: 'https://ttplay.com.br/sobre/',
    },
};

export default function SobrePage() {
    return (
        <>
            <Header />

            <main className="content-page">
                <section className="content-hero">
                    <div className="container">
                        <h1>Sobre a TTPlay</h1>
                        <p className="lead">
                            Uma plataforma criada por quem vive o tênis de mesa,
                            para resolver problemas reais que organizadores e clubes
                            enfrentam todos os dias.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Nossa História</h2>
                        <p>
                            A TTPlay nasceu da frustração. Sou <strong>Leandro Guerra</strong>,
                            formado em Análise de Sistemas desde 2008. Por anos, trabalhei nos
                            bastidores das maiores produções digitais do Brasil, levando automação
                            e infraestrutura tecnológica para empresas como Corinthians e iFood.
                        </p>
                        <p>
                            Mas minha relação com o tênis de mesa veio muito antes. Joguei na
                            adolescência e, anos depois, ao ver meu filho competindo no{' '}
                            <strong>Madureira Esporte Clube no Rio de Janeiro</strong>, me deparei
                            com a mesma bagunça de sempre: planilhas confusas, PIX confirmados
                            manualmente, chaves com erros, mensalidades descontroladas.
                        </p>
                        <p>
                            Foi aí que pensei: <strong>&quot;Por que ninguém resolve isso?&quot;</strong>
                        </p>
                        <p>
                            Juntei minha experiência de décadas em tecnologia com minha paixão
                            pelo esporte e criei o TTPlay — não apenas como uma ferramenta, mas
                            como a solução que eu gostaria de ter encontrado.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Nossa Missão</h2>
                        <p>
                            <strong>Tornar a tecnologia acessível</strong> e descomplicar a gestão
                            de torneios e clubes para organizadores e atletas em todo o Brasil.
                        </p>
                        <p>
                            Acreditamos que quem ama o esporte não deveria perder tempo com
                            burocracia. Por isso, automatizamos tudo que pode ser automatizado
                            — inscrições, pagamentos, chaves, notificações, cobranças — para
                            que você foque no que realmente importa: o tênis de mesa.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Por Que Somos Diferentes</h2>
                        <ul>
                            <li>
                                <strong>Especialização:</strong> Não somos um sistema genérico.
                                Cada funcionalidade foi pensada para o tênis de mesa.
                            </li>
                            <li>
                                <strong>Modelo parceiro:</strong> Nosso sucesso está atrelado ao seu.
                                Quanto mais você cresce, mais crescemos juntos.
                            </li>
                            <li>
                                <strong>Suporte humanizado:</strong> Somos mesatenistas.
                                Entendemos suas dores porque vivemos elas.
                            </li>
                            <li>
                                <strong>Inovação contínua:</strong> Ouvimos a comunidade e
                                evoluímos a plataforma constantemente.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container">
                        <h2>Contato</h2>
                        <p>
                            Tem dúvidas, sugestões ou quer saber mais sobre a TTPlay?
                            Entre em contato:
                        </p>
                        <ul>
                            <li>
                                <strong>WhatsApp:</strong>{' '}
                                <a
                                    href="https://wa.me/552123420309"
                                    style={{ color: 'var(--primary-light)' }}
                                >
                                    (21) 2342-0309
                                </a>
                            </li>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:contato@ttplay.com.br"
                                    style={{ color: 'var(--primary-light)' }}
                                >
                                    contato@ttplay.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="light-cta">
                    <div className="container">
                        <p>
                            Junte-se a centenas de organizadores e milhares de atletas
                            que já usam a TTPlay.
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
