

function arrange0n1(arr){
    
    var zeroCount = 0;
    var oneCount = 0 ;
    
    for(i=0;i<arr.length;i++){
       if(arr[i]==0){
           zeroCount++;
       }else{
           oneCount++;
       }
    }

    var ind = 0;

    while(ind <arr.length){
        if(zeroCount>0){
            arr[ind++]= 0;
            
            zeroCount--;
        }else{
           arr[ind++]= 1; 
           oneCount--;
        }
    }
}

function arrange0n1TwoPointer(arr){


    var i =0;  // start
    var j = arr.length-1 ;// end
    //We need to keep checking till i<j
    while(i<j){

        //Keep moving right till arr[i]==0
        while(arr[i]==0){
           i++;
        }
             // jumping to the right
        

        //i from left is at 1


        //keep moving left till arr[j]==1
        while(arr[j]==1){
           j--; 
        }
             //keep jumping left
        

        // j from rigth is at 0


        //swap the elements at i and j index
        if(i<j){
            //swapt element at ith and jth index
            // temp = arr[i];
            // arr[i] = arr[j];
            // arr[j]=temp
            [arr[i],arr[j]] = [arr[j],arr[i]];  // we are swapping using array destructuring

        }
    }

}

const arr1  = [1,0,0,1,0,0,1,1,0,1,0,1];

arrange0n1TwoPointer(arr1);
console.log(arr1);


/**
 * arrange the array with 0 , 1 and 2
 */

function arrangeArray(arr){

    var i0 =0 ;
    var i1 = 0;
    var i2 =arr.length-1;

    while(i1<=i2){  // i1 has to iterate from left to right

         if(arr[i1]==1){
             //i1 contains correct element
             i1++;
         }else if(arr[i1]==0){
             //swap i0 index with i1 index
             [arr[i1],arr[i0]] = [arr[i0],arr[i1]];
             i1++;  // element at ith position is corrected
             i0++;
         }else{
           //swap i1 index with i2 index
           [arr[i1],arr[i2]] = [arr[i2],arr[i1]];
           i2--;
         }
    }
}

var arr2 = [1,2,0,1,2,0,1,2,0,0,1];
arrangeArray(arr2);

console.log(arr2);


/**
 This is not an efficient solution - Brute force also
 */
function findSum(arr, sum){

    for(i=0;i<arr.length-1;i++){
        for(j=i+1 ; j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                console.log(arr[i]+ " : "+ arr[j]);
                return;
            }
        }
    }
}

function findTwoNumbers(arr, sum){
    arr.sort((a,b)=>(a-b));

    var i=0;
    var j = arr.length-1;

    while(i<j){
        if(arr[i]+arr[j]==sum){
            console.log(arr[i]+ " : "+arr[j]);
            return;
        }else if(arr[i]+arr[j]>sum){
            j--;
        }else{
            i++;
        }
    }
}

var arr3 = [0,1,2,4,-3,-2,5,6];
findTwoNumbers(arr3,10);


function findSingle(arr){

    var result = arr[0];

    for(i=1;i<arr.length;i++){
        result = result^arr[i]; 
    }

    return result;
}

var arr6 = [3,4,5,5,4,2,2,3,1,-1,-1];

console.log(findSingle(arr6));