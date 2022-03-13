/**
 * 
 * Multiply two matrix
 */


function matrixMultiplication(arr1, arr2){
    /**
     * If the two arrays are compatible for multiplication
     */
    if(arr1[0].length != arr2.length ){
        console.log("Can't muyltiply two arrays");
        return;
    }

    /**
     * Multiplication stage starts
     */
    outArr = new Array(arr1.length); 
    
    //First I need to get the first row of first matrix

    /**
     * arr1 : 
     * [
     * 
     *    [1,2,3],
     *    [4,5,6]
     * ]
     * 
     */
    for(rowArr1 = 0; rowArr1<arr1.length;rowArr1++){
        // I have arr1[rowArr1] -- which is an array

        /*
              1. [1,2,3]
              2. [4,5,6]
        */

              //Take hold of each column from arr2
              /**
               *   [ 
               *      [7,8],
               *      [9,10],
               *      [11,12]
               *   ]
               */

              for(colArr2 =0 ;colArr2<arr2[0].length ;colArr2++){


                // rowArr1 =0  -> [1,2,3]
                // colArr2 =0 -> 
                /**
                 *       7
                 *       9
                 *       11
                 * 
                 * 1*7 + 2*9 + 3*11
                 */
                   /**
                    * colArr2 =0  :    7
                    *                  9
                    *                 11
                    */
                   sum=0;
                   for(i=0;i<arr1[0].length;i++){
                      sum = sum + arr1[rowArr1][i]*arr2[i][colArr2]
                   }
                   outArr[rowArr1][colArr2] = sum ;
              }
              
    }
}


function maxRainWater(arr){


    var maxLeft=[];
    var maxRight = [];


    /**
     * First generate array which contains the max value to the left
     */
    maxValueLeft = arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxValueLeft){
            maxValueLeft = arr[i];
        }
        maxLeft[i]=maxValueLeft;
    }
    /**
     * Generate the max value right
     */
    maxValueRight = arr[arr.length-1];

    for(j=arr.length-1;j>=0;j--){
        if(maxValueRight<arr[j]){
            maxValueRight = arr[j];
        }
        maxRight[j]=maxValueRight;
    }

    /**
     * Calculate the rain water
     */
    
    var totalWater = 0
    for(k=0;k<arr.length;k++){

        //for every index
        // rain collection = min( leftMax, rightMax )- current height
        totalWater = totalWater + Math.min(maxValueLeft[k], maxValueRight[k]) -arr[k];

    }

    return totalWater;
}