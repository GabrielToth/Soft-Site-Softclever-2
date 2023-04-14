import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
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
        <div className="solucao-industria--servico-container2">
          <div className="solucao-industria--servico-text-right">
            <div className="solucao-industria--servico-text-solution">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTMxOTI5MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                loading="lazy"
                className="solucao-industria--servico-image1"
              />
              <div className="solucao-industria--servico-container3">
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxmaW5hbmNlfGVufDB8fHx8MTY4MTM5OTUyMQ&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="solucao-industria--servico-image2"
              />
              <div className="solucao-industria--servico-container4">
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
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTQ4NzQ0MQ&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="solucao-industria--servico-image3"
              />
              <div className="solucao-industria--servico-container5">
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
          <div className="solucao-industria--servico-container6">
            <Link href="/solucao-varejo">
              <a>
                <SolucoesLEFT
                  title="Varejo"
                  action="VEJA MAIS"
                  description="Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF."
                  rootClassName="rootClassName10"
                  className="solucao-industria--servico-component2"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-atacado--distribuicao">
              <a>
                <SolucoesRIGHT
                  title="Atacado e Distribuição"
                  image_alt="Atacado e Distribuição"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="solucoes-right-root-class-name6"
                  className="solucao-industria--servico-component3"
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
                  rootClassName="rootClassName4"
                  className="solucao-industria--servico-component4"
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
          .solucao-industria--servico-hero-right {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
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
          .solucao-industria--servico-container1 {
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
            margin-top: var(--dl-space-space-twounits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
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
          .solucao-industria--servico-container2 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-eeeeee);
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
          }
          .solucao-industria--servico-container3 {
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
          .solucao-industria--servico-text12 {
            width: 100%;
            height: auto;
            align-self: center;
            text-align: center;
          }
          .solucao-industria--servico-text13 {
            width: 100%;
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
          .solucao-industria--servico-text14 {
            width: 100%;
            height: auto;
            align-self: center;
            text-align: center;
          }
          .solucao-industria--servico-text15 {
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
          .solucao-industria--servico-text16 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-industria--servico-container6 {
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
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: 80vh;
            }
            .solucao-industria--servico-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              position: absolute;
            }
            .solucao-industria--servico-container1 {
              width: 100%;
              height: auto;
              z-index: 100;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
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
            .solucao-industria--servico-image1 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
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
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: 80vh;
            }
            .solucao-industria--servico-container1 {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .solucao-industria--servico-container2 {
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
            .solucao-industria--servico-image1 {
              width: 80%;
              height: 200px;
              display: flex;
              align-self: center;
              max-height: auto;
              align-items: center;
              justify-content: center;
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
              text-align: center;
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
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-industria--servico-text16 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-industria--servico-hero-right {
              height: auto;
              min-height: 80vh;
            }
            .solucao-industria--servico-container1 {
              width: auto;
              height: auto;
            }
            .solucao-industria--servico-text-solution {
              width: 100%;
            }
            .solucao-industria--servico-image1 {
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
