const secondConversor = 1000
const minuteConversor = secondConversor * 60
const hourConversor = minuteConversor * 60
const dayConversor = hourConversor * 24

const countDown = () => {
  const days = document.getElementById('days')
  const hours = document.getElementById('hours')
  const minutes = document.getElementById('minutes')
  const seconds = document.getElementById('seconds')

  let now = new Date()
  let final = new Date(2023, 2, 19, 10)
  let diff = final - now

  if (diff < 0) {
    const timePosition = document.querySelectorAll('.time-position')
    timePosition.forEach(element => {
        element.classList.toggle('expired-time')
    });
    diff = 0
  }

  let daysLeft = Math.floor(diff / dayConversor)
  let hoursLeft = Math.floor((diff % dayConversor) / hourConversor)
  let minutesLeft = Math.floor((diff % hourConversor) / minuteConversor)
  let secondsLeft = Math.floor((diff % minuteConversor) / secondConversor)

  daysLeft = daysLeft < 10 ? '0' + daysLeft : daysLeft
  hoursLeft = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
  minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft

  days.innerHTML = daysLeft
  hours.innerHTML = hoursLeft
  minutes.innerHTML = minutesLeft
  seconds.innerHTML = secondsLeft
}

setInterval(() => countDown(), secondConversor)
