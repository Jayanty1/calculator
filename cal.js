const displaytext = document.querySelector("#display");

const b1 = document.querySelector("#n1");
const b2 = document.querySelector("#n2");
const b3 = document.querySelector("#n3");
const b4 = document.querySelector("#n4");
const b5 = document.querySelector("#n5");
const b6 = document.querySelector("#n6");
const b7 = document.querySelector("#n7");
const b8 = document.querySelector("#n8");
const b9 = document.querySelector("#n9");
const b0 = document.querySelector("#n0");

const back = document.querySelector("#back");

const reset = document.querySelector("#reset");
const badd = document.querySelector("#add");
const bsub = document.querySelector("#sub");
const bmul = document.querySelector("#mul");
const bdiv = document.querySelector("#divi");
const bequal = document.querySelector("#equal");

const buttons = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9];
const operators = [badd, bsub, bmul, bdiv];

displaytext.value = "";

buttons.forEach((button,index) => {
  button.addEventListener("click", () => {
    displaytext.value += index;
  });
})
operators.forEach((operator,index) => {
  operator.addEventListener("click", () => {
   if(index === 0) displaytext.value += "+";
   if(index === 1) displaytext.value += "-";        
   if(index === 2) displaytext.value += "*";
   if(index === 3) displaytext.value += "/";
  });
});

bequal.addEventListener("click",()=>{
    if (/^\d+([+\-*/]\d+)*$/.test(displaytext.value)) {
        displaytext.value = eval(displaytext.value);
    } else {
        alert("Invalid Expression");
    }    

});

reset.addEventListener("click",()=>{
    displaytext.value = "";
});

back.addEventListener("click",()=>{
    if(displaytext.value !== "")
    displaytext.value = displaytext.value.slice(0,-1);
    else
    alert("No value to delete");
});