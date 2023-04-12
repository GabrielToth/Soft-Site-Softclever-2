import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import BotesWHATSCTT from '../components/botes-whats-ctt'
import Videos from '../components/videos'
import SolucoesRIGHT from '../components/solucoes-right'
import SolucoesLEFT from '../components/solucoes-left'
import Footer from '../components/footer'

const SolucaoIndustriaEServico = (props) => {
  return (
    <>
      <div className="solucao-industria--servico-container">
        <Head>
          <title>SolucaoIndustriaEServico - Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta
            property="og:title"
            content="SolucaoIndustriaEServico - Soft Clever"
          />
          <meta
            property="og:description"
            content="A solução para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="solucao-industria--servico-hero-right">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxpbmR1c3RyeXxlbnwwfHx8fDE2ODEzMTkyOTA&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="solucao-industria--servico-image"
          />
          <LogoIcone rootClassName="logo-icone-root-class-name6"></LogoIcone>
          <div className="solucao-industria--servico-container1">
            <h1 className="solucao-industria--servico-text">
              Indústria e Serviço
            </h1>
            <span className="solucao-industria--servico-text01">
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
        <Videos></Videos>
        <div className="solucao-industria--servico-container2">
          <div className="solucao-industria--servico-text-left">
            <div className="solucao-industria--servico-text-solution">
              <h1 className="solucao-industria--servico-text16">
                Sírius S@T Fiscal / NFC-e
              </h1>
              <span className="solucao-industria--servico-text17">
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
            <div className="solucao-industria--servico-text-solution01">
              <h1 className="solucao-industria--servico-text31">Sírius Nf-e</h1>
              <span className="solucao-industria--servico-text32">
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
            <div className="solucao-industria--servico-text-solution02">
              <h1 className="solucao-industria--servico-text56">
                Sírius S@T Safira – Para todo o comércio varejista
              </h1>
              <span className="solucao-industria--servico-text57">
                <span>· Possui todos os recursos do Sírius S@T Fiscal</span>
                <br></br>
                <span>· Módulo Financeiro a pagar</span>
                <br></br>
                <span>· Módulo Financeiro a receber</span>
                <br></br>
                <span>· Pedidos de compras</span>
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution03">
              <h1 className="solucao-industria--servico-text65">
                Sírius Óticas
              </h1>
              <span className="solucao-industria--servico-text66">
                Cadastro de laboratórios, oftalmologistas e afins. Controle de
                lentes, armações, marcas e modelos. Controle de ordens de
                serviços. Gera o cupom fiscal de forma automatizada através do
                Sírius SAT.
              </span>
            </div>
          </div>
          <div className="solucao-industria--servico-images">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&amp;ixlib=rb-4.0.3&amp;w=500"
              loading="lazy"
              className="solucao-industria--servico-image1"
            />
            <div className="solucao-industria--servico-left-images">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;h=1500"
                loading="lazy"
                className="solucao-industria--servico-image2"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-industria--servico-image3"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1443934732608-9de53a872e32?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG9wdGljfGVufDB8fHx8MTY4MTMxMzg5NA&amp;ixlib=rb-4.0.3&amp;w=500"
                className="solucao-industria--servico-image4"
              />
            </div>
            <div className="solucao-industria--servico-right-images">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHJlc3RhdXJhbnQlMjBiaWxsfGVufDB8fHx8MTY4MTMxMzM0MQ&amp;ixlib=rb-4.0.3&amp;w=500"
                className="solucao-industria--servico-image5"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1618007625018-51cbd56c0520?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMzfHxkZWxpdmVyeXxlbnwwfHx8fDE2ODEzMTMzNTY&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-industria--servico-image6"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1638981367648-d4909c40ab16?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxwaXp6ZXJpYXxlbnwwfHx8fDE2ODEzMTM2MTc&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-industria--servico-image7"
              />
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHBldCUyMHNob3B8ZW58MHx8fHwxNjgxMzE0MzYx&amp;ixlib=rb-4.0.3&amp;w=500"
              className="solucao-industria--servico-image8"
            />
          </div>
          <div className="solucao-industria--servico-text-right">
            <div className="solucao-industria--servico-text-solution04">
              <h1 className="solucao-industria--servico-text67">
                Sírius Pré Venda / Balcão – Lojas em geral
              </h1>
              <span className="solucao-industria--servico-text68">
                Geração de orçamento, pedido de venda, baixa de estoque e afins.
                Ideal para o lojista que emite pedidos de venda e possui mais de
                um ponto de venda na loja. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution05">
              <h1 className="solucao-industria--servico-text69">
                Sírius Comanda / Mesas – Alimentação em Geral
              </h1>
              <span className="solucao-industria--servico-text70">
                Geração de orçamento, pedido de venda, baixa de estoque e afins.
                Ideal para o lojista que emite pedidos de venda e possui mais de
                um ponto de venda na loja. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution06">
              <h1 className="solucao-industria--servico-text71">
                Sírius Delivery – Alimentação em Geral
              </h1>
              <span className="solucao-industria--servico-text72">
                Controle das entregas para comércio em geral. Gera o cupom
                fiscal de forma automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution07">
              <h1 className="solucao-industria--servico-text73">
                Sírius Pizzarias
              </h1>
              <span className="solucao-industria--servico-text74">
                Recursos voltados exclusivamente as pizzarias como; promoção de
                vendas, fracionamento da pizza (2 ou mais sabores), observações
                enviadas a cozinha em relação a montagem da pizza e muito mias.
                Gera o cupom fiscal de forma automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution08">
              <h1 className="solucao-industria--servico-text75">
                Sírius iFood
              </h1>
              <span className="solucao-industria--servico-text76">
                Captura os pedidos do iFood, monta o pedido de venda e executa o
                despacho de forma rápida e fácil. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution09">
              <h1 className="solucao-industria--servico-text77">
                Sírius Pet Shop
              </h1>
              <span className="solucao-industria--servico-text78">
                Controle de raça, tipo de pelagem, tutor, vacinação,
                agendamentos, atendimentos e muito mais. Gera o cupom fiscal de
                forma automatizada através do Sírius SAT.
              </span>
            </div>
          </div>
        </div>
        <div className="solucao-industria--servico-features">
          <h1 className="solucao-industria--servico-text79">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="solucao-industria--servico-container3">
            <Link href="/solucao-varejo">
              <a>
                <SolucoesRIGHT
                  title="Varejo"
                  image_alt="Atacado e Distribuição"
                  image_src="/playground_assets/comercio-varejista-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="solucoes-right-root-class-name12"
                  className="solucao-industria--servico-component2"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-atacado--distribuicao">
              <a>
                <SolucoesLEFT
                  title="Atacado e Distribuição"
                  action="VEJA MAIS"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="rootClassName4"
                  className="solucao-industria--servico-component3"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a>
                <SolucoesRIGHT
                  title="Fiscal"
                  image_alt="Fiscal"
                  image_src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNhbGN1bGF0b3J8ZW58MHx8fHwxNjgxMjI0ODg0&amp;ixlib=rb-4.0.3&amp;h=200"
                  description="Sped ICMS, IPI, Pis e Cofins e Bloco K completo."
                  rootClassName="solucoes-right-root-class-name9"
                  className="solucao-industria--servico-component4"
                ></SolucoesRIGHT>
              </a>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .solucao-industria--servico-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solucao-industria--servico-hero-right {
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
          .solucao-industria--servico-image {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
          }
          .solucao-industria--servico-container1 {
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
          .solucao-industria--servico-text {
            font-size: 3rem;
          }
          .solucao-industria--servico-text01 {
            width: 100%;
            margin-top: var(--dl-space-space-twounits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .solucao-industria--servico-container2 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .solucao-industria--servico-text-left {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            max-height: 100%;
            align-items: stretch;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text-solution {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text16 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text17 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text31 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text32 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text56 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text57 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text65 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text66 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-images {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            min-width: 370px;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .solucao-industria--servico-image1 {
            width: 100%;
            height: 175px;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-industria--servico-left-images {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .solucao-industria--servico-image2 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-image3 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: -060px;
          }
          .solucao-industria--servico-image4 {
            width: 177px;
            height: 177px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-right-images {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solucao-industria--servico-image5 {
            width: 177px;
            height: 177px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-image6 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-image7 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-image8 {
            width: 100%;
            height: 175px;
            min-width: 370px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -300px;
          }
          .solucao-industria--servico-text-right {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-twounits);
            align-items: stretch;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text-solution04 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text67 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text68 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution05 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text69 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text70 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution06 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text71 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text72 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution07 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text73 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text74 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution08 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text75 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text76 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution09 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-text77 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-industria--servico-text78 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-industria--servico-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .solucao-industria--servico-text79 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-industria--servico-container3 {
            width: 100%;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .solucao-industria--servico-component2 {
            text-decoration: none;
          }
          .solucao-industria--servico-component3 {
            text-decoration: none;
          }
          .solucao-industria--servico-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-industria--servico-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .solucao-industria--servico-container1 {
              width: 100%;
              height: 100%;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .solucao-industria--servico-text {
              color: #ffffff;
              text-align: center;
            }
            .solucao-industria--servico-text01 {
              color: #ffffff;
              margin-top: var(--dl-space-space-fourunits);
              text-align: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .solucao-industria--servico-images {
              width: 30%;
              height: 1719px;
              min-width: 0px;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .solucao-industria--servico-image1 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-industria--servico-left-images {
              width: 100%;
              height: 37, 5%;
              align-items: center;
              justify-content: space-between;
            }
            .solucao-industria--servico-image2 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-image3 {
              width: 100%;
              height: 170px;
              margin-top: 0px;
              margin-bottom: 0px;
              object-position: 0;
            }
            .solucao-industria--servico-image4 {
              width: 100%;
              height: 170px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-right-images {
              width: 100%;
              height: 37, 5%;
              align-self: flex-start;
              align-items: center;
              justify-content: space-between;
            }
            .solucao-industria--servico-image5 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-image6 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-image7 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-image8 {
              width: 100%;
              height: 175px;
              min-width: 0px;
              object-fit: cover;
              object-position: center;
            }
            .solucao-industria--servico-text79 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-industria--servico-container1 {
              width: 100%;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .solucao-industria--servico-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-text79 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-industria--servico-container1 {
              width: 459px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucao-industria--servico-features {
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

export default SolucaoIndustriaEServico
