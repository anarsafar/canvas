const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colorInput = document.querySelector(".color");
const widthInput = document.querySelector("#number");
const clearButton = document.querySelector("button");

window.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;

  let isPainting = false;
  let color = "black";
  let lineWidth = 3;

  function startPainting() {
    isPainting = true;
    ctx.beginPath();
  }

  function stopPainting() {
    isPainting = false;
    ctx.closePath();
  }

  function paint(e) {
    if (!isPainting) return;

    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  window.addEventListener("mousemove", paint);
  window.addEventListener("mousedown", startPainting);
  window.addEventListener("mouseup", stopPainting);

  colorInput.addEventListener("input", (e) => {
    color = e.target.value;
  });

  widthInput.addEventListener("input", (e) => {
    lineWidth = e.target.value;
  });

  clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
});
