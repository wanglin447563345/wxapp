import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { browserHistory } from 'react-router'
import './Index.scss'

import SITUATION_NOR from './imgs/situation_nor.png'
import SITUATION_SEL from './imgs/situation_sel.png'
import LIST2_NOR from './imgs/list2_nor.png'
import LIST2_SEL from './imgs/list2_sel.png'
import MAP_NOR from './imgs/map2_nor.png'
import MAP_SEL from './imgs/map2_sel.png'
import EDIT_NOR from './imgs/edit_nor.png'
import EDIT_SEL from './imgs/edit_sel.png'
import CAVEAT_NOR from './imgs/caveat_nor.png'
import CAVEAT_SEL from './imgs/caveat_sel.png'

function DetailFooter ({ location }) {
  return (
    <div className='detail_footer'>
      <TabBar
        unselectedTintColor='#79909B'
        tintColor='#039BE5'
        barTintColor='#FFF'
        hidden={false}
      >
        <TabBar.Item
          title='概况'
          key='概况'
          icon={SITUATION_NOR}
          selectedIcon={SITUATION_SEL}
          selected={location.pathname === '/wx/detail/basic'}
          onPress={() => browserHistory.push(`/wx/detail/basic${location.search}`)}
        />
        <TabBar.Item
          title='列表'
          key='列表'
          icon={LIST2_NOR}
          selectedIcon={LIST2_SEL}
          selected={location.pathname === '/wx/detail/list'}
          onPress={() => browserHistory.push(`/wx/detail/list${location.search}`)}
        />
        <TabBar.Item
          title='地图'
          key='地图'
          icon={MAP_NOR}
          selectedIcon={MAP_SEL}
          selected={location.pathname === '/wx/detail/map'}
          onPress={() => browserHistory.push(`/wx/detail/map${location.search}`)}
        />
        <TabBar.Item
          title='详情'
          key='详情'
          icon={EDIT_NOR}
          selectedIcon={EDIT_SEL}
          selected={location.pathname === '/wx/detail/edit'}
          onPress={() => browserHistory.push(`/wx/detail/edit${location.search}`)}
        />
        <TabBar.Item
          title='警告'
          key='警告'
          icon={CAVEAT_NOR}
          selectedIcon={CAVEAT_SEL}
          selected={location.pathname === '/wx/detail/warn'}
          onPress={() => browserHistory.push(`/wx/detail/warn${location.search}`)}
        />
      </TabBar>
    </div>
  )
}
DetailFooter.propTypes = {
  location: PropTypes.object.isRequired
}

export default DetailFooter
