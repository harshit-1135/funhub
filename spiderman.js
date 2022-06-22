const spidy = document.getElementById("spidy");
const cactus = document.getElementById("cactus");

function jump() {
  if (spidy.classList != "jump") {
    spidy.classList.add("jump");

    setTimeout(function () {
      spidy.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current spidy Y position
  let spidyTop = parseInt(window.getComputedStyle(spidy).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && spidyTop >= 140) {
    // collision
    
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});