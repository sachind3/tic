window.addEventListener("DOMContentLoaded", (event) => {
  const screen1 = document.getElementById("screen-1");
  const screen2 = document.getElementById("screen-2");
  const screen3 = document.getElementById("screen-3");
  const startBtn = document.getElementById("startBtn");
  const clickUi = document.getElementById("clickUi");
  const music = document.getElementById("music");
  const pencil = document.getElementById("pencil");
  const clap = document.getElementById("clap");
  const correctMove = document.getElementById("correctMove");
  const reset = document.getElementById("reset");
  screen1.classList.add("show");
  startBtn.addEventListener("click", () => {
    clickUi.play();
    setTimeout(() => {
      screen1.classList.remove("show");
      setTimeout(() => {
        screen2.classList.add("show");
      }, 500);
      music.play();
    }, 500);
  });
  correctMove.addEventListener("click", () => {
    pencil.play();
    box.classList.add("correct");
    setTimeout(() => {
      screen3.classList.add("show");
      clap.play();
    }, 1000);
  });
  reset.addEventListener("click", () => {
    clickUi.play();
    setTimeout(() => {
      window.location.reload();
    }, 400);
  });
  console.log("DOM fully loaded and parsed");
});
