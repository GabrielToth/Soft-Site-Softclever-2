import React from 'react'

import PropTypes from 'prop-types'

const Videos = (props) => {
  return (
    <>
      <div className={`videos-videos ${props.rootClassName} `}>
        <div className="videos-container">
          <h1 className="videos-text">{props.heading}</h1>
          <span className="videos-text1">{props.text}</span>
          <iframe
            src="https://player.vimeo.com/video/352070241?h=4c714b5957"
            allow="autoplay; fullscreen; picture-in-picture"
            frameborder="0"
            allowFullScreen
            allowfullscreen
            className="videos-iframe"
          ></iframe>
        </div>
        <div className="videos-container1">
          <h1 className="videos-text2">{props.heading1}</h1>
          <span className="videos-text3">{props.text1}</span>
          <iframe
            src="https://www.youtube.com/embed/GwttGRBPf1M"
            allow="autoplay; picture-in-picture"
            frameborder="0"
            allowFullScreen
            className="videos-iframe1"
          ></iframe>
        </div>
      </div>
      <style jsx>
        {`
          .videos-videos {
            flex: 0 0 auto;
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: #222222;
          }
          .videos-container {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .videos-text {
            color: #ffffff;
            text-align: center;
          }
          .videos-text1 {
            color: #ffffff;
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .videos-iframe {
            width: 426.66px;
            height: 240px;
            border-radius: 16px;
          }
          .videos-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .videos-text2 {
            color: #ffffff;
            text-align: center;
            padding-top: var(--dl-space-space-unit);
          }
          .videos-text3 {
            color: #ffffff;
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .videos-iframe1 {
            width: 426.66px;
            height: 240px;
            border-radius: 16px;
          }
          .videos-root-class-name {
            max-width: auto;
          }
          @media (max-width: 991px) {
            .videos-videos {
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .videos-container {
              height: auto;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .videos-container1 {
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .videos-videos {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .videos-container1 {
              height: 48%;
            }
          }
          @media (max-width: 479px) {
            .videos-videos {
              justify-content: center;
            }
            .videos-iframe {
              width: 426.6px;
              height: 200px;
              max-width: 100%;
              align-self: stretch;
              max-height: auto;
            }
            .videos-container1 {
              height: 48%;
              align-self: center;
              align-items: flex-start;
            }
            .videos-text2 {
              width: 100%;
              align-self: center;
              text-align: center;
              padding-top: 0px;
            }
            .videos-text3 {
              text-align: center;
            }
            .videos-iframe1 {
              width: 426.6px;
              height: 200px;
              max-width: 100%;
              align-self: stretch;
              max-height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Videos.defaultProps = {
  rootClassName: '',
  heading: 'Soft Clever na Mídia',
  heading1: 'Produtos e Serviços',
  text1: 'Conheça nossos produtos e serviços em apenas 1 minuto',
  text: 'Reportagem exibida na Band News',
}

Videos.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Videos
