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
    mainTitle: 'Tim Doppenberg',
    text: 'Some text from Vue!'
  }
});

let lastPos = 0;

window.addEventListener('scroll', e => {
  let flag = false;
  const currentPos = window.scrollY;
  if (currentPos <= lastPos) {
    window.setTimeout(() => {
      console.log('end');
    }, 50);
  } else {
    lastPos = currentPos;
  }
});
