export class Evento {
  constructor (name, date, hour) {
    this.name = name
    this.dateList = date.split('/')
    this.day = parseInt(this.dateList[0])
    this.month = parseInt(this.dateList[1]) - 1
    this.year = parseInt(this.dateList[2])
    this.hour = parseInt(hour)
  }
}
