// const Counter = {
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   mounted() {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }
// }
// Vue.createApp(Counter).mount('#counter')
// const TwoWayBinding = {
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }
//
// Vue.createApp(TwoWayBinding).mount('#two-way-binding')

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
