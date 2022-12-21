const startingMinutes = 15
let timer = null
let startCount = false
let time = startingMinutes * 60

const startBtn = document.querySelector('.start')

function startCountFunc() {
  timer = setInterval(updateCountdown, 1000)
  startBtn.textContent = 'Stop'
  startCount = true
}
function stopCountFunc() {
  clearInterval(timer)
  startBtn.textContent = 'Start'
  startCount = false
}

startBtn.addEventListener('click', function () {
  if (startCount === false) {
    startCountFunc()
  } else {
    stopCountFunc()
  }
})

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds < 10 ? '0' + seconds : seconds

  document.querySelector('.minute').value = minutes
  document.querySelector('.second').value = seconds
  time--
}
