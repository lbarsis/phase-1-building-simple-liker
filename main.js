// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function renderLike() {
  const heart = document.querySelector('.like-glyph');
  heart.addEventListener('click', (e) => {
    e.preventDefault()
    mimicServerCall().then(buildResponse).catch(catchError)
  })
}

function buildResponse() {
  const heart = document.querySelector('.like-glyph');
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  }
  else {
    heart.textContent = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
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
