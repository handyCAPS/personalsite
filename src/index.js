// const images = ['waves', 'seastar', 'road', 'lake'];
// window.setInterval(() => {
//   const img = images.shift();
//   document.getElementById(
//     'bottomLeft'
//   ).style.backgroundImage = `url(./public/img/${img}.jpg)`;
//   images.push(img);
// }, 5000);

import Vue from 'vue/dist/vue.esm.js';

new Vue({
  el: '#first',
  data: {
    text: 'Some text from Vue!'
  }
});
