import * as actionType from './constant'
import Service from '../../../services/Service'
import { Toast } from 'antd-mobile'

// 获取电站列表
export const get_plant_list_success = (data) => {
  return {
    type: actionType.GET_PLANT_LIST_SUCCESS,
    data
  }
}

export const get_plant_list_fail = () => {
  return {
    type: actionType.GET_PLANT_LIST_FAIL
  }
}

export const get_plant_list = (params) => {
  return dispatch => {
    Service.getPlantList(params).then(data => {
      if (data.errno === 0) {
        dispatch(get_plant_list_success(data.data))
      } else {
        dispatch(get_plant_list_fail())
        Toast.info('电站列表获取失败')
      }
    })
  }
}
