import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <Link href="/solucao-varejo">
          <a className="navigation-links1-link">{props.text1}</a>
        </Link>
        <Link href="/solucao-atacado--distribuicao">
          <a className="navigation-links1-link1">{props.text2}</a>
        </Link>
        <Link href="/solucao-industria--servico">
          <a className="navigation-links1-link2">{props.text3}</a>
        </Link>
        <Link href="/solucao-fiscal">
          <a className="navigation-links1-link3">{props.text4}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Features',
  text4: 'Blog',
  text2: 'Pricing',
  text3: 'Team',
  rootClassName: '',
  text: 'About',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1