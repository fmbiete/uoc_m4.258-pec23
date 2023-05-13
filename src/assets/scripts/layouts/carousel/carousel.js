function updateCarouselClasses(nodeActive) {
  const numNodes = document.getElementsByName("carousel").length;

  const numActive = parseInt(nodeActive.id.replace("card-", ""), 10);
  nodeActive.labels[0].classList.remove("card-left");
  nodeActive.labels[0].classList.remove("card-right");
  nodeActive.labels[0].classList.add("card-active");

  // Legend
  let nodeLegend = document.getElementById("card-info");
  nodeLegend.innerHTML =
    nodeActive.labels[0].children[0].children[2].getAttribute("alt");

  // node izquierdo => numActive - 1
  // excepcion: numActive == 1 ? numNodes
  const numLeft = numActive == 1 ? numNodes : numActive - 1;
  let nodeLeft = document.getElementById(`card-${numLeft}`);
  nodeLeft.labels[0].classList.remove("card-active");
  nodeLeft.labels[0].classList.remove("card-inactive");
  nodeLeft.labels[0].classList.add("card-left");

  // node derecho => numActive + 1
  // excepcion: numActive == numNodes ? 1
  const numRight = numActive == numNodes ? 1 : numActive + 1;
  let nodeRight = document.getElementById(`card-${numRight}`);
  nodeRight.labels[0].classList.remove("card-active");
  nodeRight.labels[0].classList.remove("card-inactive");
  nodeRight.labels[0].classList.add("card-right");

  const numActivos = [numActive, numLeft, numRight];
  for (let i = 1; i <= numNodes; i++) {
    if (!numActivos.includes(i)) {
      let node = document.getElementById(`card-${i}`);
      node.labels[0].classList.add("card-inactive");
      node.labels[0].classList.remove("card-left");
      node.labels[0].classList.remove("card-right");
    }
  }
}

async function autoplayCarousel(timeout = 5000) {
  const numNodes = document.getElementsByName("carousel").length;
  let nodeCurrent, numCurrent, numNext, nodeNext;

  while (true) {
    // sleep por 5 segundos antes de cambiar la imagen
    await new Promise((r) => setTimeout(r, timeout));

    nodeCurrent = document.querySelector('input[name="carousel"]:checked');
    //console.log(nodeCurrent);
    numCurrent = parseInt(nodeCurrent.id.replace("card-", ""), 10);
    //console.log(`numCurrent ${numCurrent}`)
    numNext = numCurrent == numNodes ? 1 : numCurrent + 1;
    //console.log(`numNext ${numNext}`);
    nodeNext = document.getElementById(`card-${numNext}`);
    nodeNext.click();
  }
}
