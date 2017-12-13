import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { browserHistory } from 'react-router'

import './Index.scss'

import HOME_NOR from '../imgs/home_nor.png'
import HOME_SEL from '../imgs/home_sel.png'
import LIST_NOR from '../imgs/list_nor.png'
import LIST_SEL from '../imgs/list_sel.png'
import ADD_NOR from '../imgs/add_nor.png'
import HELP_NOR from '../imgs/help_nor.png'
import HELP_SEL from '../imgs/help_sel.png'
import USER_NOR from '../imgs/user_nor.png'
import USER_SEL from '../imgs/user_sel.png'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <TabBar
          unselectedTintColor='#79909B'
          tintColor='#039BE5'
          barTintColor='#FFF'
          hidden={false}
        >
          <TabBar.Item
            title='概况'
            key='概况'
            icon={HOME_NOR}
            selectedIcon={HOME_SEL}
            selected={location.pathname === '/wx/'}
            onPress={() => browserHistory.push('/wx/')}
          />
          <TabBar.Item
            title='列表'
            key='列表'
            icon={LIST_NOR}
            selectedIcon={LIST_SEL}
            selected={location.pathname === '/wx/list'}
            onPress={() => browserHistory.push('/wx/list')}
          />
          <TabBar.Item
            title='添加'
            key='添加'
            icon={ADD_NOR}
            onPress={() => this.props.createPlant()}
          />
          <TabBar.Item
            title='帮助'
            key='帮助'
            icon={HELP_NOR}
            selectedIcon={HELP_SEL}
            selected={location.pathname === '/wx/help'}
            onPress={() => browserHistory.push('/wx/help')}
          />
          <TabBar.Item
            title='用户'
            key='用户'
            icon={USER_NOR}
            selectedIcon={USER_SEL}
            selected={location.pathname === '/wx/user'}
            onPress={() => browserHistory.push('/wx/user')}
          />
        </TabBar>
      </div>
    )
  }
}
Footer.propTypes = {
  createPlant: PropTypes.func.isRequired
}

export default Footer
