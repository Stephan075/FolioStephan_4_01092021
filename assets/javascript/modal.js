// navigation responsive
function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// Séléctionner nos éléments
const bground = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const modalClose = document.querySelector('.close')
const thankBtn = document.querySelectorAll('.thank-btn')
const thankBg = document.querySelector('.bground-thank')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  bground.style.display = 'block'
}

// close modal "x"
modalClose.addEventListener('click', () => {
  bground.style.display = 'none'
  // On réinitialise les valeurs de tous les éléments du formulaire
  form.reset()
})
