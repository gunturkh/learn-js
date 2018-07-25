const timeForm = $("time-form")


// Time Functions

const hourToMinute = (a) => Number(a * 60)
const hourToSecond = (a) => Number(a * 3600)
const minuteToSecond = (a) => Number(a * 60)
const minuteToHour = (a) => Number(a / 60)
const secondToMinute = (a) => Number(a / 60)
const secontToHour = (a) => Number(a/3600)

const addDOM = (event) => {
    event.preventDefault()
    const addFirst = Number(document.getElementById("add-1").value)
    const addSecond = Number(document.getElementById("add-2").value)
    if (addFirst && addSecond) addResult.innerHTML = add(addFirst, addSecond)

}