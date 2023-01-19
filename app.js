// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
// import './index.css'
// import {nextButtonComponent} from './next-button'

// AFRAME.registerComponent('alert-message')
AFRAME.registerComponent('next-button', {
        schema: {
          txt: {default:'default'}
        },
        init: function () {
          var data = this.data;
          var el = document.getElementById('next-button');
          el.addEventListener('click', function () {
            //.location.href='tel:010-9037-5858';
            console.log("next button");
          });
        }
      });
AFRAME.registerComponent('import-button', {
        schema: {
          txt: {default:'default'}
        },
        init: function () {
          var data = this.data;
          var el = document.getElementById('import-button');
          el.addEventListener('click', function () {
            // document.getElementById('alert-message').setAttribute('value', 'New Text');
            console.log("import button");
            document.getElementById('alert-area').style.display = 'block';
            setTimeout(function(){
             document.getElementById('alert-area').style.display = 'none';
            }, 2000);
          });
        }
      });

let alpha = 0;

if ('ondeviceorientation' in window) {
  window.addEventListener('deviceorientation', (event) => {
    var alpha = event.alpha;
    console.log("alpha", alpha);
  });
} else {
  console.log("Device Orientation API not supported.");
}

let compass = document.getElementById("compass");

if ('ondeviceorientation' in window) {
  window.addEventListener('deviceorientation', (event) => {
    var alpha = event.alpha;
    compass.style.transform = `rotate(${alpha}deg)`;
  });
} else {
  console.log("Device Orientation API not supported.");
}