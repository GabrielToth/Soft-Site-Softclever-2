import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import HeroRight from '../components/hero-right'
import Videos from '../components/videos'
import SolucoesRIGHT from '../components/solucoes-right'
import SolucoesLEFT from '../components/solucoes-left'
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
            content="A solução para a gestão empresarial do seu negócio."
          />
        </Head>
        <HeroRight></HeroRight>
        <Videos></Videos>
        <div className="solucao-varejo-container1">
          <div className="solucao-varejo-text-left">
            <div className="solucao-varejo-text-solution">
              <h1 className="solucao-varejo-text">Sírius S@T Fiscal / NFC-e</h1>
              <span className="solucao-varejo-text01">
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
            <div className="solucao-varejo-text-solution01">
              <h1 className="solucao-varejo-text15">Sírius Nf-e</h1>
              <span className="solucao-varejo-text16">
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
            <div className="solucao-varejo-text-solution02">
              <h1 className="solucao-varejo-text40">
                Sírius S@T Safira – Para todo o comércio varejista
              </h1>
              <span className="solucao-varejo-text41">
                <span>· Possui todos os recursos do Sírius S@T Fiscal</span>
                <br></br>
                <span>· Módulo Financeiro a pagar</span>
                <br></br>
                <span>· Módulo Financeiro a receber</span>
                <br></br>
                <span>· Pedidos de compras</span>
              </span>
            </div>
            <div className="solucao-varejo-text-solution03">
              <h1 className="solucao-varejo-text49">Sírius Óticas</h1>
              <span className="solucao-varejo-text50">
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
              src="https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&amp;ixlib=rb-4.0.3&amp;w=500"
              loading="lazy"
              className="solucao-varejo-image"
            />
            <div className="solucao-varejo-left-images">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;h=1500"
                loading="lazy"
                className="solucao-varejo-image1"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-varejo-image2"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1443934732608-9de53a872e32?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG9wdGljfGVufDB8fHx8MTY4MTMxMzg5NA&amp;ixlib=rb-4.0.3&amp;w=500"
                className="solucao-varejo-image3"
              />
            </div>
            <div className="solucao-varejo-right-images">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHJlc3RhdXJhbnQlMjBiaWxsfGVufDB8fHx8MTY4MTMxMzM0MQ&amp;ixlib=rb-4.0.3&amp;w=500"
                className="solucao-varejo-image4"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1618007625018-51cbd56c0520?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMzfHxkZWxpdmVyeXxlbnwwfHx8fDE2ODEzMTMzNTY&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-varejo-image5"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1638981367648-d4909c40ab16?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxwaXp6ZXJpYXxlbnwwfHx8fDE2ODEzMTM2MTc&amp;ixlib=rb-4.0.3&amp;h=1500"
                className="solucao-varejo-image6"
              />
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHBldCUyMHNob3B8ZW58MHx8fHwxNjgxMzE0MzYx&amp;ixlib=rb-4.0.3&amp;w=500"
              className="solucao-varejo-image7"
            />
          </div>
          <div className="solucao-varejo-text-right">
            <div className="solucao-varejo-text-solution04">
              <h1 className="solucao-varejo-text51">
                Sírius Pré Venda / Balcão – Lojas em geral
              </h1>
              <span className="solucao-varejo-text52">
                Geração de orçamento, pedido de venda, baixa de estoque e afins.
                Ideal para o lojista que emite pedidos de venda e possui mais de
                um ponto de venda na loja. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-varejo-text-solution05">
              <h1 className="solucao-varejo-text53">
                Sírius Comanda / Mesas – Alimentação em Geral
              </h1>
              <span className="solucao-varejo-text54">
                Geração de orçamento, pedido de venda, baixa de estoque e afins.
                Ideal para o lojista que emite pedidos de venda e possui mais de
                um ponto de venda na loja. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-varejo-text-solution06">
              <h1 className="solucao-varejo-text55">
                Sírius Delivery – Alimentação em Geral
              </h1>
              <span className="solucao-varejo-text56">
                Controle das entregas para comércio em geral. Gera o cupom
                fiscal de forma automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-varejo-text-solution07">
              <h1 className="solucao-varejo-text57">Sírius Pizzarias</h1>
              <span className="solucao-varejo-text58">
                Recursos voltados exclusivamente as pizzarias como; promoção de
                vendas, fracionamento da pizza (2 ou mais sabores), observações
                enviadas a cozinha em relação a montagem da pizza e muito mias.
                Gera o cupom fiscal de forma automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-varejo-text-solution08">
              <h1 className="solucao-varejo-text59">Sírius iFood</h1>
              <span className="solucao-varejo-text60">
                Captura os pedidos do iFood, monta o pedido de venda e executa o
                despacho de forma rápida e fácil. Gera o cupom fiscal de forma
                automatizada através do Sírius SAT.
              </span>
            </div>
            <div className="solucao-varejo-text-solution09">
              <h1 className="solucao-varejo-text61">Sírius Pet Shop</h1>
              <span className="solucao-varejo-text62">
                Controle de raça, tipo de pelagem, tutor, vacinação,
                agendamentos, atendimentos e muito mais. Gera o cupom fiscal de
                forma automatizada através do Sírius SAT.
              </span>
            </div>
          </div>
        </div>
        <div className="solucao-varejo-features">
          <h1 className="solucao-varejo-text63">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="solucao-varejo-container2">
            <Link href="/solucao-atacado--distribuicao">
              <a>
                <SolucoesRIGHT
                  title="Atacado e Distribuição"
                  image_alt="Atacado e Distribuição"
                  image_src="/playground_assets/atacado-e-distribuicao-200h.webp"
                  description="NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais."
                  rootClassName="solucoes-right-root-class-name4"
                  className="solucao-varejo-component2"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a>
                <SolucoesLEFT
                  title="Indústria e Serviço"
                  action="VEJA MAIS"
                  image_src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTIyNDgxNw&amp;ixlib=rb-4.0.3&amp;h=200"
                  description="Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica."
                  rootClassName="rootClassName1"
                  className="solucao-varejo-component3"
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
                  rootClassName="solucoes-right-root-class-name5"
                  className="solucao-varejo-component4"
                ></SolucoesRIGHT>
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
          .solucao-varejo-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .solucao-varejo-text-left {
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
          .solucao-varejo-text-solution {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text01 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text15 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text16 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text40 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text41 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text49 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text50 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-images {
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
          .solucao-varejo-image {
            width: 100%;
            height: 175px;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-varejo-left-images {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .solucao-varejo-image1 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-image2 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: -060px;
          }
          .solucao-varejo-image3 {
            width: 177px;
            height: 177px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-right-images {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solucao-varejo-image4 {
            width: 177px;
            height: 177px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-image5 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-image6 {
            width: 177px;
            height: 311.11px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-varejo-image7 {
            width: 100%;
            height: 175px;
            min-width: 370px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -300px;
          }
          .solucao-varejo-text-right {
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
          .solucao-varejo-text-solution04 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text51 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text52 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution05 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text53 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text54 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution06 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text55 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text56 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution07 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text57 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text58 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution08 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text59 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text60 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-text-solution09 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-varejo-text61 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-varejo-text62 {
            width: 100%;
            line-height: 1.5;
          }
          .solucao-varejo-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .solucao-varejo-text63 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-varejo-container2 {
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
            .solucao-varejo-images {
              width: 30%;
              height: 1719px;
              min-width: 0px;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .solucao-varejo-image {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-varejo-left-images {
              width: 100%;
              height: 37, 5%;
              align-items: center;
              justify-content: space-between;
            }
            .solucao-varejo-image1 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image2 {
              width: 100%;
              height: 170px;
              margin-top: 0px;
              margin-bottom: 0px;
              object-position: 0;
            }
            .solucao-varejo-image3 {
              width: 100%;
              height: 170px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-varejo-right-images {
              width: 100%;
              height: 37, 5%;
              align-self: flex-start;
              align-items: center;
              justify-content: space-between;
            }
            .solucao-varejo-image4 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image5 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image6 {
              width: 100%;
              height: 170px;
              margin-bottom: 0px;
            }
            .solucao-varejo-image7 {
              width: 100%;
              height: 175px;
              min-width: 0px;
              object-fit: cover;
              object-position: center;
            }
            .solucao-varejo-text63 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-varejo-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-varejo-text63 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
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
