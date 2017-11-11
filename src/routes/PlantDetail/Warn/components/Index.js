import React from 'react'
import PropTypes from 'prop-types'

class PlantBasic extends React.Component {
  render () {
    const { query } = this.props.location
    return (
      <div>电站{ query.plant_id }警告</div>
    )
  }
}
PlantBasic.propTypes = {
  location: PropTypes.object.isRequired
}

export default PlantBasic
