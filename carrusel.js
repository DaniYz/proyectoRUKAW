const slider = document.querySelector(".slider");//Llamo a mi slider

let siInicioA = false, prevPageX, prevScrollLeft;

const inicioArrastrar = (e) => {
  siInicioA = true;
  prevPageX = e.pageX;
  prevScrollLeft = slider.scrollLeft;
}

const arrastrar = (e) =>{
  if(!siInicioA) return;
  e.preventDefault();
  let posicionDiferente = e.pageX - prevPageX;
  slider.scrollLeft = prevScrollLeft - posicionDiferente
}

const detenerArrastre = () =>{
  siInicioA = false;
}

slider.addEventListener("mousedown", inicioArrastrar); //aqui llamo a la accion y a la const arrastrar
slider.addEventListener("mousemove", arrastrar);
slider.addEventListener("mouseup", detenerArrastre)
