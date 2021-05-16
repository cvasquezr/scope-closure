//Scope Global
var hello = "Hello";
//Mala practica
var hello = "Hello +";

//Con let y const no puedo reasignar
let world = "Hello World";
const helloWord = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWord);
};

anotherFunction();

// Mala practica
const helloWorld = () => {
  globalVar = "Im global";
};

helloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
  var localVar = (globalVar = "Im Global");
};

anotherFunction2();
console.log(globalVar);
