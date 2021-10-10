// vue3的 Composition API 的奥义，
// 不要傻傻的把代码都写到setup里面了，分出来写才是王道。
// 便于复用，可以写到单独的js文件里面
const testManage = () => {
  const value = Vue.ref('你好，世界') // 相当于data
  const click = () => { // 相当于 methods 里面的事件
    value.value = '好的，收到！' + new Date()
  }

  return {
    value,
    click
  }
}

// 定义 vue3 的对象
const vue3Composition = {
  setup() { // 传说中的setup
    // 使用上面的定义的“类”，分散setup内部的代码
    const { value, click } = testManage()

    return { // 返回给模板，否则模板访问不到。这里返回的是对象。
      value,
      click
    }
  }
}

const Counter = {
  data() {
    return {
      counter: 11,
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  },
  methods: {
    onChange: (str, event) => {
      console.log('onChange', str, event);
    },
    add: () => {

    },
  }
}


// 创建vue3的实例
const vm = Vue.createApp(Counter)
  // .use(myVuex) // 挂载vuex，myVuex在下面介绍
  // .use(router) // 挂载路由，router 在下面介绍
  .use(antd) // 加载 Ant Design Vue
  .use(ElementPlus) // 加载ElementPlus
  // .use(vant) // 加载vant
  .mount('#root') // 挂载Vue的app实例


// const vm = Vue.createApp({
//   el: '#root',
//   data: {
//     list: [],
//     message: '页面加载于 ' + new Date().toLocaleString()
//   },
//   methods: {
//     onChange: (str, event) => {
//       console.log('onChange', str, event);
//     }
//   }
// });
console.log(vm);