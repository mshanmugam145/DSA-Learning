let arr = [7,5,3,6,4,15,20];

function findMaxProfit(arr) {
    let minPrice = Math.pow(10, 1000);
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <= minPrice){
            minPrice = arr[i];
        } else if(arr[i] - minPrice > maxProfit) {
            maxProfit = arr[i] - minPrice;
        }
    }
    return maxProfit;
}
console.log(findMaxProfit(arr));