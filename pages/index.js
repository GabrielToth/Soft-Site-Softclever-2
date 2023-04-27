import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import LogoIcone from '../components/logo-icone'
import NavigationLinks2 from '../components/navigation-links2'
import BotesWHATSCTT from '../components/botes-whats-ctt'
import Videos from '../components/videos'
import CategoriaSolucaoVarejo from '../components/categoria-solucao-varejo'
import CategoriaSolucaoAtacado from '../components/categoria-solucao-atacado'
import CategoriaSolucaoIndustria from '../components/categoria-solucao-industria'
import CategoriaSolucaoFiscal from '../components/categoria-solucao-fiscal'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta property="og:title" content="Soft Clever" />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <header data-role="Header" className="home-header">
          <LogoIcone rootClassName="logo-icone-root-class-name11"></LogoIcone>
          <div className="home-nav">
            <NavigationLinks2 rootClassName="rootClassName17"></NavigationLinks2>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container1">
                <LogoIcone rootClassName="logo-icone-root-class-name12"></LogoIcone>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks2 rootClassName="rootClassName18"></NavigationLinks2>
            </div>
            <div className="home-icon-group">
              <a
                href="https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/soft.clever"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/softcleverinformatica"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container2">
            <h1 className="home-text">Soft Clever</h1>
            <span className="home-text01">
              <span>Mais de 12.000 usuários atendidos.</span>
              <br></br>
              <span>Desenvolvemos soluções desde 1994.</span>
              <br></br>
              <span>Somos indicados por centenas de contadores.</span>
              <br></br>
            </span>
            <BotesWHATSCTT></BotesWHATSCTT>
          </div>
          <img
            alt="image"
            src="https://img.freepik.com/free-photo/man-with-laptop-sitting-table_23-2147800022.jpg"
            loading="eager"
            className="home-image"
          />
        </div>
        <div className="home-gallery-card">
          <div className="home-container3">
            <h1 className="home-heading">
              <span>
                Desenvolvido para
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text09">você</span>
            </h1>
            <span className="home-text10">
              <span>
                A gestão empresarial para seu negócio nunca foi tão fácil.
              </span>
              <br></br>
              <span>Temos sistemas para micro, pequena e média empresa.</span>
            </span>
            <BotesWHATSCTT rootClassName="botes-whatsctt-root-class-name"></BotesWHATSCTT>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJ1c2luZXNzcGVyc29ufGVufDB8fHx8MTY4MTEzMzU1MQ&amp;ixlib=rb-4.0.3&amp;h=1500"
            loading="lazy"
            className="home-image1"
          />
        </div>
        <Videos></Videos>
        <div className="home-features">
          <h1 className="home-text14">
            <span>Conheça nossos Serviços</span>
            <br></br>
          </h1>
          <div className="home-container4">
            <Link href="/solucao-varejo">
              <a className="home-link3">
                <CategoriaSolucaoVarejo
                  rootClassName="categoria-solucao-varejo-root-class-name"
                  className="home-component05"
                ></CategoriaSolucaoVarejo>
              </a>
            </Link>
            <Link href="/solucao-atacado--distribuicao">
              <a className="home-link4">
                <CategoriaSolucaoAtacado
                  rootClassName="categoria-solucao-atacado-root-class-name"
                  className="home-component06"
                ></CategoriaSolucaoAtacado>
              </a>
            </Link>
            <Link href="/solucao-industria--servico">
              <a className="home-link5">
                <CategoriaSolucaoIndustria
                  rootClassName="categoria-solucao-industria-root-class-name"
                  className="home-component07"
                ></CategoriaSolucaoIndustria>
              </a>
            </Link>
            <Link href="/solucao-fiscal">
              <a className="home-link6">
                <CategoriaSolucaoFiscal
                  Image_src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1N3x8ZmluYW5jZXxlbnwwfHx8fDE2ODI0MzM2MjQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                  className="home-component08"
                ></CategoriaSolucaoFiscal>
              </a>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
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
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home-mobile-menu {
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
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link {
            display: contents;
          }
          .home-icon04 {
            width: 18px;
            height: 24px;
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .home-link2 {
            display: contents;
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .home-hero {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container2 {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 10%;
            padding-right: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text01 {
            margin-top: var(--dl-space-space-twounits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image {
            width: 50%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
          .home-gallery-card {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            align-self: center;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              0deg,
              rgb(0, 0, 0) 0%,
              rgba(0, 0, 0, 0.8) 100%
            );
          }
          .home-container3:hover {
            opacity: 1;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 0px;
          }
          .home-text09 {
            color: #3d3b73;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            z-index: 100;
            font-size: 16px;
            align-self: center;
            text-align: center;
            line-height: 2;
            padding-top: var(--dl-space-space-twounits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-image1 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            background-color: #f9f7f2;
          }
          .home-text14 {
            font-size: 3rem;
            margin-bottom: 0px;
          }
          .home-container4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-link3 {
            display: contents;
          }
          .home-component05 {
            text-decoration: none;
          }
          .home-link4 {
            display: contents;
          }
          .home-component06 {
            text-decoration: none;
          }
          .home-link5 {
            display: contents;
          }
          .home-component07 {
            text-decoration: none;
          }
          .home-link6 {
            display: contents;
          }
          .home-component08 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-container {
              justify-content: flex-start;
            }
            .home-icon-group {
              margin-top: var(--dl-space-space-unit);
            }
            .home-hero {
              width: 100%;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .home-container2 {
              width: 100%;
              height: 80vh;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .home-text {
              color: #ffffff;
              text-align: center;
            }
            .home-text01 {
              color: #ffffff;
              margin-top: var(--dl-space-space-fourunits);
              text-align: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .home-gallery-card {
              height: 50vh;
              align-items: center;
              justify-content: flex-start;
            }
            .home-container3 {
              height: 100%;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              font-size: 2rem;
              font-style: normal;
              font-weight: 700;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .home-text09 {
              color: #3d3b73;
            }
            .home-text10 {
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container2 {
              width: 100%;
              z-index: 2;
              margin-right: 0px;
              justify-content: center;
            }
            .home-gallery-card {
              height: 400px;
            }
            .home-container3 {
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text14 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-icon-group {
              align-self: flex-start;
              justify-content: center;
            }
            .home-hero {
              padding-top: 0px;
              padding-left: 0;
              padding-right: 0;
              padding-bottom: 0px;
            }
            .home-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-gallery-card {
              height: 450px;
            }
            .home-heading {
              color: rgb(255, 255, 255);
              font-size: 2rem;
              align-self: center;
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              color: #3d3b73;
            }
            .home-text10 {
              color: var(--dl-color-gray-white);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-features {
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

export default Home
