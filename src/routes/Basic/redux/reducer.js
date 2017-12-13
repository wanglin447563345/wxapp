import * as actionType from './constant'

const initState = {
  userStat: {},
  powerData: [],
  dayEnergy: {},
  monthEnergy: {},
  yearEnergy: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    // 获取用户所有电站概况的基本信息
    case actionType.GET_USER_STAT_SUCCESS:
      return ({ ...state, userStat: action.data })
    case actionType.GET_USER_STAT_FAIL:
      return ({ ...state })
    // 获取实时功率
    case actionType.GET_USER_POWER_DATA_SUCCESS:
      return ({ ...state, powerData: action.data })
    case actionType.GET_USER_POWER_DATA_FAIL:
      return ({ ...state })
    // 获取日发电两
    case actionType.GET_USER_DAY_ENERGY_SUCCESS:
      return ({ ...state, dayEnergy:action.data })
    case actionType.GET_USER_DAY_ENERGY_FAIL:
      return ({ ...state })
    // 获取月发电两
    case actionType.GET_USER_MONTH_ENERGY_SUCCESS:
      return ({ ...state, monthEnergy:action.data })
    case actionType.GET_USER_MONTH_ENERGY_FAIL:
      return ({ ...state })
    // 获取年发电两
    case actionType.GET_USER_YEAR_ENERGY_SUCCESS:
      return ({ ...state, yearEnergy:action.data })
    case actionType.GET_USER_YEAR_ENERGY_FAIL:
      return ({ ...state })
  }
  return state // 默认返回的state
}
