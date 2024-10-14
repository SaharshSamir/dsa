
import {test} from  './test';


function pickPivot(arr: number[] ,low: number, high: number): number {
    let mid = Math.floor((low + high) / 2);
    const a = arr[low], b = arr[mid], c = arr[high];

    // Check if a is the median
    if ((a > b && a < c) || (a < b && a > c)) {
        return low;
    }
    // Check if b is the median
    else if ((b > a && b < c) || (b < a && b > c)) {
        return mid;
    }
    // Otherwise, c is the median
    return high;

} 

function partition(arr: number[], low: number, high: number): number {
    let piv = pickPivot(arr, low, high);

    console.log(piv, arr[piv]);

    let i;

    for(i=low;i<=high;i++){
        if(arr[i] < arr[piv]){
            console.log(`i: ${i} piv: ${piv}`);
            const temp = arr[i];
            arr[i] = arr[low];
            arr[low] = temp;
            low++;
        }
    }

    while(low <= high) {
        console.log(`0. low: ${low} high: ${high} piv: ${piv}`);
        //move low until we find a number greater than pivot
        if(arr[low] < arr[piv]){
           console.log(`1. low: ${low} high: ${high} piv: ${piv}`);
           low++; 
        } 
        //move high until we find a number lesser than pivot
        if(arr[high] > arr[piv]){
            console.log(`2. low: ${low} high: ${high} piv: ${piv}`);
            high--;
        }

        //if low is greater than pivot and high is lesser than pivot, swap them
        // if(arr[high] < arr[piv] && arr[low] > arr[piv]){
        //     console.log(`3. low: ${low} high: ${high} piv: ${piv}`);
        //     const temp = arr[low]; 
        //     arr[low] = arr[high];
        //     arr[high] = temp;
        // }
      console.log("array: ", arr);
    }


    const temp = arr[high];
    arr[high] = arr[piv];
    arr[piv] = temp;

    console.log('returning high: ', high);

    return low;
}

//pick a pivot and with each iteration, bring the elements smaller than the 
//pivot to it's left side, and elements larger than the pivto to the right side
function quickSort(arr: number[], low: number, high: number): void {

    
    if(high < low) return;

    let piv = partition(arr, low ?? 0 , high ?? arr.length - 1);

    quickSort(arr, low, piv-1);
    quickSort(arr, piv+1, arr.length-1);

}

test(quickSort);
