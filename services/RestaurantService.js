import axios from 'axios'

const restaurantApiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json '
  }
})

export default {
  async fetchItems() {
    const response = await restaurantApiClient.get('/menu/all')
    return response.data
  },
  sendOrder(order) {
    return restaurantApiClient({
      method: 'post',
      url: '/order/save',
      data: {
        customerName: order.customerName,
        address: order.address,
        phoneNumber: order.phoneNumber,
        comment: order.comment,
        totalItemPriceDollar: order.totalItemPriceDollar,
        deliveryPriceDollar: order.deliveryPriceDollar,
        itemsAmount: order.itemsAmount
      }
    })
  }
}
