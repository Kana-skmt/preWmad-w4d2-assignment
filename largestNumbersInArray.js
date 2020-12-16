// Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.

//you code here
const findLargestNums = function(nestedArray){
    let largestNum = 0;
    let result =[];
    for ( i = 0; i < nestedArray.length; i++){
        for (b = 0; b < nestedArray[i].length; b++){
            //There are mistakes, but I have no idea what they are.
            if(nestedArray[i][b] > largestNum){
                largestNum = nestedArray[i][b];
            }
        }
        result.push(largestNum);
    }
    return result;
}



console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
// ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
// ➞ [-34, -2, 7]

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); 
// ➞ [0.7634, 9.32, 9]