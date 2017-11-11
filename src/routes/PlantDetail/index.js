import { injectReducer } from '../../store/reducers'

import PlantBasic from './PlantBasic'
import PlantList from './PlantList'
import AddModule from './AddModule'
import Analysis from './Analysis'
import Warn from './Warn'

export default (store) => ({
  path: 'detail/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./LayOut/components/Index').default
      cb(null, Index)
    })
  },
  childRoutes: [
    PlantBasic(store),
    PlantList(store),
    AddModule(store),
    Analysis(store),
    Warn(store)
  ]
})
