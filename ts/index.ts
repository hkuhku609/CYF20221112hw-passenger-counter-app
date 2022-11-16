export {} //have to add this code line because "Cannot redeclare block-scoped variable 'count'" msg
let count = 0
let countEl = document.getElementById('count-el') as HTMLElement
let saveEl = document.getElementById('save-el') as HTMLElement

countEl.textContent = count.toString()

const increment = (): void => {
  count++ //count+=1
  countEl.textContent = count.toString()
}

const save = (): void => {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = String(0)
  count = 0
}
