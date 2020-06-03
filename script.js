let keys = document.querySelectorAll("calculator span");
let operations = ["+", "-", "*", "/"];
let decimalAdded = false;
/*
for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function (event) {
    var input = document.querySelector(".screen");
    var inputVal = input.innerHTMLl;
    var btnVal = this.innerHTMLl;
  };
}
*/
function isFigure(symbol) {
  if ((symbol >= "0" && symbol <= "9") || symbol == ".") return true;
  else return false;
}
function isOperand(symbol) {
  if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/")
    return true;
  else return false;
}
let input_label = document.getElementById("input_text");
let input_label_old = document.getElementById("input_old");
let current = "";
let old = "";
let result = "";
let operand = "";
let keyboard = document.getElementById("keyboard");

keyboard.onclick = function (event) {
  let target = event.target;
  if (target.tagName != "span") {
    if (isOperand(target.innerHTML)) {
      //ОПЕРАНД
      //если вводят операнд
      if(current!=""){
      old = current;
      operand = target.innerHTML;
      current = "";
      input_label_old.value = old + operand;
      input_label.value = "";

      console.log(old + operand + current);

      //input_label.value=operand; не работает с отрицательными числами
      }
      else if (target.innerHTML=="-"){
        current="-";
        input_label.value =current;
      

      }

    } else if (target.innerHTML == "=") {
      // РАВНО
      if (input_label_old.value != "=") {
        console.log(old + " " + " " + current + " " + operand);
        if (old != "" && current != "" && operand != "") {
          switch (operand) {
            case "+": {
              result = (Number(old) + Number(current));
              break;
            }
            case "-": {
              result = (old - current);
              break;
            }
            case "*": {
              result = (old * current);
              break;
            }
            case "/": {
              result = (old / current).toFixed(3);
              break;
            }
          }
          input_label_old.value =
            input_label_old.value + current + "=" + result;
          current = result;
old="";
operand="";
          console.log(result);
          input_label.value = result;
        }
      }
    } else if (isFigure(target.innerHTML)) {
      // ЦИФРА
      // вводят число
      if (current != result) {
        current += target.innerHTML;
      } else {
        current = target.innerHTML;
      }
      console.log("current=" + current);
      input_label.value = current;
    } else if (target.innerHTML == "C") {
      // ОЧИСТИТЬ
      console.log("Обнулил");
      operand = current = old = result = "";
      input_label.value = input_label_old.value = "";
    }
  }
};
document.addEventListener("keydown", function(event){
  alert(event.code);
switch(event.code){
  case "KeyZ":
    alert("0");
}

});