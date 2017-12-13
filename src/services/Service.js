import Http from '../util/httpUtil'

const Service = {}

// 绑定已有账号登录
Service.bindingLogin = (params) => {
  const url = `${window.dataUrl}/wx/user/bind`
  return Http.post(url, params, null)
}

// 跳过微信直接登录
Service.jumpLogin = (params) => {
  const url = `${window.dataUrl}/wx/user/skip`
  return Http.post(url, params, null)
}

// 获取调用微信接口配置参数
Service.getWxParams = (params) => {
  const url = `${window.dataUrl}/wx/user/sign`
  return Http.post(url, params, null)
}

// 验证模块序列号是否已被占用
Service.checkModuleSn = (params) => {
  const url = `${window.dataUrl}/module/web/get_by_sn`
  return Http.post(url, params, null)
}

// 验证经销商邮箱
Service.checkAgencyEmail = (params) => {
  const url = `${window.dataUrl}/user/user/get`
  return Http.post(url, params, null)
}

// 创建电站
Service.createPlant = (params) => {
  const url = `${window.dataUrl}/plant/plant/add`
  return Http.post(url, params, null)
}
// 获取用户统计信息
Service.getUserStat = (params) => {
  const url = `${window.dataUrl}/user/user/stat`
  return Http.post(url, params, null)
}

// 获取电站列表
Service.getPlantList = (params) => {
  const url = `${window.dataUrl}/plant/plant/list`
  return Http.post(url, params, null)
}

// 删除电站
Service.deletePlant = (params) => {
  const url = `${window.dataUrl}/plant/plant/delete`
  return Http.post(url, params, null)
}

// 获取用户详情
Service.getUserInfo = (params) => {
  const url = `${window.dataUrl}/user/user/get`
  return Http.post(url, params, null)
}

// 更改用户信息
Service.updateUserInfo = (params) => {
  const url = `${window.dataUrl}/user/user/update`
  return Http.post(url, params, null)
}

// 获取电站详情
Service.getPlantInfo = (params) => {
  const url = `${window.dataUrl}/plant/plant/get`
  return Http.post(url, params, null)
}

// 获取采集器列表
Service.getDetailList = (params) => {
  const url = `${window.dataUrl}/plant/plant/get_device_list`
  return Http.post(url, params, null)
}

// 删除采集器
Service.deleteMdule = (params) => {
  const url = `${window.dataUrl}/plant/module/delete`
  return Http.post(url, params, null)
}

// 获取用户所有电站实时发电功率
Service.getUserPowerData = (params) => {
  const url = `${window.dataUrl}/plant/user/get_power_data`
  return Http.post(url, params, null)
}

// 获取用户所有电站日发电量
Service.getUserDayEnergy = (params) => {
  const url = `${window.dataUrl}/plant/user/get_daily_energy`
  return Http.post(url, params, null)
}

// 获取用户所有电站月发电量
Service.getUserMonthEnergy = (params) => {
  const url = `${window.dataUrl}/plant/user/get_monthly_energy`
  return Http.post(url, params, null)
}

// 获取用户所有电站年发电量
Service.getUserYearEnergy = (params) => {
  const url = `${window.dataUrl}/plant/user/get_yearly_energy`
  return Http.post(url, params, null)
}

// 获取电站实时发电功率
Service.getPlantPowerData = (params) => {
  const url = `${window.dataUrl}/plant/plant/get_power_data`
  return Http.post(url, params, null)
}

// 获取电站日发电量
Service.getPlantDayEnergy = (params) => {
  const url = `${window.dataUrl}/plant/plant/get_daily_energy`
  return Http.post(url, params, null)
}

// 获取电站月发电量
Service.getPlantMonthEnergy = (params) => {
  const url = `${window.dataUrl}/plant/plant/get_monthly_energy`
  return Http.post(url, params, null)
}

// 获取电站年发电量
Service.getPlantYearEnergy = (params) => {
  const url = `${window.dataUrl}/plant/plant/get_yearly_energy`
  return Http.post(url, params, null)
}

// 添加模块
Service.addModule = (params) => {
  const url = `${window.dataUrl}/plant/module/add`
  return Http.post(url, params, null)
}

export default Service
