export default () => ({
  path: '404',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PageNotFound = require('./components/Index').default
      cb(null, PageNotFound)
    })
  }
})
