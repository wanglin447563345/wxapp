import * as actionType from './contant'

const initState = {
  userInfo: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_USER_INFO_SUCCESS:
      return ({ ...state, userInfo: action.data })
    case actionType.GET_USER_INFO_FAIL:
      return ({ ...state })
  }
  return state
}
