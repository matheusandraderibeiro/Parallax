const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  const banner = document.getElementById ("banner");
  const titulo = document.getElementById ("titulo");
  const botao = document.getElementById ("botao");
  const texto = document.getElementById ("texto");

  if (scrollPosition > 120) {
    zoomOut ({banner, titulo, texto, botao});
  } else {
    zoomIn ({banner, titulo, texto, botao});
  }
}

const zoomOut = ({banner, titulo, texto, botao}) => {
  banner.style.scale = "1.2";
  titulo.style.opacity = 0;
  titulo.style.translate = "0 -40px";
  titulo.style.scale = "0.9";
  botao.style.opacity = 0;
  botao.style.translate = "0 -30px";
  botao.style.scale = "0.9";
  texto.style.opacity = 0;
  texto.style.translate = "0 -30px";
  texto.style.scale = "0.9";
}

const zoomIn = ({banner, titulo, texto, botao}) => {
  banner.style.scale = "1";
  titulo.style.opacity = 1;
  titulo.style.translate = 0;
  titulo.style.scale = 1;
  botao.style.opacity = 1;
  botao.style.translate = 0;
  botao.style.scale = 1;
  texto.style.opacity = 1;
  texto.style.translate = 0;
  texto.style.scale = 1;
}

document.addEventListener("scroll", onScroll);

























/*const zoomOut = (cabecalho) => {
    cabecalho.style.backgroundSize = "150%";
  };
  
  const zoomIn = (cabecalho) => {
    cabecalho.style.backgroundSize = "100%";
  };
  
  const onScroll = (event) => {
    const cabecalho = document.getElementById("cabecalho");
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 50) {
      zoomOut(cabecalho);
    } else {
      zoomIn(cabecalho);
    }
  };
  
  document.addEventListener("scroll", onScroll);*/