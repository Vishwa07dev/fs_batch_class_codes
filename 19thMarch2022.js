function higher1(a, func) {
    console.log(a);
    func();
}


higher1(5, () => console.log("hello Students"));


function higher2() {
    function inner() {
        console.log("Learnin higherorder function");
    }

    return inner;
}



const add = (a, b, c) => {
    return a + b + c;
}

const currying = (salman) => {
    console.log("Inside the main func");
    return (a) => {
        console.log("inside nesting layer 1");
        return (b) => {
            console.log("inside nesting layer 2");
            return (c) => {
                console.log("inside nesting layer 3");
                return salman(a, b, c);
            }
        }
    }
}

const addition = currying(add);
console.log(addition);

var result = addition(5)(7)(8);
console.log(result);


function kareena(){
    console.log("I am Kareena Kapoor");
}

console.log(kareena);

var xyz = ()=>{
    console.log("What's in the name");
}

console.log(xyz);

console.log(()=>{
    console.log("What's in the name");
});



var re = ((a,b)=>{
    return a*b
})(5,6);

console.log(re);


/**
 * 
 */

var abc ;
function func1(){
    abc = 6;
}
func1();
console.log(abc);


const { rawListeners } = require("process");
/**
 * Taking input from the users
 */

//  I need to use the inbuilt library "readline"
const readLine = require("readline");

/**
 * I will have to create a input and output stream
 * 
 * imput - for reading input
 * output - for writing output
 */

const r1 = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})


r1.question("What is your name",function(answer){
    console.log(" My Name is : "+ answer);
    r1.close();
})



