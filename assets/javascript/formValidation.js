// Séléctionner nos Elements
const formData = document.querySelectorAll('.formData')
const errors = formData[0].dataset.errorvisible
// écouter le submit du form et bloqué la soumission du formulaire par défaut
const form = document.querySelector('form')

// On vérifie que :
// L'utilisateur rentre bien un prénom qui 2 caractères minimum ou plus
//que le champ ne soit pas vide
function firstValid() {
  const firstNameInput = document.querySelector('#first')

  if (firstNameInput.value.length < 2 || firstNameInput.value === '') {
    formData[0].setAttribute('data-errorVisible', 'true')
    return true
  } else {
    formData[0].setAttribute('data-errorVisible', 'false')
    return false
  }
}
// On vérifie que :
// L'utilisateur rentre bien un nom qui 2 caractères minimum ou plus
//que le champ ne soit pas vide
function lastValid() {
  const lastNameInput = document.querySelector('#last')

  if (lastNameInput.value.length < 2 || lastNameInput.value === '') {
    formData[1].setAttribute('data-errorVisible', 'true')
    return true
  } else {
    formData[1].setAttribute('data-errorVisible', 'false')
    return false
  }
}

// On vérifie que :
// L'utilisateur rentre un mail valide grace vérificateur au regEx
// que le champ ne soit pas vide
function emailValid() {
  const emailInput = document.querySelector('#email')
  const regExMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!emailInput.value === '' || emailInput.value.trim().match(regExMail)) {
    formData[2].setAttribute('data-errorVisible', 'false')
    return false
  } else {
    formData[2].setAttribute('data-errorVisible', 'true')
    return true
  }
}

// On vérifie que :
//  l'utilisateur entre bien un nombre,
// que le champ ne soit pas vide
// Que lutilisateur ne rentre pas des nombre n'égative
function verifNombre() {
  const numberInput = document.querySelector('#quantity')
  if (
    isNaN(numberInput.value) ||
    numberInput.value === '' ||
    numberInput.value < 0
  ) {
    formData[4].setAttribute('data-errorVisible', 'true')
    return true
  } else {
    formData[4].setAttribute('data-errorVisible', 'false')
    return false
  }
}

// On vérifie que :
// Au moins un btn radio est checked avant de continuer
function verifcheckboxRadioChecked() {
  // séléctionner toutes les btn radio
  const allRadios = document.querySelectorAll('#allRadios .checkbox-input')

  // On utilise la boucle for qui nous permettra de répète un bloc d'instructions jusqu'à ce qu'un test ne soit plus vérifié
  for (let i = 0; i < allRadios.length; i++) {
    // console.log(allRadios[i])
    if (allRadios[i].checked) {
      // console.log('checked')
      formData[5].setAttribute('data-errorVisible', 'false')
      break // On utilise break qui permet d'interrompre l'exécution
    } else {
      // console.log('not checked')
      formData[5].setAttribute('data-errorVisible', 'true')
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  firstValid()
  lastValid()
  emailValid()
  verifNombre()
  verifcheckboxRadioChecked()
})
