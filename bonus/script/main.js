console.log('principi.js loaded');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Prima volta con Vue',
      image: "./img/part-blurry-image.webp"
    }
  }
}).mount('#app')