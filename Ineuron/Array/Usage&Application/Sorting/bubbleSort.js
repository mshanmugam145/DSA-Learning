function bubbleSort(arr) {
  do {
    var swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i +1]){
        [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
        swapped = true;
      } 
  }
  } while(swapped)
    return arr;   
  }
  
  let arr = [5,4,3,2,1];
  bubbleSort(arr);
  console.log(arr);