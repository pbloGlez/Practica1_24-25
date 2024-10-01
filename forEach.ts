//EJERCICIO GENERAL
//Programa que tenga un array de numeros y que con un foreach muestre solo 
//los numeros de indice par
//de forma implicita
    //const arr:number[] = [1,2,3,4,5];
//funcion para recibir un numero por parametro y mostrarlo por pantalla
    //const muestra = (a:number) => console.log(a);
//funcion foreach
//Esta funcion recibe otra funcion, lo que estaentre parentesis y ejecuta esa funcion para cada elemento dentro del array
    //arr.forEach(muestra);

//Ejercicio que MUESTRA SOLO LOS NUMEROS CON INDICE PAR
const arr:number[] = [14,25,54,62,145];

arr.forEach((elem:number, i:number)=>{
  if (i % 2 === 0) {
    console.log(elem,i);
  }else{
    console.log("Nop")
  }
  
})

//SUMA DE LOS ELEMENTOS DE UN ARRAY
const arr2:number[] = [72,12,85,145,16];
//variable para acumular la suma
let suma:number = 0;
//funcion para sumar los numeros
const sumarNumeros = (a:number)=>{
  suma += a;
};
//usamos el forEach para usar la función dentro del array
arr2.forEach(sumarNumeros);
//mostramos la variable donde hemos guardado la suma
console.log(`La suma total es: ${suma}`);



