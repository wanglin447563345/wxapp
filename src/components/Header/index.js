import React from 'react'
import PropTypes from 'prop-types'
import './Index.scss'

import ARROW_L from '../imgs/arrow_l.png'

function Header (props) {
  return (
    <div className='header'>
      <span><img src={ARROW_L} alt='' onClick={() => history.go(-1)} />返回列表</span>
      <p>{ props.title }</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
