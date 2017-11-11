import React from 'react'
import PropTypes from 'prop-types'

class PlantBasic extends React.Component {
  render () {
    return (
      <div>添加</div>
    )
  }
}
PlantBasic.propTypes = {
  location: PropTypes.object.isRequired
}

export default PlantBasic
