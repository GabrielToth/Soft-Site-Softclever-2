import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import BotesWHATSCTT from '../components/botes-whats-ctt'
import Videos from '../components/videos'
import SolucoesLEFT from '../components/solucoes-left'
import SolucoesRIGHT from '../components/solucoes-right'
import Footer from '../components/footer'

const SolucaoVarejo = (props) => {
  return (
    <>
      <div className="solucao-varejo-container">
        <Head>
          <title>SolucaoVarejo - Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta property="og:title" content="SolucaoVarejo - Soft Clever" />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="solucao-varejo-hero-right">
          <img
            alt="image"
            src="/playground_assets/mulher-com-tablet-1500h.webp"
            loading="eager"
            className="solucao-varejo-image"
          />
          <LogoIcone rootClassName="logo-icone-root-class-name9"></LogoIcone>
          <div className="solucao-varejo-container1">
            <h1 className="solucao-varejo-heading">Varejo</h1>
            <span className="solucao-varejo-text">
              <span>
                Soluções em sistemas para o varejo em geral, seja de micro,
                pequeno ou de médio porte.
              </span>
              <br></br>
              <span>
                Oferecemos planos mensais ou anuais com descontos. Temos um
                pacote que cabe no seu bolso.
              </span>
              <br></br>
              <span>
                Não cobramos pela cópia do sistema e o nosso contrato mensal não
                possui fidelidade.
              </span>
              <br></br>
              <span>
                Nosso suporte é remoto e online e atendemos em todo o território
                nacional.
              </span>
              <br></br>
              <span>
                O Sírius S@T Fiscal é homologado pela Sefaz-SP e é indicado por
                centenas de contadores.
              </span>
              <br></br>
              <span>
                São mais de 12.000 usuários atendidos desde 1994. Na Soft Clever
                você pode confiar.
              </span>
              <br></br>
              <span>
                Conheça abaixo as nossas soluções voltadas para o comércio
                varejista.
              </span>
              <br></br>
            </span>
            <BotesWHATSCTT></BotesWHATSCTT>
          </div>
        </div>
        <Videos rootClassName="videos-root-class-name"></Videos>
        <div className="solucao-varejo-container2">
          <div className="solucao-varejo-container3">
            <div className="solucao-varejo-text-left">
              <div className="solucao-varejo-text-solution">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxmaW5hbmNlfGVufDB8fHx8MTY4MTM5OTUyMQ&amp;ixlib=rb-4.0.3&amp;w=700"
                  className="solucao-varejo-image01"
                />
                <h1 className="solucao-varejo-text15">
                  Sírius S@T Fiscal / NFC-e
                </h1>
                <span className="solucao-varejo-text16">
                  <span>· Geração de Cupom Fiscal Eletrônico SAT</span>
                  <br></br>
                  <span>
                    · Geração de Nota Fiscal de Consumidor Eletrônica NFC-e
                  </span>
                  <br></br>
                  <span>· Preparado para atender a lei da transparência</span>
                  <br></br>
                  <span>· Geração de Nota Fiscal Paulista</span>
                  <br></br>
                  <span>· Integração com TEF (cartão de crédito)</span>
                  <br></br>
                  <span>· Rotinas de abertura e fechamento de caixa</span>
                  <br></br>
                  <span>· Controle de estoque</span>
                </span>
              </div>
              <div className="solucao-varejo-text-solution1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;w=700"
                  loading="lazy"
                  className="solucao-varejo-image02"
                />
                <h1 className="solucao-varejo-text30">Sírius Nf-e</h1>
                <span className="solucao-varejo-text31">
                  <span>· Geração de NFE a partir do pedido</span>
                  <br></br>
                  <span>· Digitação expressa de nfe de saída ou entrada</span>
                  <br></br>
                  <span>· Processos automatizados de;</span>
                  <br></br>
                  <span>
                    · Cálculos de impostos, inclusive substituição tributária
                  </span>
                  <br></br>
                  <span>· Cálculos de peso e volume</span>
                  <br></br>
                  <span>· Envio, autorização e retorno junto a SEFAZ</span>
                  <br></br>
                  <span>· Impressão da Danfe</span>
                  <br></br>
                  <span>· Geração e envio de arquivo XML</span>
                  <br></br>
                  <span>· Visualização da pré-danfe</span>
                  <br></br>
                  <span>· Rotinas de cancelamento e inutilização</span>
                  <br></br>
                  <span>· Geração de notas de importação</span>
                  <br></br>
                  <span>· Carta de correção, nota complementar e afins</span>
                </span>
              </div>
              <div className="solucao-varejo-text-solution2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&amp;ixlib=rb-4.0.3&amp;w=700"
                  loading="lazy"
                  className="solucao-varejo-image03"
                />
                <h1 className="solucao-varejo-text55">
                  Sírius S@T Safira – Para todo o comércio varejista
                </h1>
                <span className="solucao-varejo-text56">
                  <span>· Possui todos os recursos do Sírius S@T Fiscal</span>
                  <br></br>
                  <span>· Módulo Financeiro a pagar</span>
                  <br></br>
                  <span>· Módulo Financeiro a receber</span>
                  <br></br>
                  <span>· Pedidos de compras</span>
                </span>
              </div>
              <div className="solucao-varejo-text-solution3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1443934732608-9de53a872e32?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG9wdGljc3xlbnwwfHx8fDE2ODE0MDYzMzI&amp;ixlib=rb-4.0.3&amp;w=700"
                  className="solucao-varejo-image04"
                />
                <h1 className="solucao-varejo-text64">Sírius Óticas</h1>
                <span className="solucao-varejo-text65">
                  Cadastro de laboratórios, oftalmologistas e afins. Controle de
                  lentes, armações, marcas e modelos. Controle de ordens de
                  serviços. Gera o cupom fiscal de forma automatizada através do
                  Sírius SAT.
                </span>
              </div>
            </div>
            <div className="solucao-varejo-images">
              <img
                alt="image"
                src="/playground_assets/feliz-modernos-mulher-com-bolsas-para-compras-vertical-2-500w.jpg"
                loading="lazy"
                className="solucao-varejo-image05"
              />
            </div>
            <div className="solucao-varejo-text-right">
              <div className="solucao-varejo-text-solution4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&amp;ixlib=rb-4.0.3&amp;w=700"
                  loading="lazy"
                  className="solucao-varejo-image06"
                />
                <h1 className="solucao-varejo-text66">
                  Sírius Pré Venda / Balcão – Lojas em geral
                </h1>
                <span className="solucao-varejo-text67">
                  Geração de orçamento, pedido de venda, baixa de estoque e
                  afins. Ideal para o lojista que emite pedidos de venda e
                  possui mais de um ponto de venda na loja. Gera o cupom fiscal
                  de forma automatizada através do Sírius SAT.
                </span>
              </div>
              <div className="solucao-varejo-text-solution5">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHJlc3RhdXJhbnQlMjBiaWxsfGVufDB8fHx8MTY4MTMxMzM0MQ&amp;ixlib=rb-4.0.3&amp;w=700"
                  className="solucao-varejo-image07"
                />
                <h1 className="solucao-varejo-text68">
                  Sírius Comanda / Mesas – Alimentação em Geral
                </h1>
                <span className="solucao-varejo-text69">
                  Geração de orçamento, pedido de venda, baixa de estoque e
                  afins. Ideal para o lojista que emite pedidos de venda e
                  possui mais de um ponto de venda na loja. Gera o cupom fiscal
                  de forma automatizada através do Sírius SAT.
                </span>
              </div>
              <div className="solucao-varejo-text-solution6">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1638981367648-d4909c40ab16?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxwaXp6ZXJpYXxlbnwwfHx8fDE2ODEzMTM2MTc&amp;ixlib=rb-4.0.3&amp;w=700"
                  className="solucao-varejo-image08"
                />
                <h1 className="solucao-varejo-text70">Sírius Pizzarias</h1>
                <span className="solucao-varejo-text71">
                  Recursos voltados exclusivamente as pizzarias como; promoção
                  de vendas, fracionamento da pizza (2 ou mais sabores),
                  observações enviadas a cozinha em relação a montagem da pizza
                  e muito mias. Gera o cupom fiscal de forma automatizada
                  através do Sírius SAT.
                </span>
              </div>
              <div className="solucao-varejo-text-solution7">
                <img
                  alt="image"
                  src="https://static.poder360.com.br/2020/05/Delivery-Ifood-Motoboy-Bike-Ciclista-Entregadores-5-1.jpg"
                  className="solucao-varejo-image09"
                />
                <h1 className="solucao-varejo-text72">Sírius iFood</h1>
                <span className="solucao-varejo-text73">
                  Captura os pedidos do iFood, monta o pedido de venda e executa
                  o despacho de forma rápida e fácil. Gera o cupom fiscal de
                  forma automatizada através do Sírius SAT.
                </span>
              </div>
              <div className="solucao-varejo-text-solution8">
                <img
                  alt="image"
                  src="https://uploads.metropoles.com/wp-content/uploads/2021/07/07140330/Design-sem-nome-60-1-600x400.jpg"
                  className="solucao-varejo-image10"
                />
                <h1 className="solucao-varejo-text74">Sírius Pet Shop</h1>
                <span className="solucao-varejo-text75">
                  Controle de raça, tipo de pelagem, tutor, vacinação,
                  agendamentos, atendimentos e muito mais. Gera o cupom fiscal
                  de forma automatizada através do Sírius SAT.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="solucao-varejo-features">
          <h1 className="solucao-varejo-text76">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="solucao-varejo-container4">
            <Link href="/solucao-atacado--distribuicao">
              <a>
                <SolucoesLEFT
                  title="Atacado e Distribuição"
                  action="VEJA MAIS"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="rootClassName11"
                  className="solucao-varejo-component2"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a>
                <SolucoesRIGHT
                  title="Indústria e Serviço"
                  image_alt="Fiscal"
                  image_src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTMxOTI5MA&amp;ixlib=rb-4.0.3&amp;w=400"
                  description="Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica."
                  rootClassName="solucoes-right-root-class-name8"
                  className="solucao-varejo-component3"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a>
                <SolucoesLEFT
                  title="Fiscal"
                  action="VEJA MAIS"
                  image_src="https://www.remessaonline.com.br/blog/wp-content/uploads/2021/01/bloggif_5ff493acd7925.jpeg.webp"
                  description="Sped ICMS, IPI, Pis e Cofins e Bloco K completo."
                  rootClassName="rootClassName1"
                  className="solucao-varejo-component4"
                ></SolucoesLEFT>
              </a>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .solucao-varejo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solucao-varejo-hero-right {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 700px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .solucao-varejo-image {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
          }
          .solucao-varejo-container1 {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 5%;
            padding-right: 24px;
            flex-direction: column;
            justify-content: center;
          }
          .solucao-varejo-heading {
            font-size: 3rem;
          }
          .solucao-varejo-text {
            width: 100%;
            margin-top: var(--dl-space-space-twounits);
            text-align: justify;
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .solucao-varejo-container2 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            justify-content: center;
            background-color: var(--dl-color-bgpastel-begebg);
          }
          .solucao-varejo-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            justify-content: space-between;
          }
          .solucao-varejo-text-left {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text-solution {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-image01 {
            width: 100%;
            height: 175px;
            display: none;
            min-width: 370px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: bottom;
          }
          .solucao-varejo-text15 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text16 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image02 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-text30 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text31 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image03 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-text55 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text56 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-image04 {
            width: 100%;
            height: 175px;
            display: none;
            min-width: 370px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: bottom;
          }
          .solucao-varejo-text64 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text65 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-images {
            flex: 0 0 auto;
            width: 35%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .solucao-varejo-image05 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-text-right {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text-solution4 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image06 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-varejo-text66 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text67 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution5 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image07 {
            width: 100%;
            height: 177px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-text68 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text69 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image08 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-text70 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text71 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .solucao-varejo-image09 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -50;
          }
          .solucao-varejo-text72 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text73 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-image10 {
            width: 100%;
            height: 175px;
            display: none;
            min-width: 370px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: bottom;
          }
          .solucao-varejo-text74 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text75 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-varejo-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-bgpastel-bgcreme);
          }
          .solucao-varejo-text76 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-varejo-container4 {
            width: 100%;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .solucao-varejo-component2 {
            text-decoration: none;
          }
          .solucao-varejo-component3 {
            text-decoration: none;
          }
          .solucao-varejo-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-varejo-image {
              width: 30%;
            }
            .solucao-varejo-container1 {
              width: 70%;
              height: 100%;
              z-index: 100;
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-varejo-heading {
              text-align: center;
            }
            .solucao-varejo-text {
              margin-top: var(--dl-space-space-fourunits);
              text-align: left;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .solucao-varejo-text-left {
              width: 50%;
              height: auto;
              padding: var(--dl-space-space-twounits);
              align-self: stretch;
            }
            .solucao-varejo-text-solution {
              margin-bottom: 0px;
            }
            .solucao-varejo-image01 {
              width: 100%;
              height: 175px;
              min-width: 0px;
            }
            .solucao-varejo-text-solution1 {
              margin-bottom: 0px;
            }
            .solucao-varejo-image02 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-varejo-text-solution2 {
              margin-bottom: 0px;
            }
            .solucao-varejo-image03 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image04 {
              width: 100%;
              height: 175px;
              min-width: 0px;
            }
            .solucao-varejo-images {
              width: 30%;
              height: 1719px;
              display: none;
              min-width: 0px;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .solucao-varejo-image05 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-varejo-text-right {
              width: 50%;
              padding: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image06 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-varejo-image07 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image08 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image09 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image10 {
              width: 100%;
              height: 175px;
              min-width: 0px;
            }
            .solucao-varejo-text76 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-varejo-hero-right {
              height: auto;
              min-height: 80vh;
              align-items: flex-start;
            }
            .solucao-varejo-image {
              display: none;
            }
            .solucao-varejo-container1 {
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-varejo-container2 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-varejo-container3 {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-varejo-text-left {
              order: 2;
              width: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .solucao-varejo-text-solution {
              order: 2;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image01 {
              width: 70%;
              height: 200px;
              display: flex;
              min-width: 0px;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text15 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution1 {
              order: 2;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image02 {
              width: 70%;
              display: flex;
              align-self: center;
            }
            .solucao-varejo-text30 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution2 {
              order: 2;
            }
            .solucao-varejo-image03 {
              width: 70%;
              display: flex;
              align-self: center;
            }
            .solucao-varejo-text55 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution3 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image04 {
              width: 70%;
              height: 200px;
              display: flex;
              min-width: 0px;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text64 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-images {
              display: none;
            }
            .solucao-varejo-text-right {
              width: auto;
            }
            .solucao-varejo-text-solution4 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image06 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text66 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution5 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image07 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              justify-content: center;
            }
            .solucao-varejo-text68 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution6 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image08 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text70 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution7 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image09 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text72 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-text-solution8 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-varejo-image10 {
              width: 70%;
              height: 200px;
              display: flex;
              min-width: 0px;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-varejo-text74 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-varejo-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-varejo-text76 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-varejo-container1 {
              width: 459px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image01 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image02 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image03 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image04 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image06 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image07 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image08 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image09 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-image10 {
              width: 100%;
              height: 200px;
              max-height: auto;
            }
            .solucao-varejo-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default SolucaoVarejo
