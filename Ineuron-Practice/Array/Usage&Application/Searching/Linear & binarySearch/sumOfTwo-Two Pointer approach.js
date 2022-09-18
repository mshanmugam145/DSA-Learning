let arr = [20, 30, 40, 60, 70, 80, 90, 120, 240];

function binarySearch(val) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        if(arr[left] + arr[right] == val){
            return [left, right];
        } else if(arr[left] + arr[right] > val) {
            right = right - 1;
        } else {
            left = left + 1
        }
    }
    return null;
}

console.log(binarySearch(130)); 