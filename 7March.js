/**
 * 
 * Ways of declaring arrays :
 * 
 * 2 Ways
 * 
 */

// Literal way of declaring arrays
// Delaring and initializing together



//Other way is using constructor
//var arr1 = new Array(5);

/**
 * What is the size of the array
 * empty array.
 */



//console.log(arr1);


/**
 * How to access the elements of the array
 * 
 * We do with the help of index
 */

//var othElement = arr[0];

//var fifthElement = arr[4];

// index : 0 , 6th element will be at 5th index
// 4th eleme  = 3rd index

// index : [0,length of array -1];


/**
 * How to insert element in the array
 * 
 * 2 types :
 * 1.Add element at the end of the array
 */

 var arr = [ 3,4,6,9,1] ;
 console.log(arr);

 arr.push(13);  // append the element at the end
 console.log(arr);

 /**
  * I want to add the element at a given index
  */
 arr[2]=15 ;
 console.log(arr);

 /**
  * Multi dimensional array
  */

 //2 D array : Array of arrays
 var arr2 = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
 ];


 var persons = ['Vishwa', 'Mohan' , 'Akshay' , 'Shivani'];

 //Traverse the array

 for( i=0 ;i< persons.length ;i++){
     console.log(persons[i]);
 }

 /**
  * Another way to do the same thing
  * 
  * forEach loop
  */
/** 
 persons.forEach(element =>{
     console.log(element);
 })


 var numbers = [1,2,3,4,5,6];

 numbers.forEach(num => console.log(num));
 


 function print(){
     console.log('Hello');
 }

 var printArr = () => console.log("hello");

print();
printArr();


function sum(a,b){
    return a+b;
}

var sumArr = (a,b) => a+b ;

console.log(sum(5,6));
console.log(sumArr(5,6));

/**
 * Multi line function
 */
/** 
function multiLine(a,b){
    console.log("frst no ", a);
    console.log("second no ", b);
    return a+b;
}

var multiLineArr = (a,b) => {
    console.log("frst no ", a);
    console.log("second no ", b);
    return a+b;
}
multiLine(5,6);
multiLineArr(5,6);

 **/


var arrNum = [1,2,3,4,5,6,7,8];

// I want create a new array with only even elements

var newArr = arrNum.filter((num)=> num%2==0);

function isEven(num){
    return num%2==0 ;
}

var newArr1 = arrNum.filter(isEven);

//console.log(arrNum);
//console.log(newArr);

/**
 * Sort function
 */

var arr1 = [ 5,8,1,9,4];
console.log(arr1);

arr1.sort(); // arrange in the ascending order, changes the original array

console.log(arr1);

var names = ["Vishwa", "Mohan","Shivani","Akansha"];

console.log(names);

names.sort();
console.log(names);

var arr5 = [5,2,4,8,52,4,69,54]
console.log(arr5);
arr5.sort((a,b)=> a-b);

//arr5.sort();

console.log(arr5);

//reveese sorting | sorting in dereasing order
arr5.sort((a,b)=> b-a);
console.log(arr5);

/**
 * reverse
 */

arr7 = [1,29,5,6,3];
arr7.reverse();
console.log(arr7);


/**
 * Usage of map
 * 1. It transforms each element of the array
 * 2. It will create a new array
 * 3. function passed inside the map, will be applied to each element
 */

var numArr =  [ 1,2,3,4,5];


// I want to find the cube of all these elements

var cubes = numArr.map(element => element*element*element);

function cube (num){
    return num*num*num;
}

var cubes1 = numArr.map(cube);

console.log(cubes);
console.log(cubes1);

/**
 * Understanding slice
 */

var sliceArr = [ 13,19,42,47,31,99,-86];

console.log(sliceArr.slice());

console.log(sliceArr.slice(3));  // start from 3rd index and go till end

console.log(sliceArr.slice(2,5));  // 2 --> 5-1=4

console.log(sliceArr.slice(-4));
console.log(sliceArr.slice(-4,-1));


/**
 * Convert a string into an array
 */

var str  = "Vishwa";

var charArr = str.split("");
console.log(charArr);




