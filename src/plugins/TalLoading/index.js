import TalLoading from './TalLoading'

let instance

const plugin = {
  install (Vue, options) {
    let LoadingConstructor = Vue.extend(TalLoading)

    // 安装时即挂载
    if (!instance) {
      instance = new LoadingConstructor({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }

    const loading = {
      on (options = {}) {
        if (typeof options === 'string') {
          instance.text = options
        } else if (typeof options === 'object') {
          Object.assign(instance, options)
        }
        instance.show = true
      },
      off () {
        instance.show = false
      }
    }

    Vue.loading = Vue.prototype.$loading = loading
  }
}

export default plugin
export const install = plugin.install
