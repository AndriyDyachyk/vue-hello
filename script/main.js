console.log('principi.js loaded');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Prima volta con Vue'
    }
  }
}).mount('#app')