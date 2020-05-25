import axios from './request'

class detailAxios extends axios{
  constructor(){
    super()
  }
  getDetail(iid){
    return this.request({
      url:"/detail",
      params:{
        iid
      }
    })
  }
}

export default new detailAxios  