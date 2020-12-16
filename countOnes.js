// Create a function to count the number of 1s in a 2D array.


// your code here
const countOnes = function(nestedArr) {
    let count =0;
        for(i = 0; i < nestedArr.length; i++){
            for( b = 0; b < nestedArr[i].length; b++){
                if(nestedArr[i][b] == 1){
                    count += 1;
                }
            } 
        }
            return count   
}
        

console.log(countOnes([
    [1, 0],
    [0, 0]
]))

// should return 1

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
]));

// should return 7

console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
]))

//should return 2
