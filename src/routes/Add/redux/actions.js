import * as actionType from './constant'
import { Toast } from 'antd-mobile'
import { browserHistory } from 'react-router'
import Service from '../../../services/Service'
import Util from '../../../util/Util'
const currency = ['RMB', '€', 'A$']

export const create_plant_success = (data) => {
  return {
    type: actionType.CREATE_PLANT_SUCCESS,
    data
  }
}

export const create_plant_fail = () => {
  return {
    type: actionType.CREATE_PLANT_FAIL
  }
}

export const create_plant = (params) => {
  return dispatch => {
    const formData = {
      plant_name: params.plant_name,
      system_size: params.system_size,
      feed_in_teriff: params.feed_in_teriff,
      currency: currency[params.currency[0]],
      module_sn: params.module_sn,
      plant_latitude: params.plant_latitude,
      plant_longitude: params.plant_longitude,
      country_id: params.country_id,
      province_id: params.province_id,
      city_id: params.city_id,
      address: params.address,
      time_zone: 8,
      is_public: 1
    }
    Service.createPlant(formData).then(data => {
      if (data.errno === 0) {
        browserHistory.push('/wx/list')
        Toast.success('创建成功')
        dispatch(create_plant_success())
      } else {
        Toast.fail(data.errmsg)
        dispatch(create_plant_fail())
      }
    })
  }
}
