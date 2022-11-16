let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

countEl.textContent = count

const increment = () => {
  count++ //count+=1
  countEl.textContent = count
}

const save = () => {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
