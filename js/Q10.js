let input = prompt("enter amount to withdraw");
while (input.length >= 4 || input.length <= 2) {
    alert("enter amount to withdraw in hundreds only")
    input = prompt("enter amount to withdraw");
}
let hundred = input.slice(0, 1);
let fifties = input.slice(1, 3);
let coins = input.slice(2,3)
console.log(coins);
let tens;
let a;
if (fifties >= 50) {
    a = fifties - 50;
    tens = a.toString();
    tens = tens.slice(0,1)
    
    coins = input.slice(2,3)
    fifties = 1;
}
else if(fifties < 50){
    tens = fifties.slice(0, 1);
    coins = input.slice(2,3)
    fifties = 0;
}
document.write("you entered :<b> " +input + " </b> <br>")
document.write("you have  <b>" + hundred + "</b>  hundred note ,<b>" + fifties + "</b> fifty notes ,<b> " + tens + "</b>  ten notes and <b>" + coins + "</b> , coins")