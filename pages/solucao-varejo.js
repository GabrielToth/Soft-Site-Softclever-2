import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import NavigationLinks2 from '../components/navigation-links2'
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
        <header data-role="Header" className="solucao-varejo-header">
          <LogoIcone rootClassName="logo-icone-root-class-name17"></LogoIcone>
          <div className="solucao-varejo-nav">
            <NavigationLinks2 rootClassName="rootClassName16"></NavigationLinks2>
          </div>
          <div data-role="BurgerMenu" className="solucao-varejo-burger-menu">
            <svg viewBox="0 0 1024 1024" className="solucao-varejo-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="solucao-varejo-mobile-menu">
            <div className="solucao-varejo-nav1">
              <div className="solucao-varejo-container1">
                <LogoIcone rootClassName="logo-icone-root-class-name18"></LogoIcone>
                <div
                  data-role="CloseMobileMenu"
                  className="solucao-varejo-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="solucao-varejo-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks2 rootClassName="rootClassName19"></NavigationLinks2>
            </div>
            <div className="solucao-varejo-icon-group">
              <a
                href="https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-varejo-link"
              >
                <svg viewBox="0 0 1024 1024" className="solucao-varejo-icon04">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/soft.clever"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-varejo-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="solucao-varejo-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/softcleverinformatica"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-varejo-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="solucao-varejo-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <div className="solucao-varejo-hero-right">
          <img
            alt="image"
            src="/playground_assets/mulher-com-tablet-1500h.webp"
            loading="eager"
            className="solucao-varejo-image"
          />
          <div className="solucao-varejo-container2">
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
        <div className="solucao-varejo-container3">
          <div className="solucao-varejo-container4">
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
          <div className="solucao-varejo-container5">
            <Link href="/solucao-atacado--distribuicao">
              <a className="solucao-varejo-link3">
                <SolucoesLEFT
                  title="Atacado e Distribuição"
                  action="VEJA MAIS"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="rootClassName11"
                  className="solucao-varejo-component4"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a className="solucao-varejo-link4">
                <SolucoesRIGHT
                  title="Indústria e Serviço"
                  image_alt="Fiscal"
                  image_src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTMxOTI5MA&amp;ixlib=rb-4.0.3&amp;w=400"
                  description="Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica."
                  rootClassName="solucoes-right-root-class-name8"
                  className="solucao-varejo-component5"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a className="solucao-varejo-link5">
                <SolucoesLEFT
                  title="Fiscal"
                  action="VEJA MAIS"
                  image_src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1N3x8ZmluYW5jZXxlbnwwfHx8fDE2ODI0MzM2MjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  description="Sped ICMS, IPI, Pis e Cofins e Bloco K completo."
                  rootClassName="rootClassName1"
                  className="solucao-varejo-component6"
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
          .solucao-varejo-header {
            top: 0px;
            left: 0px;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-varejo-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .solucao-varejo-burger-menu {
            display: none;
            z-index: 100;
          }
          .solucao-varejo-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .solucao-varejo-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-varejo-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-varejo-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .solucao-varejo-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solucao-varejo-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .solucao-varejo-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-varejo-link {
            display: contents;
          }
          .solucao-varejo-icon04 {
            width: 18px;
            height: 24px;
            text-decoration: none;
          }
          .solucao-varejo-link1 {
            display: contents;
          }
          .solucao-varejo-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .solucao-varejo-link2 {
            display: contents;
          }
          .solucao-varejo-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .solucao-varejo-hero-right {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-fiveunits);
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
          .solucao-varejo-container2 {
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
          .solucao-varejo-container3 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            justify-content: center;
            background-color: var(--dl-color-bgpastel-begebg);
          }
          .solucao-varejo-container4 {
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
          .solucao-varejo-container5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .solucao-varejo-link3 {
            display: contents;
          }
          .solucao-varejo-component4 {
            text-decoration: none;
          }
          .solucao-varejo-link4 {
            display: contents;
          }
          .solucao-varejo-component5 {
            text-decoration: none;
          }
          .solucao-varejo-link5 {
            display: contents;
          }
          .solucao-varejo-component6 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-varejo-icon-group {
              margin-top: var(--dl-space-space-unit);
            }
            .solucao-varejo-image {
              width: 30%;
            }
            .solucao-varejo-container2 {
              width: 70%;
              height: 100%;
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
            .solucao-varejo-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-varejo-nav {
              display: none;
            }
            .solucao-varejo-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .solucao-varejo-hero-right {
              height: auto;
              min-height: 80vh;
              align-items: flex-start;
            }
            .solucao-varejo-image {
              display: none;
            }
            .solucao-varejo-container2 {
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-varejo-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-varejo-container4 {
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
            .solucao-varejo-header {
              padding: var(--dl-space-space-unit);
            }
            .solucao-varejo-mobile-menu {
              padding: 16px;
            }
            .solucao-varejo-icon-group {
              align-self: flex-start;
              justify-content: center;
            }
            .solucao-varejo-container2 {
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
