'use strict'
exports.__esModule = true //If you would like to run on browser, please del this code line
var count = 0
var countEl = document.getElementById('count-el')
var saveEl = document.getElementById('save-el')
countEl.textContent = count.toString()
var increment = function () {
  count++ //count+=1
  countEl.textContent = count.toString()
}
var save = function () {
  var countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = String(0)
  count = 0
}
