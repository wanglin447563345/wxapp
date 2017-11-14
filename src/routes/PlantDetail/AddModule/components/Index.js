import React from 'react'
import PropTypes from 'prop-types'

class AddModule extends React.Component {
  render () {
    return (
      <div>添加</div>
    )
  }
}
AddModule.propTypes = {
  location: PropTypes.object.isRequired
}

export default AddModule
