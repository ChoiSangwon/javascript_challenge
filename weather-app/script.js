const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const URL = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location) {
  const resp = await fetch(URL(location), { mode: "cors" });
  const respData = await resp.json();
  console.log(respData);
  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
    <h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    ${temp}C
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
  `;

  main.innerHTML = ``;

  main.appendChild(weather);
}

// getWeatherByLocation("London");

function KtoC(K) {
  return (K - 273.15).toFixed(2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  if (location) {
    getWeatherByLocation(location);
  }
});
