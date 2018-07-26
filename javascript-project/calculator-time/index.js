$(function () {
    const timeForm = $("#time-form")
    const resultInSecondForm = $("#result-in-second-form")
    const resultInMinuteForm = $("#result-in-minute-form")
    const resultInHourForm = $("#result-in-hour-form")



    // Time Functions

    const hourToHour = (a) => Number(a)
    const hourToMinute = (a) => Number(a * 60)
    const hourToSecond = (a) => Number(a * 3600)
    const minuteToSecond = (a) => Number(a * 60)
    const minuteToMinute = (a) => Number(a)
    const secondToSecond = (a) => Number(a)
    const minuteToHour = (a) => Number(a / 60)
    const secondToMinute = (a) => Number(a / 60)
    const secondToHour = (a) => Number(a / 3600)


    const timeDOM = (event) => {
        event.preventDefault()
        const hourInputValue = $("#hour-input").val()
        const minuteInputValue = $("#minute-input").val()
        const secondInputValue = $("#second-input").val()
        resultInSecondForm.val(hourToSecond(hourInputValue) + minuteToSecond(minuteInputValue) + secondToSecond(secondInputValue))
        resultInMinuteForm.val(hourToMinute(hourInputValue) + minuteToMinute(minuteInputValue) + secondToMinute(secondInputValue))
        resultInHourForm.val(hourToHour(hourInputValue) + minuteToHour(minuteInputValue) + secondToHour(secondInputValue))

        // const minuteValue = Number($("minute").value)
        // const secondValue = Number($("second").value)
        // if (hourValue && minuteValue && secondValue) 

    }

    // Event Listener
    timeForm.on("submit", timeDOM)
})

