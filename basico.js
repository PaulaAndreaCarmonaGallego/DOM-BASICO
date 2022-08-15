var planes = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

function Suscripcion (Tipo){
    console.log(Object.values(planes)[Object.keys(planes).indexOf(Tipo)]);
}

Suscripcion("Free");