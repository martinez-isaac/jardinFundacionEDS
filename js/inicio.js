console.log("desarrollado por Ruben.");

function openNav() {
  document.getElementById("myMenu").style.width = "100%";
  document.getElementById("nav-open").style.display = "none";
  document.getElementById("nav-close").style.display = "block";
}
function closeNav() {
  document.getElementById("myMenu").style.width = "0%";
  document.getElementById("nav-close").style.display = "none";
  document.getElementById("nav-open").style.display = "block";
}

function openModal(element) {
  document.getElementById(element).style.display = "display";
}

function closeModal(element) {
  document.getElementById(element).style.display = "none";
}