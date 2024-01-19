const addressBtn = document.querySelector('#address-form')

const addressClose = document.querySelector('#address-close')

const rightBtn = document.querySelector('.fa-chevron-circle-right')
const leftBtn = document.querySelector('.fa-chevron-circle-left')
let index = 0;
const imgNum = document.querySelectorAll('.slider-content img')

addressBtn.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = 'flex'
})

addressClose.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = 'none'
})

// slider
rightBtn.addEventListener("click", function() {
    index = index + 1
    if(index > imgNum.length - 1) {
        index = 0;
    }
    document.querySelector('.slider-content').style.right = index *100+"%"
})

leftBtn.addEventListener("click", function() {
    index = index + 1
    if(index <= imgNum.length - 1) {
        index = imgNum.length;
    }
    document.querySelector('.slider-content').style.right = index *100+"%"
})
