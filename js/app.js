window.addEventListener("DOMContentLoaded", (event) => {
  const screen1 = document.getElementById("screen-1");
  const screen2 = document.getElementById("screen-2");
  const screen3 = document.getElementById("screen-3");
  const startBtn = document.getElementById("startBtn");
  const music = document.getElementById("music");
  const correctMove = document.getElementById("correctMove");
  const reset = document.getElementById("reset");
  screen1.classList.add("show");
  startBtn.addEventListener("click", () => {
    screen1.classList.remove("show");
    setTimeout(() => {
      screen2.classList.add("show");
    }, 500);
    music.play();
  });
  correctMove.addEventListener("click", () => {
    box.classList.add("correct");
    setTimeout(() => {
      screen3.classList.add("show");
    }, 1000);
  });
  reset.addEventListener("click", () => {
    window.location.reload();
  });
  console.log("DOM fully loaded and parsed");
});
