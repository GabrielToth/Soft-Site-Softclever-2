import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks2 = (props) => {
  return (
    <>
      <nav className={`navigation-links2-nav ${props.rootClassName} `}>
        <Link href="/solucao-varejo">
          <a className="navigation-links2-link">{props.text}</a>
        </Link>
        <Link href="/solucao-atacado--distribuicao">
          <a className="navigation-links2-link1">{props.text1}</a>
        </Link>
        <Link href="/solucao-industria--servico">
          <a className="navigation-links2-link2">{props.text2}</a>
        </Link>
        <Link href="/solucao-fiscal">
          <a className="navigation-links2-link3">{props.text3}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links2-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links2-link {
            text-decoration: none;
          }
          .navigation-links2-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links2-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links2-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links2-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links2-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks2.defaultProps = {
  text: 'Varejo',
  text3: 'Fiscal',
  text1: 'Atacado e Distribuição',
  rootClassName: '',
  text2: 'Indústria e Serviços',
}

NavigationLinks2.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks2
