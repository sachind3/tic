window.addEventListener("DOMContentLoaded", (event) => {
  const screen1 = document.getElementById("screen-1");
  const screen2 = document.getElementById("screen-2");
  const screen3 = document.getElementById("screen-3");
  const correctMove = document.getElementById("correctMove");
  const box = document.getElementById("box");
  const cells = document.querySelectorAll(".cell");
  const reset = document.getElementById("reset");
  setTimeout(() => {
    screen1.classList.add("show");
    setTimeout(() => {
      screen1.classList.remove("show");
      setTimeout(() => {
        screen2.classList.add("show");
      }, 500);
    }, 5000);
  }, 500);

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      alert("Please find a correct position for the Win.");
    });
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
