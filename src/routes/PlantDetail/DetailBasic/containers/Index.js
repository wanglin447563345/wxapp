import { connect } from 'react-redux'
import Index from '../components/Index'
import {
  get_plant_info,
  get_plant_power_data,
  get_plant_day_energy,
  get_plant_month_energy,
  get_plant_year_energy
} from '../redux/actions'

const mapDispatchtoProps = {
  get_plant_info,
  get_plant_power_data,
  get_plant_day_energy,
  get_plant_month_energy,
  get_plant_year_energy
}

const mapStateToProps = (state) => ({
  detailBasic: state.detailBasic
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
