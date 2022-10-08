let arr = [10,20,30,40,50,80,'infi','infi','infi','infi','infi','infi'];

function binarySearchMethod(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) { // 0 <= 12
        let mid = Math.floor((start + end) / 2); // 6
        // if(start == end) return mid;
        if(arr[mid] == 'infi'){
            if(arr[mid - 1] == 'infi'){
                end = mid - 1;
            } else {
                return mid;
            }
        } else {
            start = mid + 1;
        }
    }
    return -2;
}

console.log(binarySearchMethod(arr));