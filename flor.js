function createSmallFlower() {
  const flower = document.createElement("div");
  flower.classList.add("small-flower");

  for (let i = 0; i < 4; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    flower.appendChild(petal);
  }
  const center = document.createElement("div");
  center.classList.add("center");
  flower.appendChild(center);

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.top = "-30px";
  flower.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.getElementById("falling-flowers").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createSmallFlower, 400);


function mostAlerta(){
    alert("Te amo muchito<3 y perdon nuevamente :(")
}

setTimeout(mostAlerta,4500);