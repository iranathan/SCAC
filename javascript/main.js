"use strict";

function parse() {
  var trackID = document.getElementById("trackInput").value; // Read value of trackInput for ease in processing.
  var invalid = "<div class='alert alert-danger' role='alert'><h4 class='alert-heading'>Uh oh! Something's not right.</h4><hr><p>It looks like you might be entering something other than a Spotify, or not entering anything at all!<br>Make sure that you're entering a valid Spotify <abbr title='For example, https://open.spotify.com/track/123456789abcdefghijklm'>URL</abbr> or <abbr title='For example, spotify:track:123456789abcdefghijklm'>URI</abbr> of a track.</p></div>"; // Base error message for issues
  var error = "<p><strong>Think you've found an issue?</strong> Let me know by clicking <code>Report issues or suggest features</code> in the footer.</p>" // Issue reporting prompt
  
  if (trackID.includes("https://open.spotify.com/track/")) { // trackInput == Spotify URL
    trackID = trackID.slice(31, 53);
  } else if (trackID.includes("spotify:track:")) { // trackInput == Spotify URI
    trackID = trackID.slice(14, 36);
  } else { // trackInput == not recognised
    document.getElementById("warnings").style.display = "inline";
    document.getElementById("warnings").innerHTML = invalid + error;
    document.getElementById("playButton").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("countries").innerHTML = "";  
  }
  
  search(trackID);
};

function search(trackID) {
  // Get the hash of the url
  var hash = window.location.hash.substring(1).split("&").reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

  // Define authentication endpoint and token
  var token = hash.access_token;
  var authEndpoint = "https://accounts.spotify.com/authorize";

  // Proxide the prefix and suffix for embed/track preview
  var embedPrefix = "<iframe src='https://open.spotify.com/embed?uri=spotify:track:";
  var embedSuffix = "' width='400' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";

  // Replace with the Production clientId and redirectUri
  var clientId = "c87ccc0ea8804a7b8b38d81ab3521827";
  var redirectUri = "https://scac.itspugle.ga";
  
  if (!token) {
    window.location = authEndpoint + "?client_id=" + clientId + "&redirect_uri=" + redirectUri + "&response_type=token&show_dialog=true";
  } else {
    $.ajax({
      url: "https://api.spotify.com/v1/tracks/" + trackID,
      type: "GET",
      beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: function success(data) {
        var str = data.available_markets;
        var trackName = JSON.stringify(data.name);
        if (str.toString() == "") {
          trackName = trackName.slice(1, trackName.length - 1);
          document.getElementById("description").innerHTML = "<strong>" + trackName + "</strong> song is available anywhere Spotify is available.";
          document.getElementById("countries").outerHTML = "";
          document.getElementById("playButton").innerHTML = embedPrefix + trackID + embedSuffix;
          document.getElementById("authAlert").style.display = "none";
        } else {
          str.forEach(function(){
            var index = str.IndexOf();
            var country = countries.code;
            str[index] = country;
          });
          var markets = "<ul><li>" + str.join("</li><li>") + "</li></ul>";
          trackName = trackName.slice(1, trackName.length - 1);
          document.getElementById("description").innerHTML = "<strong>" + trackName + "</strong> is available in these countries:";
          document.getElementById("countries").innerHTML = markets;
          document.getElementById("playButton").innerHTML = embedPrefix + trackID + embedSuffix;
          document.getElementById("authAlert").style.display = "none";
        }
      }
    });
  }
};

var countries = {
  // Asia
  AU: "Australia",
  JP: "Japan",
  IL: "Israel",
  HK: "Hong Kong",
  ID: "Indonesia",
  MY: "Malaysia",
  NZ: "New Zealand",
  PH: "Philippines",
  SG: "Singapore",
  TW: "Taiwan",
  TH: "Thailand",
  VN: "Vietnam",
  // Europe
  AD: "Andorra",
  AT: "Austria",
  BE: "Belgium",
  BG: "Bulgaria",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  FR: "France",
  DE: "Germany",
  GR: "Greece",
  HU: "Hungary",
  IS: "Iceland",
  IE: "Ireland",
  IT: "Italy",
  LV: "Latvia",
  LI: "Liechtenstien",
  LT: "Lithuania",
  LU: "Luxembourg",
  MT: "Malta",
  MC: "Monaco",
  NL: "Netherlands",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  RO: "Romania",
  SK: "Slovakia",
  ES: "Spain",
  SE: "Sweden",
  CH: "Switzerland",
  TR: "Turkey",
  UK: "United Kingdom",
  // Latin America and the Caribbean
  AR: "Argentina",
  BO: "Bolivia",
  BR: "Brazil",
  CL: "Chile",
  CO: "Colombia",
  CR: "Costa Rica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  SV: "El Savador",
  GT: "Guatamala",
  HN: "Honduras",
  MX: "Mexico",
  NI: "Nicaragua",
  PA: "Panama",
  PY: "Paraguy",
  PE: "Peru",
  UY: "Uruguay",
  // North America
  CA: "Canada",
  US: "United States",
  // Africa
  ZA: "South Africa"
};