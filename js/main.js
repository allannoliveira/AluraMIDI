
function TocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {  

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function (){
        TocaSom(idAudio);
    };

    contador = contador + 1;
}

    