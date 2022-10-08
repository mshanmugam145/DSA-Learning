function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
       let min = i;
       for (let j = i + 1; j < n; j++) {
        if(arr[j] < arr[min]){
            min = j;
        }
       }
       if(min != i ){
        [arr[min], arr[i]] = [arr[i], arr[min]]
       }
    }
    return arr;   
}

let arr = [5,4,3,2,1];
selectionSort(arr);
console.log(arr);