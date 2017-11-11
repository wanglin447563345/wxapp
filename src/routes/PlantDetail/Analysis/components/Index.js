import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../../components/Header'

class PlantBasic extends React.Component {
  render () {
    const { query } = this.props.location
    return (
      <div className='analysis'>
        <div className='detail_header'>
          <Header title='电站分析' />
        </div>
      </div>
    )
  }
}
PlantBasic.propTypes = {
  location: PropTypes.object.isRequired
}

export default PlantBasic
