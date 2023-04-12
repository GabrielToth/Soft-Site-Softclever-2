import React from 'react'

import PropTypes from 'prop-types'

const CampoFORMS = (props) => {
  return (
    <>
      <div className={`campo-forms-container ${props.rootClassName} `}>
        <label className="campo-forms-text">{props.label}</label>
        <input
          type="text"
          placeholder={props.Placeholder}
          className="campo-forms-textinput input"
        />
      </div>
      <style jsx>
        {`
          .campo-forms-container {
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .campo-forms-text {
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .campo-forms-textinput {
            border-radius: 20px;
          }
          .campo-forms-root-class-name {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .campo-forms-root-class-name1 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .campo-forms-root-class-name2 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .campo-forms-root-class-name3 {
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

CampoFORMS.defaultProps = {
  Placeholder: 'placeholder',
  rootClassName: '',
  label: 'label',
}

CampoFORMS.propTypes = {
  Placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
}

export default CampoFORMS
