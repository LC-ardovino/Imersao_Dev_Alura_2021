function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".JPG") ){
        listarFilmesNaTela(filmeFavorito)
    }else{
        console.error("O link fornecido nao e valido.")
    }


    document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filmeFavorito){

    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"
    var elementolistaFilmes = document.getElementById("listaFilmes")
    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;

}







