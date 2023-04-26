import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import BotesWHATSCTT from '../components/botes-whats-ctt'
import Videos from '../components/videos'
import SolucoesLEFT from '../components/solucoes-left'
import SolucoesRIGHT from '../components/solucoes-right'
import Footer from '../components/footer'

const SolucaoFiscal = (props) => {
  return (
    <>
      <div className="solucao-fiscal-container">
        <Head>
          <title>SolucaoFiscal - Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta property="og:title" content="SolucaoFiscal - Soft Clever" />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="solucao-fiscal-hero-right">
          <img
            alt="image"
            src="/playground_assets/solucoes-fiscais-11-1500h.jpg"
            loading="eager"
            className="solucao-fiscal-image"
          />
          <LogoIcone rootClassName="logo-icone-root-class-name7"></LogoIcone>
          <div className="solucao-fiscal-container1">
            <h1 className="solucao-fiscal-heading">
              <span className="solucao-fiscal-text">Fiscal</span>
              <br></br>
            </h1>
            <span className="solucao-fiscal-text02">
              <span>
                Sistema completo, simples e prático para emissão de qualquer
                tipo de documentos fiscais, tais como; Nota Fiscal Eletrônica
                (NF-e), Conhecimento de Transporte Eletrônico (CT-e) e
                Manifestação de Documentos Fiscais (MDF-e). Atuando em todos os
                estados, disponibilizamos as melhores funcionalidades para
                atender a qualquer tipo de empresa, seja comércio, distribuição,
                atacado e indústria. Atende a qualquer segmento do mercado e
                empresas de micro, pequeno e médio porte.
              </span>
              <br></br>
              <span>
                Sistema homologado na Secretaria da Fazenda, atende
                completamente a toda Legislação Fiscal exigida pela SEFAZ de
                forma eficaz e totalmente simplificada.
              </span>
              <br></br>
              <span>
                Oferecemos planos mensais ou anuais com descontos. Temos um
                pacote que cabe no seu bolso.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
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
                As soluções fiscais da Soft Clever são indicadas por centenas de
                contabilidades.
              </span>
              <br></br>
              <span>
                São mais de 12.000 usuários atendidos desde 1994. Na Soft Clever
                você pode confiar.
              </span>
              <br></br>
              <span>Abaixo, nossas soluções.</span>
            </span>
            <BotesWHATSCTT></BotesWHATSCTT>
          </div>
        </div>
        <Videos></Videos>
        <div className="solucao-fiscal-container2">
          <div className="solucao-fiscal-container3">
            <div className="solucao-fiscal-text-left">
              <div className="solucao-fiscal-text-solution">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&amp;ixlib=rb-4.0.3&amp;h=1500"
                  loading="lazy"
                  className="solucao-fiscal-image1"
                />
                <h1 className="solucao-fiscal-text18">Sírius NF-e</h1>
                <span className="solucao-fiscal-text19">
                  <span>
                    Emissão de Nota Fiscal Eletrônica (NF-e) com envio e
                    autorização junto a SEFAZ. Rotinas de cancelamento e
                    inutilização por faixa numérica, carta de correção, envio
                    automático de e-mail com XML e PDF. Configurações de
                    diversos tipos de operações com cálculo automático de
                    impostos. Pré-visualização e impressão do DANFE e opções de
                    relatórios fiscais. E mais;
                  </span>
                  <br></br>
                  <br></br>
                  <span>Geração de NFE a partir do pedido</span>
                  <br></br>
                  <span>Digitação expressa de nfe de saída ou entrada</span>
                  <br></br>
                  <span>
                    Cálculos de impostos, inclusive de substituição tributária
                  </span>
                  <br></br>
                  <span>Cálculos de peso e volume</span>
                  <br></br>
                  <span>Geração e envio de arquivo XML</span>
                  <br></br>
                  <span>Visualização da pré-danfe</span>
                  <br></br>
                  <span>
                    Geração de notas de importação, exportação e de nota
                    complementar
                  </span>
                  <br></br>
                  <span>
                    Baixa automática do estoque e envio dos títulos ao
                    Financeiro
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="solucao-fiscal-text-solution1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&amp;ixlib=rb-4.0.3&amp;h=1500"
                  loading="lazy"
                  className="solucao-fiscal-image2"
                />
                <h1 className="solucao-fiscal-text39">Sírius CT-e</h1>
                <span className="solucao-fiscal-text40">
                  Emissão de Conhecimento de Transporte Eletrônico (CT-e) com
                  envio e autorização junto a SEFAZ. Diversos processos
                  automatizados. Filtros e relatórios gerenciais. Cadastros de
                  emitente, remetente, consignatário, redespacho, tomador,
                  expedidor, recebedor e destinatário. Pré-visualização e
                  impressão do Conhecimento de Transporte.
                </span>
              </div>
              <div className="solucao-fiscal-text-solution2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxmaW5hbmNlfGVufDB8fHx8MTY4MTM5OTUyMQ&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-fiscal-image3"
                />
                <h1 className="solucao-fiscal-text41">Sírius MDF-e</h1>
                <span className="solucao-fiscal-text42">
                  Emissão de Manifestação de Documentos Fiscais com a finalidade
                  de atender empresas prestadoras de serviço cujo transporte
                  seja realizado em veículos próprios, arrendados, ou mediante a
                  contratação de transportador autônomo de cargas, com mais de
                  uma NF-e ou CT-e. A finalidade do MDF-e é agilizar o registro
                  em lote de documentos fiscais em trânsito e identificar a
                  unidade de carga utilizada e demais características do
                  transporte.
                </span>
              </div>
            </div>
            <div className="solucao-fiscal-images">
              <img
                alt="image"
                src="/playground_assets/fiscal-1-500w.jpg"
                loading="lazy"
                className="solucao-fiscal-image4"
              />
            </div>
            <div className="solucao-fiscal-text-right">
              <div className="solucao-fiscal-text-solution3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-fiscal-image5"
                />
                <h1 className="solucao-fiscal-text43">
                  Sírius Sped Fiscal e Bloco K
                </h1>
                <span className="solucao-fiscal-text44">
                  <span>
                    O Sirius Sped Fiscal e Bloco K pode ser utilizado
                    separadamente ou de forma integrada ao seu sistema. Além
                    disso, também é possível integrar essa poderosa ferramenta
                    fiscal ao Sírius ERP (o melhor custo benefício do mercado
                    quando o assunto é sistema de gestão empresarial).
                  </span>
                  <br></br>
                  <span>Veja alguns recursos;</span>
                  <br></br>
                  <br></br>
                  <span>
                    • Sped Fiscal - Totalmente integrado com compras e vendas.
                    Cálculo de impostos de entrada e saída. Captura do arquivo
                    XML. Atribuição automática das CFOP´S de entrada e das CST´S
                    de ICMS, IPI, PIS E COFINS. Geração mensal do arquivo Sped
                    para envio a SEFAZ e contabilidade. Geração de livro fiscal
                    para conferência com livro da contabilidade. Permite
                    conversão das unidades de medidas (compra x venda) e rateio
                    de impostos. Pode ser contratado separadamente de nosso ERP
                    e integrado ao seu sistema. Você não precisa substituir
                    todos os sistemas de sua empresa.
                  </span>
                  <br className="solucao-fiscal-text51"></br>
                  <br></br>
                  <span>
                    • Bloco K - Totalmente integrado com as compras, estoque e
                    produção. O Bloco K atua como um componente do Sped Fiscal
                    para controle detalhado dos saldos de entrada e saída de
                    produtos e insumos. Geração mensal do arquivo Bloco K 200
                    e/ou 280 para envio a SEFAZ e para a contabilidade com
                    movimentações das compras, vendas e produção. Também
                    controla os insumos. Controla estoque próprio e estoque em
                    poder de terceiros. Pode ser contratado separadamente de
                    nosso ERP e integrado ao seu sistema. Você não precisa
                    substituir todos os sistemas de sua empresa.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Módulos Auxiliares - Os módulos auxiliares ao Sped Fiscal
                    e Bloco K são: Vendas, Compras e Produção. Estes módulos são
                    fundamentais para geração dos arquivos. Os módulos contam
                    com rotinas automáticas que minimizam processos manuais e
                    possíveis erros que interferem no resultado final.
                  </span>
                  <br className="solucao-fiscal-text57"></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="solucao-fiscal-features">
          <h1 className="solucao-fiscal-text58">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="solucao-fiscal-container4">
            <Link href="/solucao-varejo">
              <a>
                <SolucoesLEFT
                  title="Varejo"
                  action="VEJA MAIS"
                  description="Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF."
                  rootClassName="rootClassName9"
                  className="solucao-fiscal-component2"
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
                  rootClassName="solucoes-right-root-class-name4"
                  className="solucao-fiscal-component3"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a>
                <SolucoesLEFT
                  title="Indústria e Serviço"
                  action="VEJA MAIS"
                  image_src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTMxOTI5MA&amp;ixlib=rb-4.0.3&amp;w=400"
                  description="Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF."
                  rootClassName="rootClassName7"
                  className="solucao-fiscal-component4"
                ></SolucoesLEFT>
              </a>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .solucao-fiscal-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solucao-fiscal-hero-right {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .solucao-fiscal-image {
            width: 50%;
            height: auto;
            align-self: stretch;
            object-fit: cover;
          }
          .solucao-fiscal-container1 {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: 5%;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .solucao-fiscal-heading {
            font-size: 3rem;
          }
          .solucao-fiscal-text02 {
            width: 100%;
            text-align: justify;
            line-height: 2;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .solucao-fiscal-container2 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-bgpastel-begebg);
          }
          .solucao-fiscal-container3 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            justify-content: space-between;
          }
          .solucao-fiscal-text-left {
            flex: 0 0 auto;
            width: 30%;
            height: 95%;
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-fiscal-text-solution {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .solucao-fiscal-image1 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-fiscal-text18 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-fiscal-text19 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-fiscal-text-solution1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .solucao-fiscal-image2 {
            width: 100%;
            height: 311.11px;
            display: none;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-fiscal-text39 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-fiscal-text40 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-fiscal-text-solution2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-fiscal-image3 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-fiscal-text41 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-fiscal-text42 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-fiscal-images {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-fiscal-image4 {
            width: 100%;
            height: 100%;
            align-self: center;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-fiscal-text-right {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-fiscal-text-solution3 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-fiscal-image5 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-fiscal-text43 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-fiscal-text44 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-fiscal-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-bgpastel-bgcreme);
          }
          .solucao-fiscal-text58 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-fiscal-container4 {
            width: 100%;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
          }
          .solucao-fiscal-component2 {
            text-decoration: none;
          }
          .solucao-fiscal-component3 {
            text-decoration: none;
          }
          .solucao-fiscal-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-fiscal-hero-right {
              min-height: 0px;
            }
            .solucao-fiscal-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              margin: auto;
              display: none;
              position: absolute;
            }
            .solucao-fiscal-container1 {
              width: 100%;
              height: 100%;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: flex-start;
            }
            .solucao-fiscal-heading {
              text-align: center;
            }
            .solucao-fiscal-text {
              text-align: center;
            }
            .solucao-fiscal-text02 {
              color: #000000;
              margin-top: var(--dl-space-space-twounits);
              text-align: justify;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
              background-color: rgba(255, 255, 255, 0.3);
            }
            .solucao-fiscal-container2 {
              height: fit-content;
            }
            .solucao-fiscal-container3 {
              justify-content: space-between;
            }
            .solucao-fiscal-text-left {
              width: 30%;
              height: auto;
              justify-content: flex-start;
            }
            .solucao-fiscal-image1 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-fiscal-image2 {
              width: 100%;
              height: 175px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .solucao-fiscal-image3 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-fiscal-image5 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-fiscal-text44 {
              line-height: 1.5;
            }
            .solucao-fiscal-text51 {
              line-height: 1.5;
            }
            .solucao-fiscal-text57 {
              line-height: 1.5;
            }
            .solucao-fiscal-text58 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-fiscal-hero-right {
              min-height: 0px;
            }
            .solucao-fiscal-container1 {
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-fiscal-container2 {
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-fiscal-container3 {
              align-self: center;
              align-items: flex-start;
              margin-right: 0px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucao-fiscal-text-left {
              width: 100%;
              height: auto;
              align-self: center;
              margin-top: 0px;
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              justify-content: center;
            }
            .solucao-fiscal-text-solution {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-fiscal-image1 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              justify-content: center;
            }
            .solucao-fiscal-text18 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-fiscal-text-solution1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-fiscal-image2 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              justify-content: center;
            }
            .solucao-fiscal-text39 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-fiscal-text-solution2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-fiscal-image3 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              max-height: auto;
              align-items: center;
              justify-content: center;
            }
            .solucao-fiscal-text41 {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-fiscal-images {
              display: none;
            }
            .solucao-fiscal-text-right {
              width: 100%;
              margin-top: 0px;
              align-items: stretch;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .solucao-fiscal-image5 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              max-height: auto;
              align-items: center;
              justify-content: center;
            }
            .solucao-fiscal-text43 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-fiscal-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-fiscal-text58 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-fiscal-hero-right {
              height: auto;
              min-height: auto;
            }
            .solucao-fiscal-container1 {
              width: 100%;
              align-self: flex-start;
            }
            .solucao-fiscal-container3 {
              padding: 0px;
            }
            .solucao-fiscal-image1 {
              width: 100%;
            }
            .solucao-fiscal-image2 {
              width: 100%;
            }
            .solucao-fiscal-image3 {
              width: 100%;
            }
            .solucao-fiscal-image5 {
              width: 100%;
            }
            .solucao-fiscal-features {
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

export default SolucaoFiscal
