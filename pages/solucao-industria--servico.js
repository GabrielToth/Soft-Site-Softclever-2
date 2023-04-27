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
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <header
          data-role="Header"
          className="solucao-industria--servico-header"
        >
          <LogoIcone rootClassName="logo-icone-root-class-name19"></LogoIcone>
          <div className="solucao-industria--servico-nav">
            <NavigationLinks2 rootClassName="rootClassName20"></NavigationLinks2>
          </div>
          <div
            data-role="BurgerMenu"
            className="solucao-industria--servico-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="solucao-industria--servico-icon"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="solucao-industria--servico-mobile-menu"
          >
            <div className="solucao-industria--servico-nav1">
              <div className="solucao-industria--servico-container1">
                <LogoIcone rootClassName="logo-icone-root-class-name20"></LogoIcone>
                <div
                  data-role="CloseMobileMenu"
                  className="solucao-industria--servico-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="solucao-industria--servico-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks2 rootClassName="rootClassName21"></NavigationLinks2>
            </div>
            <div className="solucao-industria--servico-icon-group">
              <a
                href="https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-industria--servico-link"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="solucao-industria--servico-icon04"
                >
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/soft.clever"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-industria--servico-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="solucao-industria--servico-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/softcleverinformatica"
                target="_blank"
                rel="noreferrer noopener"
                className="solucao-industria--servico-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="solucao-industria--servico-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <div className="solucao-industria--servico-hero-right">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxpbmR1c3RyeXxlbnwwfHx8fDE2ODEzMTkyOTA&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="eager"
            className="solucao-industria--servico-image"
          />
          <div className="solucao-industria--servico-container2">
            <h1 className="solucao-industria--servico-text">
              Indústria e Serviço
            </h1>
            <span className="solucao-industria--servico-text01">
              <span className="solucao-industria--servico-text02">
                Sistema de gestão empresarial completo que facilita o fluxo de
                informações entre todos os setores da empresa, tais como;
                produção, compras, vendas, estoque, fiscal, financeiro,
                expedição, cobrança e afins. O Sírius ERP está em constante
                atualização e crescimento e conta com mais de 12 mil usuários
                atendidos desde 1994. Disponibilizamos as melhores e mais
                avançadas tecnologias para atender de forma prática qualquer
                tipo de empresa de micro, pequeno, e médio porte. Oferecemos
                planos mensais ou anuais com descontos e não cobramos pela cópia
                do sistema. O nosso contrato mensal não possui fidelidade.
              </span>
              <br className="solucao-industria--servico-text03"></br>
              <span className="solucao-industria--servico-text04">
                Nosso suporte é remoto e online e atendemos em todo o território
                nacional.
              </span>
              <br className="solucao-industria--servico-text05"></br>
              <span className="solucao-industria--servico-text06">
                O Sírius ERP Atende completamente a Legislação Fiscal exigida
                pela SEFAZ e centenas de contabilidades nos indicam. Na Soft
                Clever você pode confiar.
              </span>
              <br className="solucao-industria--servico-text07"></br>
              <span className="solucao-industria--servico-text08">
                Tenha o controle de sua produção com explosão de matérias
                primas, saldos de estoque e lotes. Conheça abaixo alguns módulos
                específicos para o setor fabril e de serviços. Os módulos
                mencionados precisam ser utilizados em conjunto com o Sírius
                ERP.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <BotesWHATSCTT rootClassName="botes-whatsctt-root-class-name1"></BotesWHATSCTT>
          </div>
        </div>
        <Videos></Videos>
        <div className="solucao-industria--servico-container3">
          <div className="solucao-industria--servico-text-right">
            <div className="solucao-industria--servico-text-solution">
              <img
                alt="image"
                src="/playground_assets/engenheiro-de-homem-de-negocios-bonito-no-capacete-em-um-edificio_1303-21167-1400w.jpg"
                loading="lazy"
                className="solucao-industria--servico-image1"
              />
              <div className="solucao-industria--servico-container4">
                <h1 className="solucao-industria--servico-text10">Produção</h1>
              </div>
              <span className="solucao-industria--servico-text11">
                Totalmente integrado com o estoque. Geração de ordem de produção
                a partir do pedido de venda. Controle por fases da produção,
                controle por grade, baixa automática das matérias primas e
                remessa parcial de matérias primas a terceiros. Carga automática
                de estoque dos produtos acabados, impressão de ordem de
                produção, ficha técnica e ou de corte. Envia pagamento a
                terceiros para as contas a pagar.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution1">
              <img
                alt="image"
                src="/playground_assets/industria-2-1400w.jpg"
                className="solucao-industria--servico-image2"
              />
              <div className="solucao-industria--servico-container5">
                <h1 className="solucao-industria--servico-text12">
                  Entrada para Beneficiamento
                </h1>
              </div>
              <span className="solucao-industria--servico-text13">
                Totalmente integrado com o estoque, vendas e financeiro. Permite
                ao usuário controle detalhado das entradas de mercadorias que
                passarão pelos processos de beneficiamento. Entrada de notas,
                emissão de pedidos de vendas totais e parciais, controle de
                saldos de matérias primas e produtos acabados, emissão de NF-es
                a partir do pedido de venda com possibilidade de acrescentar
                mais de uma operação na mesma NF-e.
              </span>
            </div>
            <div className="solucao-industria--servico-text-solution2">
              <img
                alt="image"
                src="/playground_assets/industria-3-1400w.jpg"
                className="solucao-industria--servico-image3"
              />
              <div className="solucao-industria--servico-container6">
                <h1 className="solucao-industria--servico-text14">
                  Ordens de Serviços
                </h1>
              </div>
              <span className="solucao-industria--servico-text15">
                Totalmente integrado com as vendas, estoque e financeiro.
                Controle de entradas dos itens que serão consertados. Geração de
                orçamentos e ordens de serviços. Envio para pedido de vendas e
                geração de nota fiscal. Baixa automática das peças utilizadas,
                diversas opções de status, filtros, relatório e rotinas com
                exportação para Excel.
              </span>
            </div>
          </div>
        </div>
        <div className="solucao-industria--servico-features">
          <h1 className="solucao-industria--servico-text16">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="solucao-industria--servico-container7">
            <Link href="/solucao-varejo">
              <a className="solucao-industria--servico-link3">
                <SolucoesLEFT
                  title="Varejo"
                  action="VEJA MAIS"
                  description="Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF."
                  rootClassName="rootClassName10"
                  className="solucao-industria--servico-component4"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-atacado--distribuicao">
              <a className="solucao-industria--servico-link4">
                <SolucoesRIGHT
                  title="Atacado e Distribuição"
                  image_alt="Atacado e Distribuição"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="solucoes-right-root-class-name6"
                  className="solucao-industria--servico-component5"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a className="solucao-industria--servico-link5">
                <SolucoesLEFT
                  title="Fiscal"
                  action="VEJA MAIS"
                  image_src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1N3x8ZmluYW5jZXxlbnwwfHx8fDE2ODI0MzM2MjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  description="Sped ICMS, IPI, Pis e Cofins e Bloco K completo."
                  rootClassName="rootClassName4"
                  className="solucao-industria--servico-component6"
                ></SolucoesLEFT>
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
          .solucao-industria--servico-header {
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
          .solucao-industria--servico-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .solucao-industria--servico-burger-menu {
            display: none;
            z-index: 100;
          }
          .solucao-industria--servico-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .solucao-industria--servico-mobile-menu {
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
          .solucao-industria--servico-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-industria--servico-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .solucao-industria--servico-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solucao-industria--servico-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .solucao-industria--servico-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .solucao-industria--servico-link {
            display: contents;
          }
          .solucao-industria--servico-icon04 {
            width: 18px;
            height: 24px;
            text-decoration: none;
          }
          .solucao-industria--servico-link1 {
            display: contents;
          }
          .solucao-industria--servico-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .solucao-industria--servico-link2 {
            display: contents;
          }
          .solucao-industria--servico-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .solucao-industria--servico-hero-right {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            min-height: 80vh;
            align-items: stretch;
            flex-direction: row;
          }
          .solucao-industria--servico-image {
            width: 50%;
            height: auto;
            align-self: stretch;
            object-fit: cover;
          }
          .solucao-industria--servico-container2 {
            width: 50%;
            height: auto;
            display: flex;
            align-self: stretch;
            min-height: 80vh;
            align-items: stretch;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: 5%;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .solucao-industria--servico-text {
            font-size: 3rem;
          }
          .solucao-industria--servico-text01 {
            width: 100%;
            text-align: justify;
            line-height: 2;
          }
          .solucao-industria--servico-text02 {
            font-size: 14px;
          }
          .solucao-industria--servico-text03 {
            font-size: 14px;
          }
          .solucao-industria--servico-text04 {
            font-size: 14px;
          }
          .solucao-industria--servico-text05 {
            font-size: 14px;
          }
          .solucao-industria--servico-text06 {
            font-size: 14px;
          }
          .solucao-industria--servico-text07 {
            font-size: 14px;
          }
          .solucao-industria--servico-text08 {
            font-size: 14px;
          }
          .solucao-industria--servico-container3 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-bgpastel-begebg);
          }
          .solucao-industria--servico-text-right {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .solucao-industria--servico-text-solution {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-image1 {
            width: 100%;
            height: 200px;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: right top;
          }
          .solucao-industria--servico-container4 {
            width: 100%;
            height: 70px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .solucao-industria--servico-text10 {
            width: 100%;
            height: auto;
            align-self: center;
            text-align: center;
          }
          .solucao-industria--servico-text11 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution1 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-image2 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-container5 {
            width: 100%;
            height: 70px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .solucao-industria--servico-text12 {
            width: 100%;
            height: auto;
            align-self: center;
            text-align: center;
          }
          .solucao-industria--servico-text13 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-industria--servico-text-solution2 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-industria--servico-image3 {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-industria--servico-container6 {
            width: 100%;
            height: 70px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .solucao-industria--servico-text14 {
            width: 100%;
            height: auto;
            align-self: center;
            text-align: center;
          }
          .solucao-industria--servico-text15 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-industria--servico-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-bgpastel-bgcreme);
          }
          .solucao-industria--servico-text16 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-industria--servico-container7 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .solucao-industria--servico-link3 {
            display: contents;
          }
          .solucao-industria--servico-component4 {
            text-decoration: none;
          }
          .solucao-industria--servico-link4 {
            display: contents;
          }
          .solucao-industria--servico-component5 {
            text-decoration: none;
          }
          .solucao-industria--servico-link5 {
            display: contents;
          }
          .solucao-industria--servico-component6 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-industria--servico-icon-group {
              margin-top: var(--dl-space-space-unit);
            }
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: auto;
            }
            .solucao-industria--servico-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              display: none;
              position: absolute;
            }
            .solucao-industria--servico-container2 {
              width: 100%;
              height: auto;
              z-index: 100;
              align-self: center;
              min-height: auto;
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-industria--servico-text {
              text-align: center;
            }
            .solucao-industria--servico-text01 {
              padding: var(--dl-space-space-twounits);
              text-align: justify;
            }
            .solucao-industria--servico-image2 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-image3 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-industria--servico-text16 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-industria--servico-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-nav {
              display: none;
            }
            .solucao-industria--servico-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: 80vh;
            }
            .solucao-industria--servico-container2 {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .solucao-industria--servico-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-industria--servico-text-right {
              width: auto;
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-industria--servico-text-solution {
              width: 70%;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-text10 {
              text-align: center;
            }
            .solucao-industria--servico-text11 {
              line-height: 1.5;
            }
            .solucao-industria--servico-text-solution1 {
              width: 70%;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-image2 {
              width: 80%;
              height: 200px;
              display: flex;
              align-self: center;
              max-height: auto;
              align-items: center;
              justify-content: center;
            }
            .solucao-industria--servico-text12 {
              align-self: center;
            }
            .solucao-industria--servico-text13 {
              line-height: 1.5;
            }
            .solucao-industria--servico-text-solution2 {
              width: 70%;
              align-self: center;
              align-items: center;
            }
            .solucao-industria--servico-image3 {
              width: 80%;
              height: 200px;
              display: flex;
              align-self: center;
              max-height: auto;
              align-items: center;
              justify-content: center;
            }
            .solucao-industria--servico-text14 {
              text-align: center;
            }
            .solucao-industria--servico-text15 {
              line-height: 1.5;
            }
            .solucao-industria--servico-features {
              position: relative;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-text16 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-industria--servico-header {
              padding: var(--dl-space-space-unit);
            }
            .solucao-industria--servico-mobile-menu {
              padding: 16px;
            }
            .solucao-industria--servico-icon-group {
              align-self: flex-start;
              justify-content: center;
            }
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: 80vh;
            }
            .solucao-industria--servico-container2 {
              width: auto;
              height: auto;
            }
            .solucao-industria--servico-text-solution {
              width: 100%;
            }
            .solucao-industria--servico-text-solution1 {
              width: 100%;
            }
            .solucao-industria--servico-image2 {
              width: 100%;
            }
            .solucao-industria--servico-text-solution2 {
              width: 100%;
            }
            .solucao-industria--servico-image3 {
              width: 100%;
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
