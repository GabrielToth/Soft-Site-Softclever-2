import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const LogoIcone = (props) => {
  return (
    <>
      <div className={`logo-icone-container ${props.rootClassName} `}>
        <Link href="/">
          <a className="logo-icone-link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="logo-icone-image"
            />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .logo-icone-container {
            display: flex;
            position: relative;
          }
          .logo-icone-link {
            display: contents;
          }
          .logo-icone-image {
            width: auto;
            height: 36px;
            position: relative;
            object-fit: cover;
            text-decoration: none;
          }
          .logo-icone-root-class-name {
            top: var(--dl-space-space-unit);
            left: var(--dl-space-space-unit);
            margin: auto;
            position: absolute;
          }
          .logo-icone-root-class-name1 {
            top: 0px;
            right: 0px;
            position: absolute;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: auto;
          }
          .logo-icone-root-class-name2 {
            top: var(--dl-space-space-unit);
            left: var(--dl-space-space-unit);
            margin: auto;
            position: absolute;
          }
          .logo-icone-root-class-name3 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name4 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name5 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name6 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name7 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name8 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
          .logo-icone-root-class-name9 {
            top: 0px;
            right: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

LogoIcone.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/logo%20soft%20clever%20png-200h.png',
  image_alt: 'image',
}

LogoIcone.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default LogoIcone
