import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './TemplateWrapper.scss'

const TemplateWrapper = ({ children }) => (
  <div className='wrapper'>
    <Helmet
      title="sreejagpt"
      meta={[
        { name: 'description', content: 'sreejagpt' },
      ]}
    />
    <div className='content'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
