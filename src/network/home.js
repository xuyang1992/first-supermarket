import axios from "./request"

 

/* const getHomeMultidata = function(){
  return request({
    url: "/home/multidata"
  })
} */
class homeAxios extends axios{
  constructor(){
    super()
  }
  getHomeMultidata(){
    return this.request({
      url: "/home/multidata"
    })
  }
  getHomeGoods(type,page){
    return this.request({
      url: '/home/data',
      params:{
        type: type,
        page: page
      }
    })
  }
}

const getHomeAxios = new homeAxios()


export default  getHomeAxios