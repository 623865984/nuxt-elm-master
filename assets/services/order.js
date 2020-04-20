import request from '../utils/request';

const prefix = '/order';
// 获取订单数据
export const getOrderData = (params) => {
  return request({
    url: `${prefix}/getOrderData`,
    method: 'GET',
    data: params,
  })
}
// 创建订单
export const addOrder = (params) => {
  return request({
    url: `${prefix}/addOrder`,
    method: 'POST',
    data: params,
  })
}