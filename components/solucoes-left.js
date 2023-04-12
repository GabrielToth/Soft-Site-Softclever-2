import React from 'react'

import PropTypes from 'prop-types'

const SolucoesLEFT = (props) => {
  return (
    <>
      <div className={`solucoes-left-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="solucoes-left-image"
        />
        <div className="solucoes-left-container">
          <h2 className="solucoes-left-text">{props.title}</h2>
          <span className="solucoes-left-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .solucoes-left-feature-card {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .solucoes-left-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucoes-left-container {
            height: 180px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .solucoes-left-text {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucoes-left-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            line-height: 1.5;
          }
          .solucoes-left-root-class-name {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name1 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name2 {
            width: 80vw;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name3 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name4 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name5 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name6 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left-root-class-name7 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          @media (max-width: 991px) {
            .solucoes-left-image {
              margin-bottom: 0px;
            }
            .solucoes-left-container {
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .solucoes-left-feature-card {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucoes-left-image {
              align-self: center;
            }
            .solucoes-left-container {
              height: auto;
              align-items: center;
              margin-left: 0px;
            }
            .solucoes-left-root-class-name {
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-left-root-class-name3 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-left-root-class-name4 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-left-root-class-name5 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .solucoes-left-root-class-name7 {
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .solucoes-left-text1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

SolucoesLEFT.defaultProps = {
  image_src: '/playground_assets/comercio-varejista-200h.webp',
  rootClassName: '',
  title: 'Lorem ipsum',
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

SolucoesLEFT.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default SolucoesLEFT
