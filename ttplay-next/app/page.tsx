'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach((question) => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        if (faqItem) {
          faqItem.classList.toggle('active');
        }
      });
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Plataforma Premium para Tênis de Mesa</span>
          <h1>Gerencie Torneios e Clubes de Tênis de Mesa em Uma Única Plataforma</h1>
          <p className="hero-subtitle">
            Automatize inscrições, cobranças e chaves. Controle mensalidades do seu clube.
            Ofereça uma experiência premium aos seus atletas — sem planilhas, sem dor de cabeça.
          </p>
          <div className="cta-group">
            <a href="https://app.ttplay.com.br" className="btn-primary">
              Começar Gratuitamente
            </a>
            <a href="#solucao" className="btn-secondary">
              Ver Como Funciona
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">O Problema</div>
            <h2 className="section-title">
              Organizar Torneios e Gerir Clubes Não Deveria Ser Tão Difícil
            </h2>
            <p className="section-description">
              Confirmações de PIX por WhatsApp, erros na criação de chaves,
              mensalidades atrasadas sem controle. Você vive isso todo dia.
            </p>
          </div>
          <div className="problems-grid">
            <div className="problem-card reveal">
              <div className="problem-icon">$</div>
              <h3>Confusão nos Pagamentos</h3>
              <p>
                Receber PIX por WhatsApp, conferir um por um, cobrar quem não pagou... Um trabalho
                manual que toma horas do seu dia.
              </p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-icon">⚠</div>
              <h3>Erro na Criação de Chaves</h3>
              <p>
                Fase de grupos, seeding, eliminação dupla... Criar chaves complexas no Excel é
                demorado e qualquer erro vira dor de cabeça.
              </p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-icon">📅</div>
              <h3>Mensalidades Descontroladas</h3>
              <p>
                Planilha para controlar quem pagou, quem está atrasado, quem saiu do clube.
                Inadimplência que você só descobre tarde demais.
              </p>
            </div>
            <div className="problem-card reveal">
              <div className="problem-icon">⏱</div>
              <h3>Tempo Desperdiçado</h3>
              <p>
                Você quer focar no esporte, mas passa mais tempo com burocracia administrativa
                do que treinando ou organizando eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution" id="solucao">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">A Solução</div>
            <h2 className="section-title">TTPlay: Torneios + Clubes em Uma Única Central</h2>
            <p className="section-description">
              Gerencie competições, mensalidades e atletas em um sistema feito especificamente
              para o tênis de mesa. Profissionalismo e eficiência em cada detalhe.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h3>Inscrições Automatizadas</h3>
                <p>
                  Atletas se inscrevem diretamente na plataforma. Sistema confirma pagamentos
                  automaticamente. Você só acompanha.
                </p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">▣</div>
              <div className="feature-content">
                <h3>Chaves Profissionais</h3>
                <p>
                  Gere chaves de eliminação simples, dupla ou grupos com um clique. Sistema respeita
                  seeding e rankings automaticamente.
                </p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <h3>Gestão de Mensalidades</h3>
                <p>
                  Controle completo de mensalistas. Cobranças automáticas, alertas de vencimento
                  e relatórios de inadimplência em tempo real.
                </p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">↗</div>
              <div className="feature-content">
                <h3>Rankings em Tempo Real</h3>
                <p>
                  Sistema ELO automático que atualiza os rankings após cada partida. Histórico
                  completo de cada atleta.
                </p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">◉</div>
              <div className="feature-content">
                <h3>Notificações Inteligentes</h3>
                <p>
                  Atletas recebem alertas sobre próximos jogos, resultados, vencimento de mensalidade
                  e atualizações. Tudo automático.
                </p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-icon">☰</div>
              <div className="feature-content">
                <h3>100% Mobile</h3>
                <p>
                  Acesse de qualquer lugar, tablet ou smartphone. Interface moderna e intuitiva para
                  todas as idades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>90%</h2>
              <p>Menos tempo em burocracia</p>
            </div>
            <div className="stat-item">
              <h2>100%</h2>
              <p>Automatizado</p>
            </div>
            <div className="stat-item">
              <h2>24/7</h2>
              <p>Disponível sempre</p>
            </div>
            <div className="stat-item">
              <h2>∞</h2>
              <p>Torneios e mensalistas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Management Section - NEW */}
      <section className="club-management">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag" style={{ color: 'var(--accent)' }}>Para Clubes</div>
            <h2 className="section-title">Gestão Financeira Simplificada Para Seu Clube</h2>
            <p className="section-description">
              Chega de planilhas para controlar mensalidades. Com a TTPlay, você tem um parceiro
              financeiro que só ganha quando seu clube ganha.
            </p>
          </div>
          <div className="club-features-grid">
            <div className="club-feature-card reveal">
              <div className="club-feature-icon">👥</div>
              <h3>Controle de Mensalistas</h3>
              <p>
                Cadastro completo de atletas com status de pagamento, histórico e dados de contato.
                Saiba exatamente quem está em dia e quem precisa de cobrança.
              </p>
            </div>
            <div className="club-feature-card reveal">
              <div className="club-feature-icon">🔔</div>
              <h3>Cobrança Automática</h3>
              <p>
                Sistema envia lembretes de vencimento, gera boletos e PIX automaticamente.
                Seus atletas recebem notificações antes de atrasar.
              </p>
            </div>
            <div className="club-feature-card reveal">
              <div className="club-feature-icon">📊</div>
              <h3>Relatórios em Tempo Real</h3>
              <p>
                Dashboard com visão completa: receita mensal, inadimplência, previsão de faturamento.
                Tome decisões baseadas em dados, não em achismo.
              </p>
            </div>
            <div className="club-feature-card reveal">
              <div className="club-feature-icon">🏆</div>
              <h3>Integração com Torneios</h3>
              <p>
                Mensalistas participam de rankings internos e torneios do clube.
                Financeiro e esportivo conversam entre si automaticamente.
              </p>
            </div>
          </div>

          {/* Value Proposition Box */}
          <div className="value-proposition reveal">
            <div className="value-content">
              <h3>Por que o modelo da TTPlay é diferente?</h3>
              <div className="value-comparison">
                <div className="value-item before">
                  <span className="value-label">Sistema tradicional</span>
                  <span className="value-price">R$ 520/mês</span>
                  <span className="value-note">Cobra igual mesmo com o clube vazio nas férias</span>
                </div>
                <div className="value-divider">VS</div>
                <div className="value-item after">
                  <span className="value-label">TTPlay</span>
                  <span className="value-price">R$ 197/mês + 3%</span>
                  <span className="value-note">Seu custo reduz quando o movimento cai. Somos parceiros.</span>
                </div>
              </div>
              <p className="value-tip">
                <strong>Dica:</strong> Os 3% podem ser repassados como &quot;taxa de conveniência&quot; para o atleta.
                Assim, seu custo real é só R$ 197.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Como Funciona</div>
            <h2 className="section-title">4 Passos Simples para Começar</h2>
            <p className="section-description">
              Da criação do torneio à gestão de mensalidades. Sem complicação.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-number">1</div>
              <h3>Crie sua Conta</h3>
              <p>
                Cadastro gratuito em 2 minutos. Sem cartão de crédito.
                Comece a usar imediatamente.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-number">2</div>
              <h3>Configure seu Clube ou Torneio</h3>
              <p>
                Importe seus atletas de planilhas ou cadastre do zero.
                Configure mensalidades ou crie seu primeiro torneio.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-number">3</div>
              <h3>Deixe o Sistema Trabalhar</h3>
              <p>
                Cobranças automáticas, confirmação de pagamentos, notificações.
                A TTPlay cuida da burocracia.
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-number">4</div>
              <h3>Acompanhe os Resultados</h3>
              <p>
                Dashboard em tempo real. Rankings atualizados.
                Relatórios financeiros. Foque no que importa: o esporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Antes x Depois</div>
            <h2 className="section-title">A Transformação que o TTPlay Traz</h2>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card before reveal">
              <div className="comparison-header">
                <h3>Antes do TTPlay</h3>
              </div>
              <ul className="comparison-list">
                <li>8+ horas organizando cada torneio</li>
                <li>Conferir PIX manualmente no WhatsApp</li>
                <li>Erros nas chaves e reclamações</li>
                <li>Mensalidades em planilha desatualizada</li>
                <li>Descobrir inadimplência tarde demais</li>
                <li>Estresse constante com burocracia</li>
              </ul>
            </div>
            <div className="comparison-card after reveal">
              <div className="comparison-header">
                <h3>Depois do TTPlay</h3>
              </div>
              <ul className="comparison-list">
                <li>Menos de 1 hora para organizar tudo</li>
                <li>Pagamentos confirmados automaticamente</li>
                <li>Chaves perfeitas com 1 clique</li>
                <li>Mensalidades controladas em tempo real</li>
                <li>Alertas antes do vencimento</li>
                <li>Foco total no esporte e comunidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Depoimentos</div>
            <h2 className="section-title">O Que Dizem Organizadores e Atletas</h2>
            <p className="section-description">
              Mais de 500 torneios já foram organizados com o TTPlay
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;Antes eu gastava um dia inteiro só organizando inscrições e pagamentos. Agora
                faço tudo em minutos. O TTPlay transformou completamente meus torneios!&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">CM</div>
                <div className="author-info">
                  <strong>Carlos Mendes</strong>
                  <span>Organizador • Clube Pinheiros SP</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;A gestão de mensalidades mudou completamente nosso clube. Inadimplência caiu
                pela metade só com os lembretes automáticos. Vale cada centavo.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RL</div>
                <div className="author-info">
                  <strong>Roberto Lima</strong>
                  <span>Gestor • Academia de Tênis de Mesa RJ</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;Finalmente consigo acompanhar meu ranking e me inscrever em torneios sem
                precisar ficar mandando mensagem. Simples e funciona!&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MS</div>
                <div className="author-info">
                  <strong>Marina Silva</strong>
                  <span>Atleta • Rio de Janeiro RJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="founder-story">
        <div className="container">
          <div className="founder-content reveal">
            <div className="founder-image">
              <div className="founder-photo">👨‍💻</div>
            </div>
            <div className="founder-text">
              <div className="section-tag">Nossa História</div>
              <h2>De Jogador a Solucionador de Problemas</h2>
              <p>
                Sou <strong>Leandro Guerra</strong>, formado em Análise de Sistemas desde 2008.
                Por anos, trabalhei nos bastidores das maiores produções digitais do Brasil,
                levando automação para empresas como <strong>Corinthians e iFood</strong>.
              </p>
              <p>
                Mas o TTPlay nasceu de um lugar pessoal. Ao ver meu filho competindo no{' '}
                <strong>Madureira Esporte Clube</strong>, me deparei com a mesma bagunça:
                planilhas confusas, PIX confirmados manualmente, chaves com erros,
                mensalidades descontroladas.
              </p>
              <p>
                Foi aí que pensei: <strong>&quot;Por que ninguém resolve isso?&quot;</strong>
                Criei o TTPlay — não só para torneios, mas para a gestão completa de clubes.
                Um sistema que faz sentido para quem vive o tênis de mesa.
              </p>
              <div className="founder-signature">
                <strong>Leandro Guerra</strong>
                <span>Fundador, TTPlay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Free Section - NEW (replaces old benefits in pricing) */}
      <section className="athletes-free">
        <div className="container">
          <div className="athletes-free-content reveal">
            <div className="athletes-free-badge">🏓 Para Atletas</div>
            <h2>100% Grátis. Para Sempre.</h2>
            <p>
              Cadastro gratuito, inscrição em torneios, ranking, notificações, perfil completo.
              Você só paga a taxa de inscrição do torneio (definida pelo organizador).
            </p>
            <div className="athletes-benefits">
              <div className="athlete-benefit">
                <span className="benefit-check">✓</span>
                <span>Perfil com histórico completo</span>
              </div>
              <div className="athlete-benefit">
                <span className="benefit-check">✓</span>
                <span>Ranking atualizado automaticamente</span>
              </div>
              <div className="athlete-benefit">
                <span className="benefit-check">✓</span>
                <span>Inscrição online em torneios</span>
              </div>
              <div className="athlete-benefit">
                <span className="benefit-check">✓</span>
                <span>Notificações de jogos e resultados</span>
              </div>
            </div>
            <a href="https://app.ttplay.com.br" className="btn-primary">
              Criar Meu Perfil Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section - RESTRUCTURED */}
      <section className="pricing">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Planos para Organizadores</div>
            <h2 className="section-title">Escolha o Plano Ideal Para Você</h2>
            <p className="section-description">
              Comece grátis. Evolua conforme sua necessidade. Sem fidelidade, cancele quando quiser.
            </p>
          </div>
          <div className="pricing-grid">
            {/* Free + Trial */}
            <div className="pricing-card reveal">
              <h3>Torneios Free</h3>
              <div className="pricing-price">Grátis</div>
              <ul className="pricing-features">
                <li>
                  <strong>1 Torneio Trial</strong> com TODOS os recursos Pro
                </li>
                <li>Fase de Grupos, Seeding, Dupla Eliminação</li>
                <li>Depois: torneios ilimitados em Eliminação Simples</li>
                <li>Inscrições e pagamentos online</li>
                <li>Taxa de plataforma: 11,5% por atleta</li>
              </ul>
              <a href="https://app.ttplay.com.br" className="btn-primary">
                Começar Grátis
              </a>
            </div>

            {/* Pro - Featured */}
            <div className="pricing-card featured reveal">
              <div className="pricing-badge">Mais Popular</div>
              <h3>Torneios Pro</h3>
              <div className="pricing-price">
                R$ 29,90<span>/mês</span>
              </div>
              <ul className="pricing-features">
                <li>Todos os formatos de torneio desbloqueados</li>
                <li>Fase de Grupos, Dupla Eliminação, Seeding</li>
                <li>Torneios ilimitados</li>
                <li>
                  <strong>Taxa reduzida: apenas 7,5%</strong> por atleta
                </li>
                <li>Com 19 atletas, a economia já paga o plano</li>
                <li>Branding personalizado (logo, cores)</li>
              </ul>
              <a href="https://app.ttplay.com.br" className="btn-primary">
                Assinar Pro
              </a>
            </div>

            {/* Club Management */}
            <div className="pricing-card club-plan reveal">
              <div className="pricing-badge" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
                Completo
              </div>
              <h3>Gestão de Clubes</h3>
              <div className="pricing-price">
                R$ 197<span>/mês + 3%</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <strong>Inclui tudo do Torneios Pro</strong>
                </li>
                <li>Gestão completa de mensalistas</li>
                <li>Cobrança automática (PIX, Boleto, Cartão)</li>
                <li>Alertas de vencimento e inadimplência</li>
                <li>Relatórios financeiros em tempo real</li>
                <li>Rankings internos do clube</li>
                <li className="pricing-highlight">
                  💡 Os 3% podem ser repassados ao atleta
                </li>
              </ul>
              <a href="https://app.ttplay.com.br" className="btn-primary">
                Quero Para Meu Clube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Perguntas Frequentes</div>
            <h2 className="section-title">Tire Todas as Suas Dúvidas</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Por que a taxa de 3% na Gestão de Clubes?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  A taxa de 3% cobre toda a infraestrutura de cobrança automática: geração de PIX, boleto,
                  cartão de crédito, notificações de vencimento e conciliação bancária. <strong>Dica:</strong> você
                  pode repassar essa taxa ao atleta como &quot;conveniência de pagamento&quot; — assim seu custo real é
                  apenas R$ 197/mês.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>E se meu clube crescer muito? A taxa fica cara?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Esse é um &quot;problema bom&quot;! Se seu clube crescer a ponto de a taxa ficar significativa,
                  entramos em contato para negociar um plano Enterprise com teto fixo. <strong>Só se negocia
                    quando há problema real</strong> — não adiantamos limites fictícios.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Qual a diferença para sistemas de R$ 500/mês?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Sistemas genéricos cobram <strong>R$ 500+ fixos</strong> mesmo se seu clube estiver vazio nas férias.
                  A TTPlay é diferente: <strong>seu custo reduz quando o movimento cai.</strong> Além disso, somos
                  especializados em tênis de mesa — o financeiro conversa com ranking, que conversa com torneios.
                  Não precisa cadastrar atleta duas vezes.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>É difícil de usar? Preciso de conhecimento técnico?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  <strong>Zero conhecimento técnico!</strong> Se você usa WhatsApp, consegue usar a TTPlay.
                  Importamos seus atletas de planilhas, temos tutoriais em vídeo e suporte humanizado.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Os pagamentos são seguros?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  <strong>Totalmente!</strong> Usamos criptografia SSL/TLS e integramos com gateways certificados
                  (PCI DSS). Não armazenamos dados de cartão. Você recebe o dinheiro na sua conta em até 2 dias úteis.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Posso cancelar quando quiser?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  <strong>Sem fidelidade, sem burocracia.</strong> Cancele com 1 clique no painel. Sem taxas,
                  sem perguntas. Se cancelar, seus dados ficam salvos por 90 dias caso queira voltar.
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Atletas precisam pagar para usar?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  <strong>Não! É 100% gratuito para sempre.</strong> Atletas só pagam a taxa de inscrição
                  nos torneios (valor que você define) ou a mensalidade do clube (também definida por você).
                </p>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question">
                <h3>Consigo importar meus dados atuais?</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Sim! Importamos cadastros de atletas e históricos via <strong>planilha Excel/CSV</strong>.
                  Nossa equipe ajuda na migração para você começar com tudo organizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust">
        <div className="container">
          <div className="trust-content reveal">
            <h3>Segurança & Confiança Garantidas</h3>
            <div className="trust-badges">
              <div className="trust-badge">
                <div className="trust-icon">✓</div>
                <p>Criptografia SSL/TLS</p>
              </div>
              <div className="trust-badge">
                <div className="trust-icon">₳</div>
                <p>Pagamentos PCI Certificados</p>
              </div>
              <div className="trust-badge">
                <div className="trust-icon">◆</div>
                <p>99,9% Uptime</p>
              </div>
              <div className="trust-badge">
                <div className="trust-icon">☏</div>
                <p>Suporte Prioritário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Pronto para Profissionalizar Seu Clube ou Torneio?</h2>
          <p>
            Centenas de clubes e milhares de atletas já usam o TTPlay.
            Comece gratuitamente hoje e veja a diferença.
          </p>
          <a href="https://app.ttplay.com.br" className="btn-primary">
            Criar Conta Grátis Agora
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'TTPlay',
            applicationCategory: 'SportsApplication',
            applicationSubCategory: 'Gestão de Torneios e Clubes de Tênis de Mesa',
            operatingSystem: 'Web',
            url: 'https://ttplay.com.br',
            downloadUrl: 'https://app.ttplay.com.br',
            description:
              'TTPlay é a plataforma SaaS especializada em gestão profissional de torneios, clubes, mensalidades e rankings de tênis de mesa. Sistema completo para organizadores, gestores de clubes e atletas de tênis de mesa no Brasil.',
            featureList: [
              'Gestão completa de torneios de tênis de mesa',
              'Geração automática de chaves e chaveamentos',
              'Sistema de inscrições online com pagamento integrado',
              'Gestão de mensalidades e cobrança automática',
              'Controle financeiro para clubes',
              'Ranking automático de atletas',
              'Placar ao vivo e transmissão de resultados',
            ],
            offers: [
              {
                '@type': 'Offer',
                name: 'Torneios Free',
                price: '0',
                priceCurrency: 'BRL',
              },
              {
                '@type': 'Offer',
                name: 'Torneios Pro',
                price: '29.90',
                priceCurrency: 'BRL',
              },
              {
                '@type': 'Offer',
                name: 'Gestão de Clubes',
                price: '197',
                priceCurrency: 'BRL',
              },
            ],
            provider: {
              '@type': 'Organization',
              name: 'TTPlay',
              url: 'https://ttplay.com.br',
              logo: 'https://ttplay.com.br/logo.png',
            },
            inLanguage: 'pt-BR',
            availableInCountry: 'BR',
          }),
        }}
      />
    </>
  );
}
