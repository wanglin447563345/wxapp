import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../../components/Header'
import DashChart from '../../../../components/DashboardChart'

class PlantBasic extends React.Component {
  render () {
    const { query } = this.props.location
    const DashOptions = {
      data:[{ value: 50, name: '使用率' }]
    }
    const plant_name='电站1'
    return (
      <div className='plant_basic basic'>
        <Header title={`${plant_name}概况`} />
        <div className='dashChart'>
          <DashChart options={DashOptions} />
        </div>
      </div>
    )
  }
}
PlantBasic.propTypes = {
  location: PropTypes.object.isRequired
}

export default PlantBasic
