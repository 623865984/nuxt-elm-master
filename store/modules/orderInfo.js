/**
 * 订单信息
 */
const state = {
  orderInfo: {
    deliveryPrice: 0,
    selectFoods: {},
    shopName: '秀苑餐厅',

  },
  count: {}
}

const getters = {
  orderInfo(state) {
    if (typeof window !== "undefined" && JSON.stringify(state.orderInfo) === '{}' && cookies.get('orderInfo')) {
      state.orderInfo = JSON.parse(cookies.get('orderInfo'));
    }
    return state.orderInfo;
  },
  getcount(state) {
      return state.count;
  },
}

const actions = {
    
}

const mutations = {
    setSeletFoods(state, value) {
        
            state.orderInfo.selectFoods = value;
        
        
    },
    setDeliveryPrice(state, value) {
        
            state.orderInfo.deliveryPrice = value;
        
    },
    setShopName(state, value) {
        
            state.orderInfo.shopName = value;
        
    },
    setcount(state,value){
        state.count = value;
    }

}

export default {
  state,
  actions,
  getters,
  mutations
}
