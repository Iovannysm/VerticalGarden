
function testB() {
  var bDots = document.getElementById("testb-dots");
  var moreText = document.getElementById("more");

  if (bDots.style.display === "none") {
    bDots.style.display = "flex";
    moreText.style.display = "none";
  } else {
    bDots.style.display = "none";
    moreText.style.display = "flex";
  }
}

