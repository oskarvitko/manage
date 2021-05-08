const select = document.querySelector('#select')
const selectCurrent = select.querySelector('#select-current')
const selectHeader = select.querySelector('#select-header')
const selectOptions = select.querySelectorAll('#select-option')
const selectBg = select.querySelector('#select-bg')

selectHeader.addEventListener('click', event => {
    select.classList.toggle('active')
})

selectOptions.forEach(option => option.addEventListener('click', event => {
    selectCurrent.dataset.value = event.target.dataset.value
    selectCurrent.innerText = event.target.innerText
    select.classList.remove('active')
}))


selectBg.addEventListener('click', event => {
    select.classList.remove('active')
})