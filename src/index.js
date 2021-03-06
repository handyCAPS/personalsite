// const images = ['waves', 'seastar', 'road', 'lake'];
// window.setInterval(() => {
//   const img = images.shift();
//   document.getElementById(
//     'bottomLeft'
//   ).style.backgroundImage = `url(./public/img/${img}.jpg)`;
//   images.push(img);
// }, 5000);

import Vue from 'vue/dist/vue.esm.js';
import throttle from 'lodash/throttle';

new Vue({
  el: '#first',
  data: {
    mainTitle: 'Tim Doppenberg',
    text: 'Some text from Vue!'
  }
});

// let lastPos = 0;

// window.addEventListener('scroll', e => {
//   let flag = false;
//   const currentPos = window.scrollY;
//   if (currentPos <= lastPos) {
//     window.setTimeout(() => {
//       console.log('end');
//     }, 50);
//   } else {
//     lastPos = currentPos;
//   }
// });

new Vue({
  el: '#bottomLeft',
  methods: {
    handleMouseOver(event) {
      this.mousePos.x = event.clientX;
      this.mousePos.y = event.clientY;
    },
    getMousePos() {
      if (!this.mousePos) {
        return 800;
      }
      return this.mousePos.x === 0
        ? 400
        : Math.max(400, 200 + Math.round(this.mousePos.x / 100) * 100);
    },
    setImage(index) {
      if (!this.timedout) {
        const width = 200 + index * 100;
        const height = Math.round(width * 0.75 / 100) * 100;
        this.timedout = true;
        window.setTimeout(() => {
          this.timedout = false;
        }, 5000);
        this.imageString = `https://placecage.com/${width}/${height}`;
      }
    }
  },
  data() {
    return {
      mousePos: {
        x: 0,
        y: 0
      },
      timedout: false,
      imageString: 'https://placecage.com/400/300'
    };
  },
  computed: {
    styleObject() {
      this.setImage(Math.round(this.mousePos.x / 100));
      return {
        backgroundImage: `url(${this.imageString})`,
        backgroundSize: 'cover'
      };
    }
  }
});
