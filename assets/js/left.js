export class Left {
  constructor (diff, conversor) {
    this.days = Math.floor(diff / conversor.day)
    this.hours = Math.floor((diff % conversor.day) / conversor.hour)
    this.minutes = Math.floor((diff % conversor.hour) / conversor.minute)
    this.seconds = Math.floor((diff % conversor.minute) / conversor.second)
  }
  getDays () {
    return this.days < 10 ? '0' + this.days : this.days
  }
  getHours () {
    return this.hours < 10 ? '0' + this.hours : this.hours
  }
  getMinutes () {
    return this.minutes < 10 ? '0' + this.minutes : this.minutes
  }
  getSeconds () {
    return this.seconds < 10 ? '0' + this.seconds : this.seconds
  }
}
