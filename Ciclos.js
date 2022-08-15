//For

var Estudiantes = ["Paula", "Andrea", "David", "Ricardo"];

var ListaEstudiantes = function (Estudiante){
    console.log(`Hola, ${Estudiante}`);
}

for(var i = 0; i < Estudiantes.length; i ++){
    ListaEstudiantes(Estudiantes[i]);
}

for (var Estudiante of Estudiantes){
    ListaEstudiantes(Estudiante);
}

while (Estudiantes.length > 0){
    var Estudiante = Estudiantes.shift();
    ListaEstudiantes(Estudiante);
}