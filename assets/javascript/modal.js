// navigation responsive
function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const modalClose = document.querySelector('.close')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// close modal
modalClose.addEventListener('click', () => {
  modalbg.style.display = 'none'
})

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

console.log(modalClose)
//
