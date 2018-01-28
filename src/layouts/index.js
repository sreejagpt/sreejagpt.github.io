import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './TemplateWrapper.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="sreejagpt's blog"
      meta={[
        { name: 'description', content: 'sreejagpt\'s personal blog' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
