console.log("🌜 aterrizando");

// Ejemplo de consulta y lectura simple
// const nodoHeader = document.querySelector("header");
// console.log(nodoHeader);
// console.log(nodoHeader.innerHTML);
// const nodoHeaderH1 = document.querySelector("header h1");
// console.log(nodoHeaderH1);
// console.log(nodoHeaderH1.innerText);
// nodoHeaderH1.innerText = "Otra cosa";

const nodoFrase = document.querySelector("cite");
const frase = nodoFrase.innerText;
console.log(frase);

const nodoTecleo = document.getElementById("tecleo");
console.log(nodoTecleo);
console.log(nodoTecleo.type);
console.log(nodoTecleo.id);
const tecleado = nodoTecleo.value;
console.log(tecleado);

const nodoMensaje = document.getElementById("mensaje");

const nodoBotonEmpezar = document.getElementById("empezar");
nodoBotonEmpezar.addEventListener("click", () => {
  console.log("✨ click en empezar");
  nodoTecleo.value = "";
  nodoMensaje.innerText = "🎏 ánimo";
});

nodoTecleo.addEventListener("input", function onInput() {
  const loTecleado = nodoTecleo.value;
  if (frase === loTecleado) {
    nodoMensaje.innerText = "🎉🌈 enhorabuena";
  } else {
    if (frase.startsWith(loTecleado)) {
      nodoMensaje.innerText = "✅ aún no está completa ⏳";
    } else {
      nodoMensaje.innerText = "🔥 vas mal";
    }
  }
});
