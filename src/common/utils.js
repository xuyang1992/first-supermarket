class commonJs{
  constructor(){
    //防抖函数
    this.debounce=function(func,delay = 100){
      
      let timer = null
      return function(...args){
        if(timer){clearTimeout(timer)}
         timer = setTimeout(() =>{
          func.apply(this,args)
        },delay)
      }
    }
  }
}

export default new commonJs