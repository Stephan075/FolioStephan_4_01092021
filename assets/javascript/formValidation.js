// Séléctionner nos éléments
const formData = document.querySelectorAll('.formData')
// console.log(formData)

const errors = formData[0].dataset.errorvisible
// écouter le submit du form et bloquer la soumission du formulaire par défaut
const form = document.querySelector('form')

// On vérifie que :
// L'utilisateur rentre bien un prénom qui comporte 2 caractères minimum ou plus
//que le champ ne soit pas vide
function firstValid() {
  const firstNameInput = document.querySelector('#first').value
  const isFirstNameValid = firstNameInput.trim().length >= 2

  if (isFirstNameValid) {
    formData[0].setAttribute('data-errorVisible', 'false')
  } else {
    formData[0].setAttribute('data-errorVisible', 'true')
  }

  return isFirstNameValid
}
// On vérifie que :
// L'utilisateur rentre bien un nom qui comporte 2 caractères minimum ou plus
//que le champ ne soit pas vide
function lastValid() {
  const lastNameInput = document.querySelector('#last').value
  const isLastNameValid = lastNameInput.trim().length >= 2

  if (isLastNameValid) {
    formData[1].setAttribute('data-errorVisible', 'false')
  } else {
    formData[1].setAttribute('data-errorVisible', 'true')
  }

  return isLastNameValid
}

// On vérifie que :
// L'utilisateur rentre un mail valide grâce au vérificateur regEx
// Que le champ ne soit pas vide
function emailValid() {
  const emailInput = document.querySelector('#email')
  const regExMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isEmailValid =
    !emailInput.value === '' || emailInput.value.trim().match(regExMail)

  if (isEmailValid) {
    formData[2].setAttribute('data-errorVisible', 'false')
    return true
  } else {
    formData[2].setAttribute('data-errorVisible', 'true')
    return false
  }
}

//

// On calcule la difference entre la date de maintenant et la date entré par l'utilisateur

function getAge(date) {
  // getTime()  ===> nous return un timestamps
  const diff = Date.now() - date.getTime()
  const age = new Date(diff)
  return Math.abs(age.getUTCFullYear() - 1970)
}

// On vérifie si l'age est suppérieur a 13ans ou qui retourne pas le message  'Invalid Date'  cela nous permettra dafficher un message d'erreur
function verifAge(date) {
  // Age minimun
  const minAge = 13

  if (
    getAge(date) < minAge ||
    date === 'Invalid Date' ||
    date.toString() === 'Invalid Date' // retourne une chaîne de caractères
  ) {
    formData[3].setAttribute('data-errorVisible', 'true')
    return false
  } else {
    formData[3].setAttribute('data-errorVisible', 'false')
    return true
  }
}

// On vérifie que :
// L'utilisateur rentre une date valide
function birthdayValid() {
  let birthday = document.querySelector('#birthdate').value

  // On transforme la date saisis par l'utilisateur en objet Date
  birthday = new Date(birthday)
  // function qui vérifie la date
  if (verifAge(birthday)) {
    return true
  }
}

// On vérifie que :
//  l'utilisateur saisit bien un nombre,
// Que le champ ne soit pas vide
// Que l'utilisateur ne rentre pas des nombres négatifs
function verifNombre() {
  const numberInput = document.querySelector('#quantity')
  if (
    isNaN(numberInput.value) ||
    numberInput.value === '' ||
    numberInput.value < 0
  ) {
    formData[4].setAttribute('data-errorVisible', 'true')
    return false
  } else {
    formData[4].setAttribute('data-errorVisible', 'false')
    return true
  }
}

// On vérifie que :
// Au moins un btn radio est checked avant de continuer
function verifcheckboxRadioChecked() {
  // séléctionner toutes les btn radio
  const allRadios = document.querySelectorAll('#allRadios .checkbox-input')
  let cityValid = false

  // On utilise la boucle for qui nous permettra de répéter un bloc d'instructions jusqu'à ce qu'un test ne soit plus vérifié
  for (let i = 0; i < allRadios.length; i++) {
    // Si un btn radios est checked ou aps
    const radioChecked = allRadios[i].checked

    // console.log(allRadios[i])
    if (radioChecked) {
      // console.log('checked')
      formData[5].setAttribute('data-errorVisible', 'false')
      cityValid = true
      break // On utilise break qui permet d'interrompre l'exécution
    } else {
      // console.log('not checked')
      formData[5].setAttribute('data-errorVisible', 'true')
    }
  }
  // console.log(cityValid)
  return cityValid
}

// On vérifie que :
// La checkbox des conditions d'utilisation est bien acceptée
function verifConditionsOfUse() {
  const terms = document.querySelector('#checkbox1')
  // On regarde l'état du btn
  const termsChecked = terms.checked
  // console.log(termsChecked)

  // Si la checkbox n'est pas cochée on affiche l'erreur
  if (termsChecked) {
    formData[6].setAttribute('data-errorVisible', 'false')
  } else {
    formData[6].setAttribute('data-errorVisible', 'true')
  }
  // console.log(termsChecked)
  return termsChecked
}

// Toutes les vérifications à faire
function allValidation() {
  firstValid()
  lastValid()
  emailValid()
  birthdayValid()
  verifNombre()
  verifcheckboxRadioChecked()
  verifConditionsOfUse()
}

// function qui nous permettra de vérifier si tout les champs sont bien validés avant de continuer

function formValid() {
  if (
    firstValid() &&
    lastValid() &&
    emailValid() &&
    birthdayValid() &&
    verifNombre() &&
    verifcheckboxRadioChecked() &&
    verifConditionsOfUse()
  ) {
    return true
  }
  return false
}

// On crée la partie du modal remerciements une fois le formulaire validé
function createThanksModal() {
  const div = document.createElement('div')
  div.className = 'content-thank'
  div.innerHTML = `
              <div class="thank-body">
                <p class="text-thank">Merci !<br /> Votre réservation a été reçue.</p>
              </div>
              <input class="button btn-submit button-close" type="submit" value="Fermer" />
              `

  return div
}

// évènement qui s'active une fois qu'on clique sur le btn "C'est parti"
form.addEventListener('submit', (event) => {
  event.preventDefault()

  // return birthdayValid()

  // si tout les champs son valides on affiche la page de remerciements
  if (formValid()) {
    form.style.display = 'none'
    thankBg.append(createThanksModal())

    // Une fois la page de remerciements affichée on peut rechercher le btn fermer et travailler dessus
    const btnClose = document.querySelector('.button-close')
    // Fermer le modal avec le btn fermer
    btnClose.addEventListener('click', function () {
      bground.style.display = 'none'
    })
  } else {
    // On relance la fonction de vérification
    allValidation()
  }
})
