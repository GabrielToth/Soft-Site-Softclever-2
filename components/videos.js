import React from 'react'

import PropTypes from 'prop-types'

const Videos = (props) => {
  return (
    <>
      <div className="videos-videos">
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
            max-width: var(--dl-size-size-maxwidth);
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
            padding-top: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .videos-text1 {
            color: #ffffff;
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
            padding-top: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .videos-text3 {
            color: #ffffff;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .videos-iframe1 {
            width: 426.66px;
            height: 240px;
            border-radius: 16px;
          }
          @media (max-width: 991px) {
            .videos-videos {
              height: 700px;
              flex-direction: column;
            }
            .videos-container {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Videos.defaultProps = {
  heading: 'Soft Clever na Mídia',
  heading1: 'Produtos e Serviços',
  text1: 'Conheça nossos produtos e serviços em apenas 1 minuto',
  text: 'Reportagem exibida na Band News',
}

Videos.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Videos
