const button = document.querySelector("button");
button.addEventListener("click", () => {
  window.location.href = "homepage.html";
});
const button1 = document.querySelector("button1");
button.addEventListener("click", () => {
  window.location.href = "newindex1.html";
});
// function playYoutube() {
//   var videoId = "sY2djp46FeY";
//   var url = "https://youtu.be/sY2djp46FeY" + videoId;
//   window.open(url, "https://youtu.be/sY2djp46FeY");
// }
function playYoutube(videoId) {
  var url = "https://youtu.be/sY2djp46FeY" + videoId;
  window.open(url);
}

playYoutube("sY2djp46FeY");