import React from 'react'

import PropTypes from 'prop-types'

import BotesWHATSCTT from './botes-whats-ctt'
import LogoIcone from './logo-icone'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero">
        <div className="hero-hero-right">
          <img
            alt={props.image_alt}
            src={props.image_src}
            loading="eager"
            className="hero-image"
          />
          <div className="hero-container">
            <h1 className="hero-text">{props.heading}</h1>
            <span className="hero-text01">
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
          <LogoIcone rootClassName="logo-icone-root-class-name2"></LogoIcone>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-hero-right {
            width: 100%;
            height: 80vh;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-image {
            width: 50%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
          .hero-container {
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 10%;
            padding-right: 24px;
            flex-direction: column;
            justify-content: center;
          }
          .hero-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .hero-text01 {
            margin-top: var(--dl-space-space-twounits);
            line-height: 2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .hero-hero {
              width: 100%;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .hero-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .hero-container {
              width: 100%;
              height: 80vh;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .hero-text {
              color: #ffffff;
              text-align: center;
            }
            .hero-text01 {
              color: #ffffff;
              margin-top: var(--dl-space-space-fourunits);
              text-align: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .hero-container {
              width: 100%;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: 0px;
              padding-left: 0;
              padding-right: 0;
              padding-bottom: 0px;
            }
            .hero-container {
              width: 459px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzA5OTY3&ixlib=rb-4.0.3&w=1500',
  heading: 'Varejo',
  image_alt: 'image',
  image_src1: '9842fe7a-22e5-4788-afe4-03540ff143e6',
  image_alt1: 'logo',
}

Hero.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Hero
