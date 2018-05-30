/*
Allows for ?track=ID to be used to prefil this content
*/ 
function getURLParameter(e) {
  return decodeURI((new RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, ""])[1]);
};

if (getURLParameter("track") === "") {
  console.info("No track parameter was found in the URL.")
} else {
  console.info("A track parameter was found in the URL, and prefilled.")
  document.getElementById("trackInput").value = getURLParameter("track");
}