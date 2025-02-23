document.getElementById("secret-btn").addEventListener("click", function () {
  document.getElementById("secret-message").innerHTML =
    "May this year bring you happiness, success, and every new release your heart desires. You’re an incredible person, and I’m so lucky to know you. Thanks for not leveling solo!! 💖🎂";
  document.getElementById("secret-message").style.display = "block";
  this.style.display = "none";
});

function createBalloon() {
  let balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

  let string = document.createElement("div");
  string.classList.add("string");
  balloon.appendChild(string);

  document.body.appendChild(balloon);
  setTimeout(() => {
    document.body.removeChild(balloon);
  }, 7000);
}
setInterval(createBalloon, 500);
