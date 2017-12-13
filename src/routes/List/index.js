import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'list',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./containers/Index').default
      const reducer = require('./redux/reducer').default
      injectReducer(store, { key: 'plantList', reducer })
      cb(null, Index)
    })
  }
})
