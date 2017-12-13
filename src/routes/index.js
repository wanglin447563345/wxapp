// We only need to import the modules necessary for initial render
import { injectReducer } from '../store/reducers'
import Layouts from '../layouts'
import List from './List'
import AgencyEmail from './AgencyEmail'
import Add from './Add'
import Help from './Help'
import User from './User'
import Login from './Login'
import SelectImport from './SelectImport'
import Jump from './Jump'
import CreateFirst from './CreateFirst'
import PageNotFound from './PageNotFound'
import PlantDetail from './PlantDetail'
import Redirect from './PageNotFound/redirect'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/wx/',
  component: Layouts,
  getIndexRoute (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./Basic/containers/Index').default
      const reducer = require('./Basic/redux/reducer').default
      injectReducer(store, { key: 'basic', reducer:reducer })
      cb(null, { component:container })
    }, 'Index')
  },
  childRoutes: [
    List(store),
    Add(store),
    AgencyEmail(store),
    Help(store),
    User(store),
    Login(store),
    SelectImport(store),
    Jump(store),
    CreateFirst(store),
    PageNotFound(),
    PlantDetail(store),
    Redirect
  ]
})

export default createRoutes
