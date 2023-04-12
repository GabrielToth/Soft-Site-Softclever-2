import React from 'react'

import PropTypes from 'prop-types'

import LogoIcone from './logo-icone'
import BotesWHATSCTT from './botes-whats-ctt'

const HeroRight = (props) => {
  return (
    <>
      <div className="hero-right-hero-right">
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="hero-right-image"
        />
        <LogoIcone rootClassName="logo-icone-root-class-name4"></LogoIcone>
        <div className="hero-right-container">
          <h1 className="hero-right-text">{props.heading}</h1>
          <span className="hero-right-text1">{props.text}</span>
          <BotesWHATSCTT></BotesWHATSCTT>
        </div>
      </div>
      <style jsx>
        {`
          .hero-right-hero-right {
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
          .hero-right-image {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            object-fit: cover;
          }
          .hero-right-container {
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
          .hero-right-text {
            font-size: 3rem;
          }
          .hero-right-text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .hero-right-image {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              margin: auto;
              position: absolute;
            }
            .hero-right-container {
              width: 100%;
              height: 100%;
              z-index: 100;
              align-items: center;
              padding-left: 0;
              padding-right: 0px;
              justify-content: center;
            }
            .hero-right-text {
              color: #ffffff;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero-right-container {
              width: 100%;
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero-right-container {
              width: 459px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroRight.defaultProps = {
  image_alt: 'image',
  heading: 'Varejo',
  text: 'Soluções em sistemas para o varejo em geral, seja de micro, pequeno ou de médio porte.Oferecemos planos mensais ou anuais com descontos. Temos um pacote que cabe no seu bolso.Não cobramos pela cópia do sistema e o nosso contrato mensal não possui fidelidade.Nosso suporte é remoto e online e atendemos em todo o território nacional.O Sírius S@T Fiscal é homologado pela Sefaz-SP e é indicado por centenas de contadores.São mais de 12.000 usuários atendidos desde 1994. Na Soft Clever você pode confiar.Conheça abaixo as nossas soluções voltadas para o comércio varejista.',
  image_src: '/playground_assets/mulher-com-tablet-1500w.webp',
}

HeroRight.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default HeroRight
