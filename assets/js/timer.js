export class Timer {
  constructor () {
    this.days = document.getElementById('days')
    this.hours = document.getElementById('hours')
    this.minutes = document.getElementById('minutes')
    this.seconds = document.getElementById('seconds')
  }
  setDay (day) {
    this.days.innerHTML = day
  }
  setHour (hour) {
    this.hours.innerHTML = hour
  }
  setMinute (minute) {
    this.minutes.innerHTML = minute
  }
  setSecond (second) {
    this.seconds.innerHTML = second
  }
}
