var count;

const dd = document.getElementById("days");
const hh = document.getElementById("hours");
const mm = document.getElementById("minutes");
const ss = document.getElementById("seconds");

const inDate = document.getElementById("date");
const inTime = document.getElementById("time");

inDate.value = new Date().toISOString().split("T")[0];

initButtons();

function start() {
  if (inDate.value == "") {
    alert("ALERT");
    return;
  }

  inDate.style.visibility = "hidden";
  inTime.style.visibility = "hidden";

  count = setInterval(() => timer(), 1000);
}

function pause() {
  clearInterval(count);
}

function stop() {
  clearInterval(count);
  setDisplay({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  });

  const inDate = document.getElementById("date");
  const inTime = document.getElementById("time");
  inDate.style.visibility = "visible";
  inTime.style.visibility = "visible";
}

function timer() {
  const input = document.getElementById("date");
  const time = document.getElementById("time");
  const targetDate = new Date(input.value + "T" + time.value);

  const currDate = new Date();

  if (targetDate <= currDate) {
    stop();
    alert("ALERT TIMER");
    return;
  }

  const remainSeconds = (targetDate - currDate) / 1000;

  const timeToDisplay = {
    days: Math.floor(remainSeconds / 3600 / 24),
    hours: Math.floor(remainSeconds / 3600) % 24,
    minutes: Math.floor(remainSeconds / 60) % 60,
    seconds: Math.floor(remainSeconds) % 60
  };

  setDisplay(timeToDisplay);
}

function setDisplay({ days, hours, minutes, seconds }) {
  setDigitContent(dd, days);
  setDigitContent(hh, hours);
  setDigitContent(mm, minutes);
  setDigitContent(ss, seconds);
}

function setDigitContent(digit, content) {
  var span0 = digit.children[0].children[0];
  var span1 = digit.children[1].children[0];

  span0.classList.remove("drop");
  span1.classList.remove("drop");

  if (content < 10) {
    listenEvent(span0, "0");
    listenEvent(span1, content);
  } else {
    listenEvent(span0, Math.floor(content / 10));
    listenEvent(span1, Math.floor(content % 10));
  }
}

function listenEvent(element, content) {
  var observer = new MutationObserver(() => {
    element.classList.add("drop");
  });

  if (element.innerText != content) {
    observer.observe(element, { childList: true });
    element.innerText = content;
  }
}

// function removeEvent(element) {
//   const lis = element.addEventListener("animationend", () => {
//     element.classList.remove("drop");
//   });
// }
function initButtons() {
  const btnPlay = document.querySelector("#btn-play");
  const btnPause = document.querySelector("#btn-pause");
  const btnStop = document.querySelector("#btn-stop");

  btnPlay.addEventListener("click", () => {
    btnPlay.disabled = true;
    btnPlay.classList.add("btn-pressed");
    btnPause.classList.remove("btn-pressed");
  });

  btnPause.addEventListener("click", () => {
    btnPause.classList.add("btn-pressed");
    btnPlay.classList.remove("btn-pressed");
    btnPlay.disabled = false;
  });

  btnStop.addEventListener("click", () => {
    btnPause.classList.remove("btn-pressed");
    btnPlay.classList.remove("btn-pressed");
    btnPlay.disabled = false;
  });
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(() => {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
