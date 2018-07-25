const timeForm = $("time-form")
const resultInSecondForm = $("result-in-second")


// Time Functions

const hourToMinute = (a) => Number(a * 60)
const hourToSecond = (a) => Number(a * 3600)
const minuteToSecond = (a) => Number(a * 60)
const minuteToHour = (a) => Number(a / 60)
const secondToMinute = (a) => Number(a / 60)
const secontToHour = (a) => Number(a/3600)

const timeDOM = (event) => {
    event.preventDefault()
    const hourValue = Number($("hour").value)
    const minuteValue = Number($("minute").value)
    const secondValue = Number($("second").value)
    if (hourValue && minuteValue && secondValue) resultInSecondForm.innerHTML = hourToSecond(a)

}

// Event Listener
timeForm.on("submit", timeDOM)