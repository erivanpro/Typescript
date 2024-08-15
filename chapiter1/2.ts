/*To install TypeScript, follow the instructions on the TypeScript website.
/*In this example, we have two inputs that add two numbers, the first input and the second.
If we open the browser, you will see that it adds both values, but the value is incorrect. 
This happens because it adds strings and not numbers.*/


/*
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    return num1 + num2;
}








/*
button.addEventListener("Click", function() {
    console.log(add(input1.value, input2.value));
});
*/




/*The solution is to use types:*/
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;


function add(num1: number, num2: number): number {
    return num1 + num2;
}

button.addEventListener("click", function() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    console.log(add(num1, num2));
});


