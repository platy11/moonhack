const moment = require('moment')
const suncalc = require('suncalc')

window.onload = function (event) {
  let h1 = document.querySelector('h1')

  let str = 'The current moon phase (as of '
  str += moment().format('h:mm a,  Do MMMM YYYY')
  str += ') is a'
  h1.textContent = str;
}
