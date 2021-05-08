const searchInput = document.getElementById('search-input')
const searchIco = document.getElementById('search-ico')

searchInput.addEventListener('focus', event => {
    searchIco.classList.add('focus')
})
searchInput.addEventListener('focusout', event => {
    searchIco.classList.remove('focus')
})