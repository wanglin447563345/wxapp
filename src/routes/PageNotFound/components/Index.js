import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NotFoundImage from '../assets/404.jpg'
import './Index.scss'
import { withRouter } from 'react-router'

class PageNotFound extends Component {
  render () {
    const props = this.props
    return (
      <div className='container'>
        <h1>Page not found!!!</h1>
        <h3>
          <a className='link' onClick={props.router.goBack}>Back</a>
        </h3>
        <img src={NotFoundImage} />
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
