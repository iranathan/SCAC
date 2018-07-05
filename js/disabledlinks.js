/* Disabled Links */
var disabledLinks = document.getElementsByClassName("link-disabled");
for (var i = 0; i < disabledLinks.length; i++) {
  var content = disabledLinks[i].innerHTML;
  disabledLinks[i].setAttribute("onmouseover", "this.innerHTML = 'This link has been disabled'");
  disabledLinks[i].setAttribute("onmouseout", "this.innerHTML = '" + content + "'");
  disabledLinks[i].setAttribute("href", "#");
}
