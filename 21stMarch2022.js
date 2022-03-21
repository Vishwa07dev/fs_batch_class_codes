

/**
 * Recursively print all the elements of [1,2,3,4]
 * 
 * arr - input array, sI : startingIndex in the array
 */

function print(arr, startIndex){
    
    // Base condition/termination condition
    if(startIndex>=arr.length){  // Base condition
        //I am done with all the elements of arr
        return;
    }

    //Logic
    console.log(arr[startIndex]);

    //Recursive call again
    print(arr, startIndex+1);

}

/**
 * 
    [1,2,3] -> 3 , 2 , 1
 */

function printRev(arr, sI){
   
    //Base condition
    if(sI >= arr.length){
        //sI is no more valid
        return;
    }

    //Logic
    console.log(arr[arr.length-sI-1]);  // Mathematical manipulation

    printRev(arr, sI+1);

}

function printRev1(arr, sI){
   
    //Base condition
    if(sI >= arr.length){
        //sI is no more valid
        return;
    }
    //Recursive
    printRev1(arr, sI+1);
    
    //Logic
    console.log(arr[sI]);

}

arr1 = [1,2,3];
printRev1(arr1,0);

arr = [1,2,3];
print(arr,0);