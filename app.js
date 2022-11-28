// const submitButton = document.getElementById("submit");
// const input = document.querySelector("input[name='search']");
// console.log(input);
// submitButton.addEventListener("click", () => {
//   const searchText = input.value;
//   console.log(searchText);

// $.get('https://api.open-meteo.com/v1/gfs?latitude=31.76&longitude=-106.49&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,windspeed_10m,windspeed_80m,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver',
// (data) => {
//     console.log(data);
// }
// )

// $.get({
//   url: "https://api.open-meteo.com/v1/gfs?latitude=31.76&longitude=-106.49&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,windspeed_10m,windspeed_80m,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver",
//   success: (data) => {
//     console.log(data);
//     // displayMovies(data);
//     //       //   var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
//   },
//   error: (e) => {
//     console.log("request failed");
//     console.log(e);
//   },
// });
// });

// let results = document.getElementById("results");

// results.prepend(span);

// grab id of result from html
// document.getElementById("results").addEventListener("click", (e) => {
//   e.target.classList.add("red");
// });

// function displayMovies(movieData) {
//   console.log(movieData);
//   for (var i = 0; i < movieData.length; i++) {
//     console.log(document.getElementById("results"));
//     let span = document.createElement("span");
//     span.classList.add("result-card");

//     let h3 = document.createElement("h3");
//     h3.classList.add("card-title");
//     h3.textContent = movieData[i].show.name;
//     span.appendChild(h3);

//     let img = document.createElement("img");
//     img.classList.add("card-image");
//     img.src =  movieData[i].show.image.medium
//     span.appendChild(img);

//     let h2 = document.createElement("h2");
//     h2.classList.add("card-image");

//     let div = document.createElement("div");
//     div.classList.add("card-summary");

//     let em = document.createElement("em");
//     let p = document.createElement("p");
//     let b = document.createElement("b");
//     let a = document.createElement("a");
//     results.prepend(span)
// document.querySelector(".card-genres").textContent = movieData[i].show.name;
//   }
// }

// ES6: ECMAScript
// function sample (a, b){
//   return 5
// }

// We can treat function as variables
// arrow functions have lexical static scoping which means they know where the variables was born.

// let samples = (a,b) =>{
//   console.log("clicked")
//   return 5;
// }

// -------------------------------------------------

let temp = document.querySelector("#temperature");

const sickSoundz = document.querySelector(".play");
sickSoundz.addEventListener("click", displayWeather);
//2ms
// fetch api
// API: application programming interface
function displayWeather() {
  $.get({
    url: "https://api.open-meteo.com/v1/gfs?latitude=31.76&longitude=-106.49&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,windspeed_10m,windspeed_80m,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver",
    success: (data) => { // will run if the data comes back
      document.querySelector(".coloration").style.display = "block";
      temp.textContent = data.daily.apparent_temperature_max[0];
      if (Number(data.daily.apparent_temperature_max[0]) >= 55) {
        myFunction2();
        document.querySelector(".coloration").classList.add("hot");
        document.querySelector(".coloration").classList.remove("cold");
      } else if (Number(data.daily.apparent_temperature_max[0]) <= 54) {
        myFunction();
        document.querySelector(".coloration").classList.add("cold");
        document.querySelector(".coloration").classList.remove("hot");
      }

      console.log(data);
      // displayMovies(data);
      //       //   var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
    },
    error: (e) => { // will run if the data doesn't comeback
      console.log("request failed");
      console.log(e);
    },
  });
}

function myFunction() {
  var conductor = new BandJS();
  conductor.setTimeSignature(4, 4);
  conductor.setTempo(120);
  var recorder = conductor.createInstrument();

  function hotCrossBuns() {
    conductor.setTimeSignature(4, 4);
    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");
    // conductor.setTempo(60);
    recorder.note("half", "G4");
    conductor.setTempo(120);
    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");
    conductor.setTempo(120);
    recorder.note("half", "G4");
    conductor.setTempo(120);
  }
  hotCrossBuns();

  function hotCrossBuns1() {
    conductor.setTimeSignature(4, 4);
    // conductor.setTempo(240);
    recorder.note("eighth", "G4");
    recorder.note("eighth", "G4");
    recorder.note("eighth", "G4");
    recorder.note("eighth", "G4");

    recorder.note("eighth", "A4");
    recorder.note("eighth", "A4");
    recorder.note("eighth", "A4");
    recorder.note("eighth", "A4");
  }
  hotCrossBuns1();

  function hotCrossBuns2() {
    conductor.setTimeSignature(4, 4);

    conductor.setTempo(120);
    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");
    // conductor.setTempo(60);
    recorder.note("half", "G4");
  }
  hotCrossBuns2();

  var player = conductor.finish();
  player.play();
  document.getElementById(".Click here for sick Tunes");
}

// const sickSoundz2 = document.querySelector(".play2")
// sickSoundz2.addEventListener("click", myFunction2)

function myFunction2() {
  var conductor = new BandJS();
  conductor.setTimeSignature(4, 4);
  conductor.setTempo(160);
  var recorder = conductor.createInstrument();

  function maryHadaLittleLamb() {
    conductor.setTimeSignature(4, 4);
    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");
    recorder.note("quarter", "G4");
    recorder.note("quarter", "A4");

    recorder.note("quarter", "B4");
    recorder.note("quarter", "B4");
    recorder.note("half", "B4");

    recorder.note("quarter", "A4");
    recorder.note("quarter", "A4");
    recorder.note("half", "A4");

    recorder.note("quarter", "B4");
    recorder.note("quarter", "B4");
    recorder.note("half", "B4");

    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");
    recorder.note("quarter", "G4");
    recorder.note("quarter", "A4");

    recorder.note("quarter", "B4");
    recorder.note("quarter", "B4");
    recorder.note("quarter", "B4");
    recorder.note("quarter", "B4");

    conductor.setTempo(120);
    recorder.note("quarter", "A4");
    recorder.note("quarter", "A4");
    recorder.note("quarter", "B4");
    recorder.note("quarter", "A4");

    recorder.note("whole", "G4");
  }
  maryHadaLittleLamb();

  var player = conductor.finish();
  player.play();
  document.getElementById(".Click here for vintage Tunes");
}
