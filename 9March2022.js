/**
 * Array destructuring
**/

var arr = ["Vishwa", "Mohan", "Sunil", "Shivani", "Akshay"];


let [n1, n2, n3, n4, n5] = arr;

console.log(n1);

console.log(n3);

console.log(n5);


let [n6, n7, n8] = arr;

console.log(n6);

console.log(n8);

let [a, , , , b] = arr;
console.log(a);
console.log(b);


let [x, ...y] = arr;
console.log(x);
console.log(y);


const numbers = [7, 9, 1, 2, 34];

[p, q, ...r] = numbers;

console.log(p);
console.log(q);
console.log(r);


/**
 * 
 * 
 */

var x1 = 5;
var x2 = 7;

/**
 * Swap these two numbers using array destructuring technique
 * 
 * x1=7,
 * x2 =5
 */

[x2, x1] = [x1, x2];
console.log(x1);
console.log(x2);


function sum(a, ...b) {
    result = 0;
    result = result + a;
    // b is internally converted to an array
    for (i = 0; i < b.length; i++) {
        result = result + b[i];
    }

    // b.forEach(ele => result = result+ele);

    return result;
}
console.log(sum(2, 3));
console.log(sum(2, 3, 4));
console.log(sum(2, 3, 4, 5));


/**
 * reverse a given number
 */

function reverse(num){

    var rev = 0 ;

    var lastDigit ;

    while(num !=0){
        lastDigit = num%10 ; //last digit
        rev = rev*10 + lastDigit ;
        num = Math.floor(num/10) ; // this will return me the floating number

        /**
         * Math.floor(2.3) = 2
         */
    }

    return rev;
}


function printArr(arr){

    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[0].length;j++){
            console.log(arr[i][j]);
        }
    }
}

var myArr = [
    [1,2,3,4],
    [5,6,7,8],
    [11,12,13,14]
]

printArr(myArr);


function addTwoArrays(arr1, arr2){
    let sum = [
        [],
        []
    ];

    for(i=0;i<arr1.length;i++){ // used to iterale the outer array
        

        //inner loop for the inner array
        for(j=0;j<arr1[i].length;j++){  // arr[i] it's i'th sub array of outer array
             sum[i][j] = arr1[i][j] +arr2[i][j];
        }
    }

    return sum ;
}

arr1 = [
    [1,2],
    [3,4]
];

arr2 = [
    [2,3],
    [4,5]
]

sumArray = addTwoArrays(arr1, arr2);

console.log("### Sum Array ");
printArr(sumArray);
