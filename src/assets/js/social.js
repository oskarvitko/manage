const socialList = document.querySelector('#social-list')
const socialShare = document.querySelector('#social-share')

socialShare.addEventListener('click', event => {
    socialList.classList.toggle('active')
})