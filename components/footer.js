import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-logo">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
            <a
              href="https://www.google.com/maps/place/R.+Jo%C3%A3o+Alves+Pimenta,+880+-+Vila+Miriam,+S%C3%A3o+Paulo+-+SP,+02967-000/@-23.4786996,-46.7053878,3a,75y,107.33h,106.54t/data=!3m6!1e1!3m4!1s8JspaB8DzuCwzO8e6V8kow!2e0!7i16384!8i8192!4m7!3m6!1s0x94cef9a193f0d75b:0x34a6ae4920c15e8e!8m2!3d-23.4787368!4d-46.7052318!10e5!16s%2Fg%2F11bw449f15"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <span>Rua João Alves Pimenta</span>
              <br></br>
              <span>880 - Freguesia do Ó</span>
              <br></br>
              <span>São Paulo - SP - Brasil</span>
              <br></br>
            </a>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <div className="footer-product-container">
                <span className="footer-text06">{props.text2}</span>
                <Link href="/solucao-varejo">
                  <a className="footer-link01">{props.text3}</a>
                </Link>
                <Link href="/solucao-atacado--distribuicao">
                  <a className="footer-link02">{props.text4}</a>
                </Link>
                <Link href="/solucao-industria--servico">
                  <a className="footer-link03">{props.text5}</a>
                </Link>
                <Link href="/solucao-fiscal">
                  <a className="footer-link04">{props.text6}</a>
                </Link>
              </div>
            </div>
            <div className="footer-company-container">
              <span className="footer-text07">{props.text1}</span>
              <Link href="/politica-de-privacidade">
                <a className="footer-link05">
                  <span>Politica de</span>
                  <br></br>
                  <span>Privacidade</span>
                </a>
              </Link>
            </div>
            <div className="footer-container2">
              <div className="footer-contact">
                <span className="footer-text11">{props.text7}</span>
                <a
                  href="mailto:softclever@softclever.com.br?subject=Tenho uma dúvida"
                  className="footer-link06"
                >
                  {props.text8}
                </a>
                <a href="tel:+55 (11) 3991-3923" className="footer-link07">
                  {props.text9}
                </a>
                <a href="tel:+55 (11) 2361-8334" className="footer-link08">
                  {props.text10}
                </a>
              </div>
              <div className="footer-socials">
                <span className="footer-text12">{props.text11}</span>
                <div className="footer-icon-group">
                  <a
                    href="https://www.youtube.com/channel/UCd15UMZr95UzVWWKbu5khTw"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link09"
                  >
                    <svg
                      filter="invert(1)"
                      viewBox="0 0 1024 1024"
                      className="footer-icon"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/soft.clever"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link10"
                  >
                    <svg
                      filter="invert(1)"
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon2"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/softcleverinformatica"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link11"
                  >
                    <svg
                      filter="invert(1)"
                      viewBox="0 0 602.2582857142856 1024"
                      className="footer-icon4"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text13">{props.text}</span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-222222);
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .footer-image {
            height: 2rem;
          }
          .footer-link {
            color: var(--dl-color-gray-white);
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-weight: 300;
            text-decoration: none;
          }
          .footer-links-container {
            width: 666px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            width: 180px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text06 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link01 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link02 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link04 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text07 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link05 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text11 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link06 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link07 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link08 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text12 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link09 {
            display: contents;
          }
          .footer-icon {
            width: 18px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer-text13 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container {
              justify-content: space-between;
            }
            .footer-logo {
              margin-right: var(--dl-space-space-unit);
            }
            .footer-links-container {
              align-items: flex-start;
              justify-content: space-between;
            }
            .footer-container1 {
              margin-right: 0px;
            }
            .footer-product-container {
              margin-right: 0px;
            }
            .footer-company-container {
              align-items: flex-start;
              margin-right: 0px;
              justify-content: flex-start;
            }
            .footer-link05 {
              color: var(--dl-color-gray-white);
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
              margin-right: 0px;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-link {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: space-between;
            }
            .footer-container1 {
              margin-right: 0px;
            }
            .footer-product-container {
              margin-right: 0px;
            }
            .footer-text06 {
              color: var(--dl-color-gray-white);
              font-weight: 700;
            }
            .footer-link01 {
              color: var(--dl-color-gray-white);
            }
            .footer-link02 {
              color: var(--dl-color-gray-white);
            }
            .footer-link03 {
              color: var(--dl-color-gray-white);
            }
            .footer-link04 {
              color: var(--dl-color-gray-white);
            }
            .footer-company-container {
              margin-right: 0px;
            }
            .footer-text07 {
              color: var(--dl-color-gray-white);
            }
            .footer-link05 {
              color: var(--dl-color-gray-white);
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-link {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 231px;
              align-items: flex-start;
              padding-left: 0px;
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-product-container {
              margin-right: 0px;
            }
            .footer-company-container {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-container2 {
              margin-top: 0px;
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-socials {
              width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-text12 {
              align-self: flex-start;
            }
            .footer-icon-group {
              align-self: flex-start;
              justify-content: center;
            }
            .footer-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text10: '+55 (11) 2361-8334',
  text8: 'softclever@softclever.com.br',
  image_alt: 'logo',
  rootClassName: '',
  text: '© 1994 Soft Clever Informática ERP, All Rights Reserved.',
  text7: 'Contact Us',
  text9: '+55 (11) 3991-3923',
  text1: 'Legal',
  text4: 'Atacado e Distribuição',
  text6: 'Fiscal',
  text3: 'Varejo',
  text11: 'Follow Us',
  text2: 'Para quem?',
  image_src:
    '/playground_assets/logo%20soft%20clever%20branca%20height32-1500h.png',
  text5: 'Industria e Serviço',
}

Footer.propTypes = {
  text10: PropTypes.string,
  text8: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text5: PropTypes.string,
}

export default Footer
