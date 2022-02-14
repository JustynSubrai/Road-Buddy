var mapEL = $("#map")

// Utilizing the function to start the search and API pull.
function thing() {
  // console.log(document.querySelector("#thing").value)
  fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&location=" + document.querySelector("#thing").value, {
    "method": "GET",
    "headers": {
      "Authorization": "Bearer W4S7TecUBgIRXsrzLF-Y1aMW4KebkqjTiWx8-IlN3jZ0tzA78-d6cNaoXAzHecWreYhXOR1akdRUWwQVTMGe8VfJhj-5c0Z9l9yGo4H0QcIGjlH9RPVNRi_45UX7YXYx",
    }
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      let lat = response.businesses[0].coordinates.latitude
      let long = response.businesses[0].coordinates.longitude
      displayMap(lat, long);
      displayShop(response);
      // console.log(lat)
      // console.log(long)
      console.log(response);



    })
    .catch(err => {
      console.error(err);
    });
}


$("#thingBtn").on("click", function (event) {
  event.preventDefault();
  thing();

});

// document.getElementById("thingBtn").addEventListener("click", thing);

function displayMap(lat, long) {

  document.getElementById('map-container').innerHTML = "<div id='map'></div>";
  let map = new L.map('map');

  map.setView([lat, long], 20);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianN1YnJhaSIsImEiOiJja3piejB6czMyYTA1MnlwcjJmaXljdGNmIn0.Ukuvh6H-szz9m6G8cAamQQ'
  }).addTo(map);

};

//Below is the Local Storage for getting the locations

function getLocation() {
  var arr = []
  for (let i = 0; i < localStorage.length; i++) {
    let previousOnes = JSON.stringify(localStorage.getItem("Location" + i))
    if (previousOnes != '""') {
      arr.push(localStorage.getItem("Location" + i))
    }
    console.log(previousOnes);
    ;


  }

  document.getElementById("locationsPull").innerHTML = ""


  for (let i = 0; i < arr.length; i++) {
    document.getElementById("locationsPull").innerHTML += arr[i] + "</br>";
  }

}

function setShop(response) {
  console.log("CALLED")
  localStorage.setItem("Location" + localStorage.length, document.querySelector("#thing").value);
  getLocation()
}


// Displays all the businesses in the City
function displayShop(response) {
  var dataEl = (`<div class="columns is-mobile  is-flex-wrap-wrap is-justify-content-center is-align-content-center">`);
  for (let i = 0; i < response.businesses.length; i++) {
    var nameEl = response.businesses[i].name;
    var imageUrlEl = response.businesses[i].image_url;
    var addressEl = response.businesses[i].location.display_address;
    var ratingEl = response.businesses[i].rating;
    if (priceEl === undefined) {
      $(priceEl).attr("display", "none")
    }
    var priceEl = response.businesses[i].price;
    dataEl = dataEl + (`
    <ul class = "column list" id="ulStyles">
        <li class="list-content">${nameEl}</li>
        <li class="list-content">${addressEl}</li>
        <li class="list-content"><img src="${imageUrlEl}"></li>
        <li class="list-content">Rating: ${ratingEl} / 5</li>
        <li class="list-content">${priceEl}</li>
    </ul>
    `)
  }


  $("#dataResponse").html(dataEl)
  setShop();
  document.getElementById('thing').value = "";
}

// document.getElementById("thingBtn").addEventListener("click", thing);


// Fetch opentripmap below



//         console.log(data)
//         // console.log(data.lat)
//     })


// https://api.opentripmap.com/0.1/­{lang}­/tiles/{layer}­/{z}­/{x}­/{y}.pbf?kinds={kinds}&rate={rate}&apikey={apikey}


// Below is the Modal that pops out an alert. Copied and pasted from Burma

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});



getLocation();

