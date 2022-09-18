let array = [[1,2,3,4], [6,7,8,9], [11,12,13,14]];
function binarySearch2d(val, row, col) {
    let vleft = 0;
    let vright = (row * col) - 1;
    let mid_ele;
    let mid;
    while(vleft <= vright){
        mid = Math.floor((vright + vleft)/2);
        mid_ele = array[mid/row][mid%col];
        if(mid_ele == val) return true;
        if(mid_ele > val){
            vright = mid - 1;
        } else {
            vleft = mid + 1;
        }
    }
    return false;
}
console.log(binarySearch2d(6, 3, 4));