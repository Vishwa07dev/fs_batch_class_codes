
/** 
var a = 15 ;

function changeA( name ){
    name = 7;
    console.log(name);
}


console.log(a); 

changeA(a);  

console.log(a); 

**/



var name = "Vishwa";  // name will store the value

var address = {           // address will store the reference of obj
    city : "Bangalore"
}

function func( alias, locality){
    alias = "Mohan";
    locality.city = "Mumbai"
}

console.log(name);

console.log(address);


func(name, address);
/**
 * copy of name : name1 is passed , since it's literal so it;s completely different
 * chage in name1, will have not impact on name
 * copy of address : address1, but this still points to the same object, because it stores the reference
 * 
 * change on address1 will changes obj
 */
 //console.log(name);
 //console.log(address);


 arr1 = [1,2,3];
 arr2 = arr1;
 arr2[1]=5;
 //console.log(arr1);


 function addPure(a,b){
     return a+b;
 }



 console.log(addPure(5,6));
 console.log(addPure(5,6));
 console.log(addPure(5,6)); 
 console.log(addPure(5,6));

 function addImpure(a,b){
    
    return a+b+Math.random();
 }
 console.log(addImpure(5,6));
 console.log(addImpure(5,6));
 console.log(addImpure(5,6)); 
 console.log(addImpure(5,6));


 function outer(){
     
    var greet = "Hello from outer";
     // We are creating inner function
     function inner(){
         console.log(greet);
     }
     //returning the created inner function
     return inner ;
 }

 var func = outer();  // Execute the outer function
 func();
 /**
  * greet is inside outer
  * it will be intialized when the function is executed
  * and it dies with function completion
  */



 function abc(){

    let a=25;

    return a ;
 }


 abc();

 console.log(a);


