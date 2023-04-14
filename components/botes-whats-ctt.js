import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const BotesWHATSCTT = (props) => {
  return (
    <>
      <div className={`botes-whats-ctt-btn-group ${props.rootClassName} `}>
        <a
          href="https://api.whatsapp.com/send/?phone=5511992810253&amp;text=Ol%C3%A1%2C+envie+sua+mensagem%21&amp;type=phone_number&amp;app_absent=0"
          target="_blank"
          rel="noreferrer noopener"
          className="botes-whats-ctt-link button"
        >
          <span className="botes-whats-ctt-text">
            <span className="botes-whats-ctt-text1">Whatsapp</span>
            <br></br>
          </span>
        </a>
        <Link href="/contato">
          <a className="botes-whats-ctt-link1 button">
            <span>
              <span className="botes-whats-ctt-text4">Contato</span>
              <br></br>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .botes-whats-ctt-btn-group {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .botes-whats-ctt-link {
            color: #ffffff;
            height: a;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #222222;
          }
          .botes-whats-ctt-link:hover {
            color: var(--dl-color-gray-white);
            border-width: 0px;
            background-color: var(--dl-color-gray-000000);
          }
          .botes-whats-ctt-text {
            font-style: normal;
            font-weight: 700;
          }
          .botes-whats-ctt-text1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-000000);
          }
          .botes-whats-ctt-link1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(34, 34, 34);
          }
          .botes-whats-ctt-link1:hover {
            border-color: var(--dl-color-gray-000000);
            background-color: #000000;
          }
          .botes-whats-ctt-text4:hover {
            border-color: var(--dl-color-gray-000000);
          }
          .botes-whats-ctt-root-class-name {
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .botes-whats-ctt-root-class-name1 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .botes-whats-ctt-link1 {
              margin-top: 0px;
            }
            .botes-whats-ctt-text4 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BotesWHATSCTT.defaultProps = {
  rootClassName: '',
}

BotesWHATSCTT.propTypes = {
  rootClassName: PropTypes.string,
}

export default BotesWHATSCTT
