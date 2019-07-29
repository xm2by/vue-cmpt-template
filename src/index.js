import HelloWorld from './components/HelloWorld.vue'

const install = (Vue) => {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default {
  version: '1.0.0',
  install,
  HelloWorld
}
