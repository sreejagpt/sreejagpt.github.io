import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavTabs from '../components/NavTabs'
import './TemplateWrapper.scss'

const TemplateWrapper = ({ children }) => (
  <div className='wrapper'>
    <Helmet
      title="sreejagpt's blog"
      meta={[
        { name: 'description', content: 'sreejagpt\'s personal blog' },
      ]}
    />
    <NavTabs/>
    <div className='content'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
