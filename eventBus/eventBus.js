class EventBus {
  constructor () {
    this.eventBusObj = {}
    this.eventId = 0
  }
  $on (eventName, callBack) {
    console.log('监听了事件' + eventName);
    if (!this.eventBusObj[eventName]) {
      this.eventBusObj[eventName] = {}
    }
    this.eventId++
    this.eventBusObj[eventName][this.eventId] = callBack
    return this.eventId
  }
  $emit (eventName) {
    console.log('触发了事件' + eventName);
    if (this.eventBusObj[eventName]) {
      // for (let i = 0; i<this.eventBusObj[eventName].length; i++ ) {
      //   this.eventBusObj[eventName][i]()
      // }
      for (var id in this.eventBusObj[eventName]) {
        typeof  this.eventBusObj[eventName][id] == "function" ? this.eventBusObj[eventName][id]() : ""
      }
    }
  }
  $off (id,eventName) {
    console.log('解除了了事件' + eventName);
    if (this.eventBusObj[eventName][id]) {
      delete this.eventBusObj[eventName][id]
    }
  }
}
const EB = new EventBus()
const id1 = EB.$on('click', ()=>{
  console.log('click')
})
EB.$off(id1, "click")
EB.$emit('click')