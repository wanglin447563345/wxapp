import * as actionType from './constant'

const initState = {
  plantInfo: {},
  powerData: [],
  dayEnergy: {},
  monthEnergy: {},
  yearEnergy: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    // 获取电站基本信息
    case actionType.GET_PLANT_INFO_SUCCESS:
      return ({ ...state, plantInfo: action.data })
    case actionType.GET_PLANT_INFO_FAIL:
      return ({ ...state })
    // 获取实时功率
    case actionType.GET_PLANT_POWER_DATA_SUCCESS:
      return ({ ...state, powerData: action.data })
    case actionType.GET_PLANT_POWER_DATA_FAIL:
      return ({ ...state })
    // 获取日发电两
    case actionType.GET_PLANT_DAY_ENERGY_SUCCESS:
      return ({ ...state, dayEnergy:action.data })
    case actionType.GET_PLANT_DAY_ENERGY_FAIL:
      return ({ ...state })
    // 获取月发电两
    case actionType.GET_PLANT_MONTH_ENERGY_SUCCESS:
      return ({ ...state, monthEnergy:action.data })
    case actionType.GET_PLANT_MONTH_ENERGY_FAIL:
      return ({ ...state })
    // 获取年发电两
    case actionType.GET_PLANT_YEAR_ENERGY_SUCCESS:
      return ({ ...state, yearEnergy:action.data })
    case actionType.GET_PLANT_YEAR_ENERGY_FAIL:
      return ({ ...state })
  }
  return state
}
