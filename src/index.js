function displaydate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}

setTimeout(displaydate, 5000);

function displaymillisec() {
  let millisectime = document.querySelector("#milliseconds");
  millisectime.innerHTML = new Date();
}

setInterval(displaymillisec, 1000);
