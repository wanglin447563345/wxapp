export default {
  path: '*',
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/wx/404')
    }
  }
}
