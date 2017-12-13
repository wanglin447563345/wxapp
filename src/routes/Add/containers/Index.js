import { connect } from 'react-redux'
import { create_plant } from '../redux/actions'
import Index from '../components/Index'

const mapDispatchtoProps = {
  create_plant
}

const mapStateToProps = (state) => ({
  add: state.add
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
