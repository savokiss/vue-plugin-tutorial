import TalAlert from './TalAlert'

// 全局唯一
let instance

// for install
export default {
  install (Vue, options) {
    let AlertConstructor = Vue.extend(TalAlert)

    function alert (options) {
      // 处理选项
      options = options || {}
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }

      // 调用时才挂载dom
      if (!instance) {
        // 拿到组件实例
        instance = new AlertConstructor({
          data: options
        }).$mount()
        document.body.appendChild(instance.$el)
      }
      Object.assign(instance, options)
      instance.visible = true

      // 返回 promise
      return new Promise((resolve, reject) => {
        instance.resolve = resolve
        instance.reject = reject
      })
    }
    Vue.alert = Vue.prototype.$alert = alert
  }
}
