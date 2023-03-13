export class CalculateTime {
  constructor (evento) {
    this.now = new Date()
    this.final = new Date(evento.year, evento.month, evento.day, evento.hour)
    this.diff = this.final - this.now
  }
  getDiff () {
    if (this.diff < 0) {
      const timePosition = document.querySelectorAll('.time-position')
      timePosition.forEach(element => {
        element.classList.toggle('expired-time')
      })
      return 0
    }
    return this.diff
  }
}
