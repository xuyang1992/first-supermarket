

import originAxios from 'axios'

class axios{
  constructor(){
    this.request = function(config){
      const instance = originAxios.create({
        baseURL: "请加微信",
        timeout: 5000
      })
      return instance(config)
    }
  }
}


export default axios