import { Evento } from './evento.js'
import { Timer } from './timer.js'
import { TimeLeft as Left } from './timeLeft.js'
import { CalculateTime as Calculate } from './calculateTime.js'

const evento = new Evento('Mega Campinas Anime Fest', '20/08/2023', '10')

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
