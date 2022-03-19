var ListaFilmes = ["http://gematsu.com/wp-content/uploads/2015/02/P3M-No-3_02-03-15.jpg","https://upload.wikimedia.org/wikipedia/pt/thumb/8/87/Ringstrilogyposter.jpg/250px-Ringstrilogyposter.jpg","https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"]

for(var indice = 0; indice < ListaFilmes.length; indice++){
    document.write("<img src= " + ListaFilmes[indice] + ">");
}