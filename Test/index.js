const LaySoNgauNhien = (number) => {
  numberArray = number.toString().split("");
  let soCanTimArray = [];
  for (i = 0; i < numberArray.length; i++) {
    let j = 1;
    while (soCanTimArray.length < 100) {
      let soCanTim = Math.floor(numberArray[i] * 100 + j * Math.random());
      if (soCanTimArray.lenght > 0) {
        soCanTimArray.push(SoCanTim);
      }
      j++;
    }
  }
};

console.log(LaySoNgauNhien(1526));
