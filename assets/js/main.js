import { Evento } from './evento.js'
import { Timer } from './timer.js'
import { Conversor } from './conversor.js'
import { Left } from './left.js'

const evento = new Evento('Campinas Anime Fest', '19/03/2023', '10')

const countDown = () => {
  const timer = new Timer()
  const conversor = new Conversor()
  const now = new Date()
  const final = new Date(evento.year, evento.month, evento.day, evento.hour)
  const diff = final - now
  const left = new Left(diff, conversor)

  if (diff < 0) {
    const timePosition = document.querySelectorAll('.time-position')
    timePosition.forEach(element => {
      element.classList.toggle('expired-time')
    })
    diff = 0
  }

  timer.setDay(left.getDays())
  timer.setHour(left.getHours())
  timer.setMinute(left.getMinutes())
  timer.setSecond(left.getSeconds())
}

const main = () => {
  const eventNameTag = document.getElementById('event-name')
  eventNameTag.innerText = 'Contagem Regressiva Até o ' + evento.name + ':'
  document.title = evento.name
  setInterval(() => countDown(), 1000)
}

main()
