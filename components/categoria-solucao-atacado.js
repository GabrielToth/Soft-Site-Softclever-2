import React from 'react'

import PropTypes from 'prop-types'

const CategoriaSolucaoAtacado = (props) => {
  return (
    <>
      <div
        className={`categoria-solucao-atacado-categoria-solucao-atacado ${props.rootClassName} `}
      >
        <div className="categoria-solucao-atacado-container">
          <h2 className="categoria-solucao-atacado-text">{props.heading}</h2>
          <span className="categoria-solucao-atacado-text1">{props.text}</span>
          <button className="categoria-solucao-atacado-button button">
            {props.button}
          </button>
        </div>
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          loading="lazy"
          className="categoria-solucao-atacado-image"
        />
      </div>
      <style jsx>
        {`
          .categoria-solucao-atacado-categoria-solucao-atacado {
            width: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            border-radius: 16px;
            flex-direction: row;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .categoria-solucao-atacado-container {
            height: 180px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .categoria-solucao-atacado-text {
            color: var(--dl-color-gray-000000);
            align-self: flex-end;
            text-align: left;
            transition: 150;
            line-height: 1.5;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .categoria-solucao-atacado-text:hover {
            text-decoration: underline;
          }
          .categoria-solucao-atacado-text1 {
            color: var(--dl-color-gray-000000);
            text-align: right;
            transition: 150ms;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-atacado-text1:hover {
            text-decoration: underline;
          }
          .categoria-solucao-atacado-button {
            display: none;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .categoria-solucao-atacado-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }

          @media (max-width: 991px) {
            .categoria-solucao-atacado-container {
              margin-right: 0px;
            }
            .categoria-solucao-atacado-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .categoria-solucao-atacado-text1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .categoria-solucao-atacado-image {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .categoria-solucao-atacado-categoria-solucao-atacado {
              width: var(--dl-size-size-xxlarge);
              box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.05);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .categoria-solucao-atacado-container {
              order: 1;
              height: auto;
              align-items: center;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .categoria-solucao-atacado-text {
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .categoria-solucao-atacado-text1 {
              text-align: justify;
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .categoria-solucao-atacado-button {
              color: #ffffff;
              display: flex;
              font-size: 12px;
              font-style: normal;
              font-weight: 900;
              border-width: 0px;
              border-radius: 20px;
              background-color: var(--dl-color-gray-222222);
            }
            .categoria-solucao-atacado-image {
              width: 100%;
              height: var(--dl-size-size-large);
              min-width: auto;
              align-self: center;
              min-height: auto;
            }
            .categoria-solucao-atacado-root-class-name {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

CategoriaSolucaoAtacado.defaultProps = {
  Image_src: '/playground_assets/atacado-e-distribuicao-1500w.webp',
  text: 'NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.',
  button: 'SAIBA MAIS',
  rootClassName: '',
  heading: 'Atacado e Distribuição',
  Image_alt: 'Atacado e Distribuição',
}

CategoriaSolucaoAtacado.propTypes = {
  Image_src: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  Image_alt: PropTypes.string,
}

export default CategoriaSolucaoAtacado
