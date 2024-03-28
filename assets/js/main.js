import { Evento } from './evento.js'
import { Timer } from './timer.js'
import { TimeLeft as Left } from './timeLeft.js'
import { CalculateTime as Calculate } from './calculateTime.js'

const evento = new Evento('Campinas Anime Fest', '07/04/2024', '10')
//const evento = new Evento('Natal', '25/12/2023', '00')

const countDown = () => {
  const timer = new Timer()
  const diff = new Calculate(evento)
  const left = new Left(diff.getDiff())

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
