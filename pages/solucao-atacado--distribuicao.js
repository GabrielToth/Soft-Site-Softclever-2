import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import BotesWHATSCTT from '../components/botes-whats-ctt'
import Videos from '../components/videos'
import SolucoesLEFT from '../components/solucoes-left'
import SolucoesRIGHT from '../components/solucoes-right'
import Footer from '../components/footer'

const SolucaoAtacadoEDistribuicao = (props) => {
  return (
    <>
      <div className="solucao-atacado--distribuicao-container">
        <Head>
          <title>SolucaoAtacadoEDistribuicao - Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta
            property="og:title"
            content="SolucaoAtacadoEDistribuicao - Soft Clever"
          />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="solucao-atacado--distribuicao-hero-right">
          <img
            alt="image"
            src="https://i.pinimg.com/originals/f7/05/48/f70548a9271bf9df31196e0dd267281b.png"
            loading="eager"
            className="solucao-atacado--distribuicao-image"
          />
          <LogoIcone rootClassName="logo-icone-root-class-name5"></LogoIcone>
          <div className="solucao-atacado--distribuicao-container1">
            <h1 className="solucao-atacado--distribuicao-text">
              Atacado e Distribuição
            </h1>
            <span className="solucao-atacado--distribuicao-text01">
              <span>
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
              <br></br>
              <span>
                Nosso suporte é remoto e online e atendemos em todo o território
                nacional.
              </span>
              <br></br>
              <span>
                O Sírius ERP Atende completamente a Legislação Fiscal exigida
                pela SEFAZ e centenas de contabilidades nos indicam. Na Soft
                Clever você pode confiar.
              </span>
              <br></br>
              <span>Conheça parte dos recursos disponíveis;</span>
            </span>
            <BotesWHATSCTT></BotesWHATSCTT>
          </div>
        </div>
        <Videos></Videos>
        <div className="solucao-atacado--distribuicao-container2">
          <div className="solucao-atacado--distribuicao-container3">
            <div className="solucao-atacado--distribuicao-text-left">
              <div className="solucao-atacado--distribuicao-text-solution">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image01"
                />
                <h1 className="solucao-atacado--distribuicao-text09">
                  Pedidos de Vendas
                </h1>
                <span className="solucao-atacado--distribuicao-text10">
                  Integrado com o estoque e financeiro. Emissão de pedidos de
                  vendas de maneira expressa ou detalhada. Diversas opções de
                  filtros e relatórios e finalização de vendas parciais ou
                  totais através da emissão de NF-e ou NFS-e. Geração de
                  orçamentos e transferências, controle de entregas parciais com
                  elaboração de romaneio de carga, geração de ordem de produção,
                  múltiplos status, troca e devolução com geração de crédito ao
                  cliente, reserva de produtos, controle de movimentações
                  financeiras dos clientes, liberação e expedição de pedidos,
                  impressão de recibo de entrega, etiquetas e pedidos e muito
                  mais.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image02"
                />
                <h1 className="solucao-atacado--distribuicao-text11">
                  Financeiro
                </h1>
                <span className="solucao-atacado--distribuicao-text12">
                  Integrado com as compras e vendas. Controle detalhado das
                  contas a pagar e a receber. Diversas opções de filtros e
                  relatórios. Opções de controle de contas contábeis, centro de
                  custos e departamento. Controle de conciliação bancárias. Gera
                  boleto bancário com controle de remessa e retorno junto ao
                  banco. Integração de pagamentos bancários através do SISPAG.
                  Permite lançamento de despesas avulsas e de contas estimadas
                  e/ou reais. Vínculo com conta corrente e cheques. Permite
                  projeção de novas despesas, registro de pagamentos
                  individuais, tudo individualmente ou através de filtro,
                  Controle de fluxo de caixa, previsões e metas orçamentárias,
                  controle de saldo bancários com transferência em contas
                  correntes e muito mais.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1642543348781-ed9c6d67ed20?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxidXl8ZW58MHx8fHwxNjgxNDEzNDAx&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image03"
                />
                <h1 className="solucao-atacado--distribuicao-text13">
                  Compras
                </h1>
                <span className="solucao-atacado--distribuicao-text14">
                  Totalmente integrado com o estoque e financeiro. Permite ao
                  usuário gerar pedidos de compras para serviços ou produtos.
                  Também é possível importar arquivos XMLs enviado pelos
                  fornecedores. Impressão de diversos modelos de pedidos de
                  compra e diversas opções de filtros e relatórios.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxyZWdpc3RlcnxlbnwwfHx8fDE2ODE0MTM3ODk&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image04"
                />
                <h1 className="solucao-atacado--distribuicao-text15">
                  Cadastros
                </h1>
                <span className="solucao-atacado--distribuicao-text16">
                  Controle completo dos cadastros de Clientes, Fornecedores,
                  Produtos, Transportadores e Vendedores. Relatórios com dados
                  dos cadastros que podem ser gerados a partir do filtro
                  escolhido. Diversas opções de rotinas que facilitam os
                  controles e cadastros.
                </span>
              </div>
            </div>
            <div className="solucao-atacado--distribuicao-images">
              <img
                alt="image"
                src="/playground_assets/mulher-com-tablet-trabalhando-perto-das-prateleiras-do-armazem-com-carga-2-500w.jpg"
                loading="lazy"
                className="solucao-atacado--distribuicao-image05"
              />
            </div>
            <div className="solucao-atacado--distribuicao-text-right">
              <div className="solucao-atacado--distribuicao-text-solution4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1654263736203-a289f57c0d82?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image06"
                />
                <h1 className="solucao-atacado--distribuicao-text17">
                  Nota Fiscal de Produtos
                </h1>
                <span className="solucao-atacado--distribuicao-text18">
                  Totalmente integrado com o estoque e financeiro, Nota Fiscal
                  Eletrônica (NF-e) com envio e autorização junto a Secretaria
                  da Fazenda SEFAZ. Rotinas de cancelamento e inutilização por
                  faixa numérica, carta de correção, envio automático de e-mail
                  com XML e PDF para o cliente, configurações de diversos tipos
                  de operações com cálculo automático de impostos,
                  pré-visualização e impressão do DANFE e opções de relatórios
                  fiscais.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution5">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image07"
                />
                <h1 className="solucao-atacado--distribuicao-text19">
                  Relatórios Gerenciais
                </h1>
                <span className="solucao-atacado--distribuicao-text20">
                  Essenciais para o controle completo e gestão financeira da
                  empresa. Permite ao usuário diversas opções de filtros e
                  relatórios com totais de vendas detalhado por período,
                  movimentações de vendas e saídas, movimentações do caixa com
                  opções de resumo por forma e condição de pagamento, Curva ABC
                  de Clientes, Produtos e Vendedores e Fornecedores e mapas de
                  vendas.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution6">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1654263937085-48fb17a63d66?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image08"
                />
                <h1 className="solucao-atacado--distribuicao-text21">
                  Nota Fiscal de Serviços
                </h1>
                <span className="solucao-atacado--distribuicao-text22">
                  Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e
                  em lote para o sistema da prefeitura. Gerada a partir do
                  pedido de venda e integrada com o financeiro. Envio automático
                  de PDF por e-mail.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution7">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image09"
                />
                <h1 className="solucao-atacado--distribuicao-text23">
                  Orçamentos
                </h1>
                <span className="solucao-atacado--distribuicao-text24">
                  Digitação e controle completo dos orçamentos. Permite ao
                  usuário envio parcial dos produtos para os pedidos de vendas.
                  Controle de saldos, curva ABC de orçamentos, opções de
                  relatórios comparativos (Orçado x Faturado x Saldo), status
                  Pendente e Realizado, Follow-Up e impressão de orçamentos.
                </span>
              </div>
              <div className="solucao-atacado--distribuicao-text-solution8">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGV4Y2VsfGVufDB8fHx8MTY4MTQxMzk1NA&amp;ixlib=rb-4.0.3&amp;w=1400"
                  loading="lazy"
                  className="solucao-atacado--distribuicao-image10"
                />
                <h1 className="solucao-atacado--distribuicao-text25">
                  Tabelas Auxiliares
                </h1>
                <span className="solucao-atacado--distribuicao-text26">
                  Essenciais para a melhor funcionalidade de cada módulo,
                  permitem ao usuário cadastros auxiliares para emissão de Nota
                  Fiscais, cadastro de produtos clientes e fornecedores,
                  controle financeiro, produção e caixa, além de rotinas para a
                  sincronização dos cadastros caso a empresa tenha mais de um
                  banco de dados
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="solucao-atacado--distribuicao-features">
          <h1 className="solucao-atacado--distribuicao-text27">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <nav className="solucao-atacado--distribuicao-container4">
            <Link href="/solucao-varejo">
              <a className="solucao-atacado--distribuicao-link">
                <SolucoesLEFT
                  title="Varejo"
                  action="VEJA MAIS"
                  description="Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF."
                  rootClassName="rootClassName8"
                  className="solucao-atacado--distribuicao-component2"
                ></SolucoesLEFT>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a className="solucao-atacado--distribuicao-link1">
                <SolucoesRIGHT
                  title="Indústria e Serviço"
                  image_alt="Fiscal"
                  image_src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTMxOTI5MA&amp;ixlib=rb-4.0.3&amp;w=400"
                  description="Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica."
                  rootClassName="solucoes-right-root-class-name5"
                  className="solucao-atacado--distribuicao-component3"
                ></SolucoesRIGHT>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a className="solucao-atacado--distribuicao-link2">
                <SolucoesLEFT
                  title="Fiscal"
                  action="VEJA MAIS"
                  image_src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1N3x8ZmluYW5jZXxlbnwwfHx8fDE2ODI0MzM2MjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  description="Sped ICMS, IPI, Pis e Cofins e Bloco K completo."
                  rootClassName="rootClassName3"
                  className="solucao-atacado--distribuicao-component4"
                ></SolucoesLEFT>
              </a>
            </Link>
          </nav>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .solucao-atacado--distribuicao-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solucao-atacado--distribuicao-hero-right {
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .solucao-atacado--distribuicao-image {
            width: 35%;
            height: auto;
            align-self: flex-end;
            object-fit: cover;
          }
          .solucao-atacado--distribuicao-container1 {
            width: 50%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .solucao-atacado--distribuicao-text {
            font-size: 3rem;
          }
          .solucao-atacado--distribuicao-text01 {
            width: 100%;
            margin-top: var(--dl-space-space-twounits);
            text-align: justify;
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .solucao-atacado--distribuicao-container2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-bgpastel-begebg);
          }
          .solucao-atacado--distribuicao-container3 {
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: stretch;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-text-left {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            align-self: stretch;
            max-height: 100%;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-text-solution {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image01 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text09 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text10 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image02 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text11 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text12 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution2 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image03 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text13 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text14 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution3 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image04 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text15 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text16 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-images {
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
          .solucao-atacado--distribuicao-image05 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-atacado--distribuicao-text-right {
            flex: 0 0 auto;
            width: 30%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-text-solution4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image06 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucao-atacado--distribuicao-text17 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text18 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image07 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text19 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text20 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution6 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image08 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text21 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text22 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution7 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image09 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text23 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text24 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-text-solution8 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .solucao-atacado--distribuicao-image10 {
            width: 100%;
            height: 175px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            border-radius: 16px;
            object-position: 0 -170px;
          }
          .solucao-atacado--distribuicao-text25 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucao-atacado--distribuicao-text26 {
            width: 100%;
            text-align: justify;
            line-height: 1.5;
          }
          .solucao-atacado--distribuicao-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-bgpastel-bgcreme);
          }
          .solucao-atacado--distribuicao-text27 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .solucao-atacado--distribuicao-container4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .solucao-atacado--distribuicao-link {
            display: contents;
          }
          .solucao-atacado--distribuicao-component2 {
            text-decoration: none;
          }
          .solucao-atacado--distribuicao-link1 {
            display: contents;
          }
          .solucao-atacado--distribuicao-component3 {
            text-decoration: none;
          }
          .solucao-atacado--distribuicao-link2 {
            display: contents;
          }
          .solucao-atacado--distribuicao-component4 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .solucao-atacado--distribuicao-hero-right {
              align-items: stretch;
              justify-content: space-between;
            }
            .solucao-atacado--distribuicao-image {
              width: 30%;
              align-self: flex-end;
            }
            .solucao-atacado--distribuicao-container1 {
              width: 70%;
              height: auto;
              z-index: 100;
              align-self: stretch;
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .solucao-atacado--distribuicao-text {
              text-align: center;
            }
            .solucao-atacado--distribuicao-text01 {
              align-self: flex-start;
              margin-top: var(--dl-space-space-fourunits);
              text-align: left;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .solucao-atacado--distribuicao-text-left {
              width: 50%;
              padding: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image01 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image02 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image03 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image04 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-images {
              width: 30%;
              height: auto;
              display: none;
              min-width: auto;
              align-self: stretch;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .solucao-atacado--distribuicao-text-right {
              width: 50%;
              padding: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image06 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image07 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image08 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image09 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-image10 {
              height: fit-content;
              max-height: 175px;
              object-position: center;
            }
            .solucao-atacado--distribuicao-text27 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .solucao-atacado--distribuicao-image {
              display: none;
            }
            .solucao-atacado--distribuicao-container1 {
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .solucao-atacado--distribuicao-text01 {
              text-align: justify;
            }
            .solucao-atacado--distribuicao-container3 {
              flex-direction: column;
            }
            .solucao-atacado--distribuicao-text-left {
              width: 100%;
            }
            .solucao-atacado--distribuicao-text-solution {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image01 {
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
            .solucao-atacado--distribuicao-text09 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text-solution1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image02 {
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
            .solucao-atacado--distribuicao-text11 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text-solution2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image03 {
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
            .solucao-atacado--distribuicao-text13 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text14 {
              line-height: 1.5;
            }
            .solucao-atacado--distribuicao-text-solution3 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image04 {
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
            .solucao-atacado--distribuicao-text15 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-images {
              display: none;
            }
            .solucao-atacado--distribuicao-text-right {
              width: 100%;
            }
            .solucao-atacado--distribuicao-text-solution4 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image06 {
              width: 70%;
              height: 200px;
              display: flex;
              align-self: center;
              margin-top: 0px;
              max-height: auto;
              align-items: flex-start;
              margin-bottom: 0px;
              justify-content: flex-start;
              object-position: 0 -150px;
            }
            .solucao-atacado--distribuicao-text17 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text-solution5 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image07 {
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
            .solucao-atacado--distribuicao-text19 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text20 {
              line-height: 1.5;
            }
            .solucao-atacado--distribuicao-text-solution6 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image08 {
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
            .solucao-atacado--distribuicao-text21 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-text22 {
              line-height: 1.5;
            }
            .solucao-atacado--distribuicao-text-solution7 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image09 {
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
            .solucao-atacado--distribuicao-text23 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-image10 {
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
            .solucao-atacado--distribuicao-text25 {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
            }
            .solucao-atacado--distribuicao-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-text27 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .solucao-atacado--distribuicao-text01 {
              margin-top: var(--dl-space-space-twounits);
              text-align: justify;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .solucao-atacado--distribuicao-image01 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image02 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image03 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image04 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image06 {
              width: 70%;
              object-position: 0 -50px;
            }
            .solucao-atacado--distribuicao-image07 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image08 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image09 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-image10 {
              width: 70%;
            }
            .solucao-atacado--distribuicao-features {
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

export default SolucaoAtacadoEDistribuicao
