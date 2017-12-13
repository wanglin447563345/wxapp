import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: 'basic',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./containers/Index').default
      const reducer = require('./redux/reducer').default
      injectReducer(store, { key: 'detailBasic', reducer })
      cb(null, Index)
    })
  }
})
