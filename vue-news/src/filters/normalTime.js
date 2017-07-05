export const normalTime = function(time) {
  if (time) {
    const oDate = new Date()
    oDate.setTime(time)

    const y = oDate.getFullYear()
    const M = oDate.getMonth() + 1
    const d = oDate.getDate()

    const h = oDate.getHours()
    const m = oDate.getMinutes()
    const s = oDate.getSeconds()

    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
  }
}