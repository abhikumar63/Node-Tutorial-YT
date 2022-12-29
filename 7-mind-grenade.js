const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1+num2}`);
}


addValues();

// If we have a function call invoked in our module and we import it
// then the function will run without explicitly invoking it in the 
// main module