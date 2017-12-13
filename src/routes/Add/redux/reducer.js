import * as actionType from './constant'

const initState = {

}
export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CREATE_PLANT_ING:
      return ({ ...state })
    case actionType.CREATE_PLANT_SUCCESS:
      return ({ ...state })
    case actionType.CREATE_PLANT_FAIL:
      return ({ ...state })
  }
  return state  // 返回默认state
}
