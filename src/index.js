function displaydate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}

setTimeout(displaydate, 5000);

function displaymillisec() {
  let millisectime = document.querySelector("#milliseconds");
  let completedate = new Date();
  millisectime.innerHTML = completedate.getMilliseconds();
}

setInterval(displaymillisec, 1);
