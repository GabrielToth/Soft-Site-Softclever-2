import React from 'react'
import Head from 'next/head'

import CampoFORMS from '../components/campo-forms'
import LogoIcone from '../components/logo-icone'
import Footer from '../components/footer'

const Contato = (props) => {
  return (
    <>
      <div className="contato-container">
        <Head>
          <title>Contato - Soft Clever</title>
          <meta
            name="description"
            content="A solução para a gestão empresarial do seu negócio."
          />
          <meta property="og:title" content="Contato - Soft Clever" />
          <meta
            property="og:description"
            content="A solução ideal para a gestão empresarial do seu negócio."
          />
        </Head>
        <div className="contato-hero">
          <div className="contato-container1">
            <h1 className="contato-text">Entre em contato</h1>
            <form className="contato-form">
              <CampoFORMS
                label="Nome"
                Placeholder="Escreva seu nome"
                rootClassName="campo-forms-root-class-name"
              ></CampoFORMS>
              <CampoFORMS
                label="Empresa"
                Placeholder="Nome da usa empresa"
                rootClassName="campo-forms-root-class-name1"
              ></CampoFORMS>
              <CampoFORMS
                label="Email"
                Placeholder="Escreva seu email"
                rootClassName="campo-forms-root-class-name2"
              ></CampoFORMS>
              <CampoFORMS
                label="Telefone"
                Placeholder="Escreva seu telefone"
                rootClassName="campo-forms-root-class-name3"
              ></CampoFORMS>
              <div className="contato-container2">
                <label className="contato-text1">Mensagem</label>
                <textarea
                  placeholder="Escreva sua mensagem"
                  className="contato-textarea textarea"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="contato-container3">
            <div className="contato-container4">
              <h1 className="contato-text2">SIMPLIFIQUE</h1>
              <h1 className="contato-text3">Tire todas as suas dúvidas</h1>
            </div>
            <span className="contato-text4">
              <span>Atendimento: </span>
              <span>Segunda a Sexta-Feira das </span>
              <span>08:00 - 18:00</span>
              <br></br>
            </span>
          </div>
          <LogoIcone
            image_src="/playground_assets/logo%20soft%20clever%20branca%20height32-200h.png"
            rootClassName="logo-icone-root-class-name1"
          ></LogoIcone>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contato-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contato-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contato-container1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contato-text {
            font-size: 2rem;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .contato-form {
            width: a;
            height: a;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .contato-container2 {
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .contato-text1 {
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contato-textarea {
            height: 100px;
            border-radius: 20px;
          }
          .contato-container3 {
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxibHVlfGVufDB8fHx8MTY4MTI0NDE5MA&ixlib=rb-4.0.3&w=1400');
          }
          .contato-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contato-text2 {
            color: var(--dl-color-gray-white);
            font-size: 4rem;
            max-width: a;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: uppercase;
          }
          .contato-text3 {
            color: var(--dl-color-gray-white);
            font-size: 2rem;
            max-width: auto;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-weight: 700;
            text-transform: uppercase;
          }
          .contato-text4 {
            left: 0px;
            color: var(--dl-color-gray-white);
            right: 0px;
            bottom: 41px;
            margin: 0px;
            position: absolute;
            text-align: center;
            line-height: 2;
          }
          @media (max-width: 991px) {
            .contato-hero {
              width: 100%;
              height: auto;
              max-height: auto;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .contato-container1 {
              order: 3;
              width: auto;
              height: auto;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contato-container3 {
              width: 100%;
              height: 300px;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .contato-text2 {
              color: #ffffff;
              text-align: center;
            }
            .contato-text3 {
              color: #ffffff;
              text-align: center;
            }
            .contato-text4 {
              color: #ffffff;
              bottom: 7px;
              margin-top: 0px;
              text-align: center;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .contato-hero {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .contato-container1 {
              width: auto;
            }
            .contato-text {
              width: a;
            }
            .contato-container3 {
              width: 100%;
              margin-right: 0px;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .contato-hero {
              padding-top: 0px;
              padding-left: 0;
              padding-right: 0;
              padding-bottom: 0px;
            }
            .contato-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contato
