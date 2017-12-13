import * as actionType from './constant'
import Service from '../../../../services/Service'
import { Toast } from 'antd-mobile'

export const get_detail_list_success = (data) => {
  return {
    type: actionType.GET_DETAIL_LIST_SUCCESS,
    data
  }
}

export const get_detail_list_fail = (data) => {
  return {
    type: actionType.GET_DETAIL_LIST_FAIL
  }
}

export const get_detail_list = (params) => {
  return dispatch => {
    Service.getDetailList(params).then(data => {
      if (data.errno === 0) {
        dispatch(get_detail_list_success(data.data))
      } else {
        dispatch(get_detail_list_fail())
        Toast.fail('逆变器裂变获取失败')
      }
    })
  }
}
