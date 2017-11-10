// We only need to import the modules necessary for initial render
import Layout from '../layouts'
import Basic from './Basic'
import List from './List'
import Map from './Map'
import Help from './Help'
import User from './User'
import Login from './Login'
import SelectImport from './SelectImport'
import CreateFirst from './CreateFirst'
import PlantBasic from './PlantDetail/PlantBasic'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: Basic,
  childRoutes: [
    List(store),
    Map(store),
    Help(store),
    User(store),
    Login(store),
    SelectImport(store),
    CreateFirst(store),
    PlantBasic(store),
    PageNotFound(),
    Redirect
  ]
})

export default createRoutes
