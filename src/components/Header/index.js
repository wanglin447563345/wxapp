import React from 'react'
import PropTypes from 'prop-types'
import './Index.scss'

// import ARROW_L from '../imgs/arrow_l.png'

function Header (props) {
  return (
    <div className='header'>
      {/*<img src={ARROW_L} alt='' onClick={() => history.go(-1)} />*/}
      <p>{ props.title }</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
