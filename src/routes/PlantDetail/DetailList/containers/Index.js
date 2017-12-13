import { connect } from 'react-redux'
import Index from '../components/Index'
import {get_detail_list} from '../redux/actions'

const mapDispatchtoProps = {
  get_detail_list
}

const mapStateToProps = (state) => ({
  detailList: state.detailList
})

export default connect(mapStateToProps, mapDispatchtoProps)(Index)
