import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./containers/Index').default
      const reducer = require('./redux/reducer').default
      injectReducer(store, { key: 'user', reducer })
      cb(null, Index)
    })
  }
})
