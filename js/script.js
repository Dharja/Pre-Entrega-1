function agregarAlCarrito(){

alert ("que desea comprar?");
let producto;

while (producto !== "1" && producto !== "2" && producto !== "3") {
  producto = prompt("Selecciona una opción: \n1. camisa \n2. pantalon \n3. zapatillas");
}

let precio1 = 800;
let precio2 = 1000;
let precio3 = 1100;

switch (producto) {
  case "1":
    alert("Seleccionaste la camisa, su precio es de " + precio1 + "$");
    
    break;
  case "2":
    alert("Seleccionaste el pantalon, su precio es de " + precio2 + "$");
    
    break;
  case "3":
    alert("Seleccionaste las zapatillas, su precio es de " + precio3 + "$");
    
    break;
  default:
    alert("Opción inválida");
    break;
}

let cantidad = parseInt(prompt("cuantas unidades quiere?"));

let total = 0;
  switch (producto) {
    case "1":
      total = precio1 * cantidad;
      break;
    case "2":
      total = precio2 * cantidad;
      break;
    case "3":
      total = precio3 * cantidad;
      break;
  }

  alert("El total es de " + total + "$ por " + cantidad + " unidades.");


}