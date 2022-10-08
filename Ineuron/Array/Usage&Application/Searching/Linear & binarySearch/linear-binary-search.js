
// Linear Search
function linearSearch(val) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] == val) {
            return i;
        } 
    }
    return -1
}
var array = [20, 45, 27, 55, 67, 75, 88, 90];
console.log(linearSearch(102, array));


// Binary Search
// var array = [20, 25, 27, 55, 67, 75, 88, 90, 99];
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let middle = Math.floor((start + end)/2); 
        if(arr[middle] == val) return middle;
        if(arr[middle] < val){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
var array = [20, 25, 27, 55, 67, 75, 88, 90, 99];
console.log(binarySearch(array, 27));
console.log(binarySearch(array, 109));


