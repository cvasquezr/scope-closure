var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!";

  if (true) {
    let d = "Hello world!!";
    debugger;
  }
}

hello();

const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

//Closure
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};
