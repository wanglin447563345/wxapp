import * as actionType from './constant'

const initState = {
  detailList: []
}

export default (state=initState, action) => {
  switch (action.type) {
    case actionType.GET_DETAIL_LIST_SUCCESS:
      return ({ ...state, detailList: action.data })
    case actionType.GET_DETAIL_LIST_FAIL:
      return ({ ...state })
  }
  return state
}
