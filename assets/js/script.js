var back = document.getElementById("back");
var download = document.getElementById("download");
var close = document.getElementById("close");
var app1Btn = document.getElementById("app1Btn");
var app1BtnDesk = document.getElementById("app1BtnDesk");
var app4Btn = document.getElementsByClassName("app4Btn");
console.dir(app4Btn);

console.dir(back);

// Fonction de fermeture de la modale
function closeModal() {
  back.style.display = "none";
}
// Fonction de déploiement de la modale
function openModal() {
  back.style.display = "block";
}
download.addEventListener("click",openModal);
app1Btn.addEventListener("click",openModal);
app1BtnDesk.addEventListener("click",openModal);
app4Btn[0].addEventListener("click",openModal);
app4Btn[1].addEventListener("click",openModal);

close.addEventListener("click",closeModal);