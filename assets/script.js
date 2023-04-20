const cityName = document.getElementById("enter-city");

let APIKey = "61afe1de2a134dba30b11b7e00a7fab5"; //API Key
let cityArray = [];
const history = document.getElementById("history");
const deleteHistory = document.getElementById("historyBtn");

if (localStorage.getItem("cities")) {
  cityArray = JSON.parse(localStorage.getItem("cities"));
}
deleteHistory.addEventListener("click", function () {
  localStorage.clear();
  cityArray = [];
  displayCity();
});

function displayCity() {
  history.textContent = "";
  for (let i = 0; i < cityArray.length; i++) {
    let button = document.createElement("button");
    let br = document.createElement("br");
    button.textContent = cityArray[i];
    history.appendChild(button);
    history.appendChild(br);
    button.addEventListener("click", function () {
      lookup(this.textContent);
    });
  }
  console.log(cityArray);
}
displayCity();
//  DISPLAY CURRENT DAY WEATHER DATA
function displayCurrent(data) {
  cityArray.push(data.name);
  localStorage.setItem("cities", JSON.stringify(cityArray));
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("currentHumid").textContent = data.main.humidity;
  document.getElementById("currentTemp").textContent = data.main.temp;
  document.getElementById("currentWind").textContent = data.wind.speed;
  displayCity();
}

function displayForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      ////////// DAY 1 /////////
      // DATE
      document.getElementById("day1").textContent = data.list[1].dt_txt;
      // MIN TEMP
      document.getElementById("day1Min").textContent =
        data.list[0].main.temp_min;
      // MAX TEMP
      document.getElementById("day1Max").textContent =
        data.list[0].main.temp_max;
      // WIND
      document.getElementById("day1Wind").textContent = data.list[1].wind.speed;
      // HUMIDITY
      document.getElementById("day1Humid").textContent =
        data.list[0].main.humidity;
      ////////// DAY 2 /////////
      // DATE
      document.getElementById("day2").textContent = data.list[2].dt_txt;
      // MIN TEMP
      document.getElementById("day2Min").textContent =
        data.list[1].main.temp_min;
      // MAX TEMP
      document.getElementById("day2Max").textContent =
        data.list[1].main.temp_max;
      // WIND
      document.getElementById("day2Wind").textContent = data.list[2].wind.speed;
      // HUMIDITY
      document.getElementById("day2Humid").textContent =
        data.list[1].main.humidity;
      ////////// DAY 3 /////////
      // DATE
      document.getElementById("day3").textContent = data.list[3].dt_txt;
      // MIN TEMP
      document.getElementById("day3Min").textContent =
        data.list[2].main.temp_min;
      // MAX TEMP
      document.getElementById("day3Max").textContent =
        data.list[2].main.temp_max;
      // WIND
      document.getElementById("day3Wind").textContent = data.list[3].wind.speed;
      // HUMIDITY
      document.getElementById("day3Humid").textContent =
        data.list[2].main.humidity;
      ////////// DAY 4 /////////
      // DATE
      document.getElementById("day4").textContent = data.list[4].dt_txt;
      // MIN TEMP
      document.getElementById("day4Min").textContent =
        data.list[3].main.temp_min;
      // MAX TEMP
      document.getElementById("day4Max").textContent =
        data.list[3].main.temp_max;
      // WIND
      document.getElementById("day4Wind").textContent = data.list[4].wind.speed;
      // HUMIDITY
      document.getElementById("day4Humid").textContent =
        data.list[3].main.humidity;
      ////////// DAY 5 /////////
      // DATE
      document.getElementById("day5").textContent = data.list[5].dt_txt;
      // MIN TEMP
      document.getElementById("day5Min").textContent =
        data.list[4].main.temp_min;
      // MAX TEMP
      document.getElementById("day5Max").textContent =
        data.list[4].main.temp_max;
      // WIND
      document.getElementById("day5Wind").textContent = data.list[5].wind.speed;
      // HUMIDITY
      document.getElementById("day5Humid").textContent =
        data.list[4].main.humidity;
    });
}
function lookup(city) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      displayCurrent(data);
      displayForecast(data.coord.lat, data.coord.lon);
    });
}
function getWeather() {
  console.log("GETTING");
  const city = document.getElementById("cityInput").value;
  console.log(city);
  lookup(city);
}

document.getElementById("searchBtn").addEventListener("click", getWeather);
const input = document.getElementById("cityInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
