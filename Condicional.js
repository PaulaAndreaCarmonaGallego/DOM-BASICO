var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijera";

var resultado = function (user, cpu){
    switch (true) {
        case (user === opc1 && cpu === opc2):
            console.log("CPU ganó con " + cpu);
            break;
        
        case (user === opc2 && cpu === opc3):
            console.log("CPU ganó con " + cpu);
            break;
        
        case (user === opc3 && cpu === opc1):
            console.log("CPU ganó con " + cpu);
            break;
        
        case (user === opc1 && cpu === opc3):
            console.log("Usuario ganó con " + user);
            break;
        
        case (user === opc2 && cpu === opc1):
            console.log("Usuario ganó con " + user);
            break;
        
        case (user === opc3 && cpu === opc2):
            console.log("Usuario ganó con " + user);
            break;
        
        default:
            console.log("Ambos han empatado con " + user);
        
    }
    
}