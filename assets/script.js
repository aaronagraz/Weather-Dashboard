const cityName = document.getElementById("enter-city");

let APIKey = "61afe1de2a134dba30b11b7e00a7fab5"; //API Key

function displayCurrent(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("currentHumid").textContent = data.main.humidity;
  50;
  document.getElementById("currentTemp").textContent = data.main.temp;
}

function displayForecast(lat, lon) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // DAY 1 MIN TEMP
      document.getElementById("day1Min").textContent =
        data.list[0].main.temp_min;
      // DAY 1 MAX TEMP
      document.getElementById("day1Max").textContent =
        data.list[0].main.temp_max;
      // DAY 2 MIN TEMP
      document.getElementById("day2Min").textContent =
        data.list[1].main.temp_min;
      // DAY 2 MAX TEMP
      document.getElementById("day2Max").textContent =
        data.list[1].main.temp_max;
      // DAY 3 MIN TEMP
      document.getElementById("day3Min").textContent =
        data.list[2].main.temp_min;
      // DAY 3 MAX TEMP
      document.getElementById("day3Max").textContent =
        data.list[2].main.temp_max;
      // DAY 4 MIN TEMP
      document.getElementById("day4Min").textContent =
        data.list[3].main.temp_min;
      // DAY 4 MAX TEMP
      document.getElementById("day4Max").textContent =
        data.list[3].main.temp_max;
      // DAY 5 MIN TEMP
      document.getElementById("day5Min").textContent =
        data.list[4].main.temp_min;
      // DAY 5 MAX TEMP
      document.getElementById("day5Max").textContent =
        data.list[4].main.temp_max;
    });
}

function getWeather() {
  console.log("GETTING");
  const city = document.getElementById("cityInput").value;
  console.log(city);

  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
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

document.getElementById("searchBtn").addEventListener("click", getWeather);
