export default () => ({
  path: 'jump',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Jump= require('./components/Index').default
      cb(null, Jump)
    })
  }
})
