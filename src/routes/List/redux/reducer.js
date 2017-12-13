import * as actionType from './constant'

const initState = {
  plantList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_PLANT_LIST_SUCCESS:
      return ({ ...state, plantList: action.data })
    case actionType.GET_PLANT_LIST_FAIL:
      return ({ ...state })
  }
  return state
}
