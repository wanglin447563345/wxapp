export default (store) => ({
  path: 'warn',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./components/Index').default
      cb(null, Index)
    })
  }
})
