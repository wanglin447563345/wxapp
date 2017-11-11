// We only need to import the modules necessary for initial render
import Layouts from '../layouts'
import Basic from './Basic'
import List from './List'
import Add from './Add'
import Help from './Help'
import User from './User'
import Login from './Login'
import SelectImport from './SelectImport'
import CreateFirst from './CreateFirst'
import PageNotFound from './PageNotFound'
import PlantDetail from './PlantDetail'
import Redirect from './PageNotFound/redirect'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/wx/',
  component: Layouts,
  indexRoute: Basic,
  childRoutes: [
    List(store),
    Add(store),
    Help(store),
    User(store),
    Login(store),
    SelectImport(store),
    CreateFirst(store),
    PageNotFound(),
    PlantDetail(store),
    Redirect
  ]
})

export default createRoutes
