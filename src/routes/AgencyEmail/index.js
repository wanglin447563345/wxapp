export default (store) => ({
  path: 'email',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('./components/Index').default
      cb(null, Index)
    })
  }
})

