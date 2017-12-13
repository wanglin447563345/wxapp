import { connect } from 'react-redux'
import Index from '../components/Index'
import {get_user_info} from '../redux/action'

const mapDispatchtoProps = {
  get_user_info
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
