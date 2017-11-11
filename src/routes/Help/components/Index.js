import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Index.scss'
class Help extends Component {
  render () {
    return (
      <div className='help'>
        <div className='help_logo'>
          <p><img src='http://imgsrc.baidu.com/imgad/pic/item/500fd9f9d72a6059dc3098232334349b033bbae3.jpg' alt='' /></p>
          <p>费德勒的就是</p>
          <p>v.10</p>
        </div>
        <div className='help_content'>
          <p>联系我们</p>
          <p>固件升级</p>
        </div>
      </div>
    )
  }
}

Help.propTypes = {
}
export default Help
