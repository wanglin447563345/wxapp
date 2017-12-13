import * as actionType from './constant'
import Service from '../../../services/Service'
import { Toast } from 'antd-mobile'
import Moment from 'moment'

// 获取用户所有电站概况的基本信息
export const get_user_stat_success = (data) => {
  return {
    type: actionType.GET_USER_STAT_SUCCESS,
    data
  }
}

export const get_user_stat_fail = () => {
  return {
    type: actionType.GET_USER_STAT_FAIL
  }
}

export const get_user_stat = (params) => {
  return dispatch => {
    Service.getUserStat(params).then(data => {
      if (data.errno === 0) {
        dispatch(get_user_stat_success(data.data))
      } else {
        dispatch(get_user_stat_fail())
        Toast.fail(data.errmsg)
      }
    })
  }
}

// 获取实时功率
export const get_user_power_data_success = (data) => {
  return {
    type: actionType.GET_USER_POWER_DATA_SUCCESS,
    data
  }
}

export const get_user_power_data_fail = () => {
  return {
    type: actionType.GET_USER_POWER_DATA_FAIL
  }
}

export const get_user_power_data = (params) => {
  return dispatch => {
    Service.getUserPowerData(params).then(data => {
      if (data.errno === 0) {
        const powerData = []
        for (let i = 0; i < data.data.data.length; i++) {
          const itemObj = {
            value:[Moment(data.data.data[i].c_time, 'X').format('YYYY/MM/DD HH:mm:ss'), data.data.data[i].power]
          }
          powerData.push(itemObj)
        }
        dispatch(get_user_power_data_success(powerData))
      } else {
        dispatch(get_user_power_data_fail())
        Toast.info(data.errmsg)
      }
    })
  }
}

// 获取日发电两
export const get_user_day_energy_success = (data) => {
  return {
    type: actionType.GET_USER_DAY_ENERGY_SUCCESS,
    data
  }
}

export const get_user_day_energy_fail = () => {
  return {
    type: actionType.GET_USER_DAY_ENERGY_FAIL
  }
}

export const get_user_day_energy = (params) => {
  return dispatch => {
    Service.getUserDayEnergy(params).then(data => {
      if (data.errno === 0) {
        const timer = []
        const datas = []
        for (let i = 0; i < data.data.data.length; i++) {
          timer.push(data.data.data[i].day)
          datas.push(data.data.data[i].energy)
        }
        const formData = { time:timer, data: datas }
        dispatch(get_user_day_energy_success(formData))
      } else {
        dispatch(get_user_day_energy_fail())
        Toast.info('日发电量获取失败')
      }
    })
  }
}

// 获取月发电量
export const get_user_month_energy_success = (data) => {
  return {
    type: actionType.GET_USER_MONTH_ENERGY_SUCCESS,
    data
  }
}

export const get_user_month_energy_fail = () => {
  return {
    type: actionType.GET_USER_MONTH_ENERGY_FAIL
  }
}

export const get_user_month_energy = (params) => {
  return dispatch => {
    Service.getUserMonthEnergy(params).then(data => {
      if (data.errno === 0) {
        const timer = []
        const datas = []
        for (let i = 0; i < data.data.data.length; i++) {
          timer.push(data.data.data[i].month)
          datas.push(data.data.data[i].energy)
        }
        const formData = { time:timer, data: datas }
        dispatch(get_user_month_energy_success(formData))
      } else {
        dispatch(get_user_month_energy_fail())
        Toast.info('月发电量获取失败')
      }
    })
  }
}

// 获取年发电量
export const get_user_year_energy_success = (data) => {
  return {
    type: actionType.GET_USER_YEAR_ENERGY_SUCCESS,
    data
  }
}

export const get_user_year_energy_fail = () => {
  return {
    type: actionType.GET_USER_YEAR_ENERGY_FAIL
  }
}

export const get_user_year_energy = (params) => {
  return dispatch => {
    Service.getUserYearEnergy(params).then(data => {
      if (data.errno === 0) {
        const timer = []
        const datas = []
        for (let i = 0; i < data.data.data.length; i++) {
          timer.push(data.data.data[i].year)
          datas.push(data.data.data[i].energy)
        }
        const formData = { time:timer, data: datas }
        dispatch(get_user_year_energy_success(formData))
      } else {
        dispatch(get_user_year_energy_fail())
        Toast.info('年发电量获取失败')
      }
    })
  }
}
