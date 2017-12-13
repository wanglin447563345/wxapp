import * as actionType from './contant'
import Service from '../../../services/Service'

export const get_user_info_success = (data) => {
  return {
    type: actionType.GET_USER_INFO_SUCCESS,
    data
  }
}
export const get_user_info_fail = () => {
  return {
    type: actionType.GET_USER_INFO_FAIL
  }
}

export const get_user_info = () => {
  return dispatch => {
    Service.getUserInfo().then(data => {
      if (data.errno === 0) {
        dispatch(get_user_info_success(data.data))
      } else {
        dispatch(get_user_info_fail())
      }
    })
  }
}
