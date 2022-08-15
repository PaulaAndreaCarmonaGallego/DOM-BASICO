var Marcas = ["Toyota", "BMW", "Ferrari"];
var Modelos = ["Auris", "serie 5", "250 gto"];
var Annios = [2015, 2020, 1962];

var AutosNuevos = ["Auto1", "Auto2", "Auto3"];

function Auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (var i=0; i < Marcas.length; i++) {
    AutosNuevos[i] = new Auto(Marcas[i], Modelos[i], Annios[i]);
}