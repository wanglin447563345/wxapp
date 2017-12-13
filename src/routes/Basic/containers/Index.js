import { connect } from 'react-redux'
import {
  get_user_stat,
  get_user_power_data,
  get_user_day_energy,
  get_user_month_energy,
  get_user_year_energy
} from '../redux/actions'
import Index from '../components/Index'

const mapDispatchtoProps = {
  get_user_stat,
  get_user_power_data,
  get_user_day_energy,
  get_user_month_energy,
  get_user_year_energy
}

const mapStateToProps = (state) => ({
  basic: state.basic
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
