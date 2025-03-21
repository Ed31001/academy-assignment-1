function findMissingNumber(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] !== arr[i] + 1){
            return (arr[i] + 1);
        }
    }   
}

console.log(findMissingNumber([1, 2, 3, 4, 6]));