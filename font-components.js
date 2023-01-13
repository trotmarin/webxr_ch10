// See https://aframe.io/docs/1.0.0/components/text.html#custom-fonts
const textFontComponent = () => ({
  schema: {
    'color': {default: ''},
  },
  init() {
    const font = require('./assets/fonts/Monoid.fnt')
    const fontImage = require('./assets/fonts/Monoid.png')
    const attr =
    `value: text-component, custom font (local);
    width: 1.3;
    color: ${this.data.color};
    font: ${font};
    fontImage: ${fontImage};
    align: center;`
    this.el.setAttribute('text', attr)
  },
})
