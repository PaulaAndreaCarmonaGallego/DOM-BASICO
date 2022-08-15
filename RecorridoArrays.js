var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

var articulosfiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

var articulosmap = articulos.map(function(articulo){
    return articulo.nombre;
});

var articulosfind = articulos.find(function(articulo){
    return articulo.nombre === "Tv";
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulossome = articulos.some(function(articulo){
    return articulo.costo <=700;
});