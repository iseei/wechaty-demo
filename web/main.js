
const app = new Vue({
  el: '#root',
  data: {
    list: [],
    message: '页面加载于 ' + new Date().toLocaleString()
  },
  methods: {
    onChange: () => {}
  }
});

// app.use(Antd);

console.log(app);