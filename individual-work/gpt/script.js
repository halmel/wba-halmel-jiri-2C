function strToInt(str) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      num *= 10;
      num += parseInt(str.charAt(i));
    }
    return num;
  }
  
  function intToStr(num) {
    let str = "";
    do {
      str = (num % 10) + str;
      num = Math.floor(num / 10);
    } while (num > 0);
    return str;
  }
  
  function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    num1 = strToInt(num1);
    num2 = strToInt(num2);
    let result;
    switch (operation) {
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      case "division":
        result = num1 / num2;
        break;
    }
    document.getElementById("result").value = intToStr(result);
  }
  
  document.getElementById("calculate").addEventListener("click", calculate);
  