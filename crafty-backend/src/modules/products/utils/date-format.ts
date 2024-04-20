export const getDateStringDisplay = (date: Date) => {
  const getYear = date.getFullYear()
  const getMonth = date.getMonth() + 1
  const getDay = date.getDate()

  const thaiYear = getYear + 543

  if (
    getYear < 0 ||
    getMonth < 0 ||
    getDay < 0 ||
    getDay > 31 ||
    getMonth > 12 ||
    isNaN(getYear) ||
    isNaN(getMonth) ||
    isNaN(getDay)
  )
    return 'invalid date'

  if (getMonth == 1) {
    if (getDay < 10) return `0${getDay} มกราคม ${thaiYear}`
    return `${getDay} มกราคม ${thaiYear}`
  }
  if (getMonth == 2) {
    if (getDay < 10) return `0${getDay} กุมภาพันธ์ ${thaiYear}`
    return `${getDay} กุมภาพันธ์ ${thaiYear}`
  }
  if (getMonth == 3) {
    if (getDay < 10) return `0${getDay} มีนาคม ${thaiYear}`
    return `${getDay} มีนาคม ${thaiYear}`
  }
  if (getMonth == 4) {
    if (getDay < 10) return `0${getDay} เมษายน ${thaiYear}`
    return `${getDay} เมษายน ${thaiYear}`
  }
  if (getMonth == 5) {
    if (getDay < 10) return `0${getDay} พฤษภาคม ${thaiYear}`
    return `${getDay} พฤษภาคม ${thaiYear}`
  }
  if (getMonth == 6) {
    if (getDay < 10) return `0${getDay} มิถุนายน ${thaiYear}`
    return `${getDay} มิถุนายน ${thaiYear}`
  }
  if (getMonth == 7) {
    if (getDay < 10) return `0${getDay} กรกฎาคม ${thaiYear}`
    return `${getDay} กรกฎาคม ${thaiYear}`
  }
  if (getMonth == 8) {
    if (getDay < 10) return `0${getDay} สิงหาคม ${thaiYear}`
    return `${getDay} สิงหาคม ${thaiYear}`
  }
  if (getMonth == 9) {
    if (getDay < 10) return `0${getDay} กันยายน ${thaiYear}`
    return `${getDay} กันยายน ${thaiYear}`
  }
  if (getMonth == 10) {
    if (getDay < 10) return `0${getDay} ตุลาคม ${thaiYear}`
    return `${getDay} ตุลาคม ${thaiYear}`
  }
  if (getMonth == 11) {
    if (getDay < 10) return `0${getDay} พฤศจิกายน ${thaiYear}`
    return `${getDay} พฤศจิกายน ${thaiYear}`
  } else {
    if (getDay < 10) return `0${getDay} ธันวาคม ${thaiYear}`
    return `${getDay} ธันวาคม ${thaiYear}`
  }
}
