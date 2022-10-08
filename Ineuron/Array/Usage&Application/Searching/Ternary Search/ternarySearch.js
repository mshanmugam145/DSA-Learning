// mid1 = left + (right - left)/3;
// mid2 = right - (right - left)/3;

const arr = [10,20,30,40,50,60,70,80,90];

function ternarySearch(arr, left, right, target) {
        let mid1 = Math.floor(left + (right - left)/3);
        let mid2 = Math.floor(right - (right - left)/3);
    while(left <= right){
        if(arr[mid1] == target) {return mid1};
        if(arr[mid2] == target) {return mid2};
        if( target < arr[mid1]){
            return ternarySearch(arr, left, mid1-1, target)
        } else if(target > arr[mid2]) {
            return ternarySearch(arr, mid2+1, right, target)
        } else {
            return ternarySearch(arr, mid1+1, mid2-1, target);
        }
    }
    return -1;
}
console.log(ternarySearch(arr, 0, arr.length-1, 10));