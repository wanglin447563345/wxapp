import { connect } from 'react-redux'
import Index from '../components/Index'
import { get_plant_list } from '../redux/actions'

const mapDispatchtoProps = {
  get_plant_list
}

const mapStateToProps = (state) => ({
  plantList: state.plantList
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
