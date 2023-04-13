import React from 'react'

import PropTypes from 'prop-types'

const SolucoesLEFT1 = (props) => {
  return (
    <>
      <div className={`solucoes-left1-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="solucoes-left1-image"
        />
        <div className="solucoes-left1-container">
          <h2 className="solucoes-left1-text">{props.title}</h2>
          <span className="solucoes-left1-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .solucoes-left1-feature-card {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .solucoes-left1-image {
            width: 320px;
            height: 180px;
            min-width: 320px;
            align-self: flex-start;
            min-height: 180px;
            object-fit: cover;
            border-radius: 16px;
          }
          .solucoes-left1-container {
            height: 180px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .solucoes-left1-text {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .solucoes-left1-text1 {
            color: var(--dl-color-gray-000000);
            text-align: left;
            line-height: 1.5;
          }
          .solucoes-left1-root-class-name {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name1 {
            width: 100%;
          }
          .solucoes-left1-root-class-name2 {
            width: 80vw;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name3 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name5 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name6 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name8 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name9 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name10 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .solucoes-left1-root-class-name11 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          @media (max-width: 991px) {
            .solucoes-left1-image {
              margin-bottom: 0px;
            }
            .solucoes-left1-container {
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .solucoes-left1-feature-card {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .solucoes-left1-image {
              align-self: center;
            }
            .solucoes-left1-container {
              height: auto;
              align-items: center;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .solucoes-left1-text1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

SolucoesLEFT1.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  title: 'Lorem ipsum',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

SolucoesLEFT1.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default SolucoesLEFT1
