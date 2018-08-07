/* Console Logging */
var version = "2.0.1.0";
if (window.location.href === "https://scac.itspugle.ga/about.html") {
  document.getElementById("version").innerHTML = "v" + version;

} else {
  console.log("Because you're not on about.html, we won't attempt to publish the version.")
}
console.log("You're loading SCAC with deploy version of " + version);
