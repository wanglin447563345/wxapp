import { injectReducer } from '../../store/reducers'

import DetailBasic from './DetailBasic'
import DetailList from './DetailList'
import Map from './Map'
import Analysis from './Analysis'
import Warn from './Warn'
import AddModule from './AddModule'
import DetailEdit from './DetailEdit'

export default (store) => ({
  path: 'detail/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./LayOut/components/Index').default
      cb(null, Index)
    })
  },
  childRoutes: [
    DetailBasic(store),
    DetailList(store),
    Map(store),
    Analysis(store),
    Warn(store),
    AddModule(store),
    DetailEdit(store)
  ]
})
