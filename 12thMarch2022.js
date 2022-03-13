/**
 * Creating JS objects
 * 
 */


 const person = {
    name : "Vishwa",
    age : 99,
    gender : "Male",
    occupation : "SE"
}
//console.log(person);

const car  = {
    color : "Red",
    make : "2/3/2022",
    brand : "Hyundai",
    break : function(){
        console.log("Applying break");
    },
    accelerate : function(){
        console.log("Applying accelertor");
    }

}

//console.log(car);
//car.break();


/**
 * Second way of creating JS Object
 * 
 * 
 * Object.create() ; // Object is an inbuilt class
 */

var obj2 = Object.create({});
//console.log(obj2);


/**
 * How to retrieve the elements of the object
 * 
 * 
 const person = {
    name : "Vishwa",
    age : 99,
    gender : "Male",
    occupation : "SE"
}
 */
/** 
console.log(person.occupation);  // 1
console.log(person["age"]);  //2


console.log(person.nationality);

**/
/**
 * Insert a new new key value in the object
 */
/** 
person.nationality  = "Indian"; // new key it gets added
console.log(person);

person.name = "Vishwa Mohan"; // Override the existing key
console.log(person);
**/
/**
 * salary : 50000
 */
/** 
person["salary"] = 50000;
console.log(person);


var obj1 = {
    a: 21,
    b : 23
}


var obj2 = Object.create(obj1); //
**/
/**
 * Traversal of the objects
 * 
 * var let const ????
 */


const user = {
    name : "Vishwa Mohan",
    email : "kankvish@gmail.com",
    age : 99,
    dob : "07/12/1947",
    active : true
}

for(const key in user){
    //console.log(key + " -> " + user[key]);
}

/**
 * I want the list of keys
 * 
 * Object.keys
 */
//console.log(Object.keys(user));

/**
 * All the values of the object as an array
 */
 //console.log(Object.values(user));

 //console.log(Object.entries(user));


 /**
  * Remove duplicates
  */


 function removeDuplicates(arr){

    var obj = {};
    console.log(obj);
    arr.forEach(ele =>{
        if(obj[ele]){
            obj[ele] = obj[ele] +1 ;
        }else{
            obj[ele] =1 ; 
        }
    })  // This will generate the obj

    //console.log(obj);

    return Object.keys(obj);// This will return the keys of the object
 }

 //console.log(removeDuplicates(['a','b','c','a','b','a','d','b']));
/** 
console.log("#######   Learning freezing of the objects  ##########");


var obj1 = {

    a : 5,
    b:6
}

console.log(obj1);

Object.freeze(obj1);
**/
//Delete one of the keys
//delete obj1.a ; // delete key a from the object obj1 
/** 
obj1.a =7 ;

console.log(obj1);

console.log(Object.isSealed(obj1));

var obj2 = {

};

console.log(Object.isSealed(obj2));



const jsonData = {
    "name" : "Vishwa",
    "age" : 99,
    "hobbies" : ["cricket,football"]
}


console.log(jsonData);
console.log(jsonData.name);
console.log(jsonData.hobbies);


const jsObjectData = {
    name : "Vishwa",
    age : 99,
    hobbies : ["cricket,football"]
}


**/


/**
 * JS objects destructuring
 */

const student = {
    name : "Vishwa",
    age : 99,
    subjects : ["DS","JS", "SystemDesign"]
};

/** 
var a =  student.name;
var b = student.age;
var c = student.subjects;

**/

//var { name,age,subjects} =  student;

//var { name,subjects,age} =  student;  // keys in left could be in anyorder

//var { name} =  student;
//var { name,subjects,age, nation} =  student; 

({ name,subjects,age, nation} =  student); 



console.log(name);
console.log(age);
console.log(subjects);
console.log(nation); 


/**
 * Using object destructing, to read, I need to use the same key
 * 
 * What if my requirement is to read them in a different variable name
 */



const teacher = {
    name : "Vishwa",
    age : 99
}

var { name :a , age:b} = teacher;
console.log(a);




