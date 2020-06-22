let input = document.querySelector("#calendar")

input.addEventListener('input', () => {
  setInterval(() => {
    Countdown(new Date(input.value).getTime())
  }, 1000);
})


function Countdown(endDate) {
  let days, hours, minutes, secondes;
  let startDate = new Date().getTime();

  let timeRemainging = parseInt((endDate - startDate)/1000)

  if (timeRemainging < 0) {

    return

  } else {

    days = parseInt(timeRemainging / 86400)
    timeRemainging = timeRemainging % 86400

    hours = parseInt(timeRemainging / 3600)
    timeRemainging = timeRemainging % 3600

    minutes = parseInt(timeRemainging / 60)
    timeRemainging = timeRemainging % 60

    secondes = parseInt(timeRemainging)

    document.querySelector("#days").innerHTML = days < 10 ? "0" + days : days
    document.querySelector("#hours").innerHTML = hours < 10 ? "0" + hours : hours
    document.querySelector("#minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes
    document.querySelector("#seconds").innerHTML = secondes < 10 ? "0" + secondes : secondes
  }
}