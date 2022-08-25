// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function renderLike() {
  const heartsList = document.querySelectorAll('.like-glyph');
  const hearts = [...heartsList]
  
  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.preventDefault()
      const i = hearts.indexOf(heart,0)
      mimicServerCall().then(() => {
        if (hearts[i].textContent === EMPTY_HEART) {
          hearts[i].textContent = FULL_HEART
          hearts[i].classList.add('activated-heart')
        }
        else {
          hearts[i].textContent = EMPTY_HEART
          hearts[i].classList.remove('activated-heart')
        }
      })
      .catch(catchError)
    })
  })
}

function catchError(error) {
  const modal = document.querySelector('#modal')
  modal.classList.remove('hidden')
  modal.textContent = error
  setTimeout(() => {
    modal.className = 'hidden'
  }, 3000);
}

document.addEventListener('DOMContentLoaded', renderLike)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
