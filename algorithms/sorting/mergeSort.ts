let arr = [12, 11, 13, 5, 6, 7]

let n = arr.length;

console.log('before sort', arr);

function merge(arr: number[], l: number, mid: number, r: number){

	let n1 = mid - l + l;
	let n2 = r - mid;
	
	//temp subarrays
	let LSubArr = Array(n1);
	let RSubArr = Array(n2);

	//copy elements from the original subarray to temp subarray
	for(let i=0; i<n1; i++){
		LSubArr[i] = arr[i];
	}

	for(let i=0; i<n1; i++){
		RSubArr[i] = arr[i];
	}

	//initial index of LSubArr
	let i=0;
	//initial index of LSubArr
	let j=0;
	//initial index of LSubArr
	let k=0;


	while(i<n1 && j<n2) {
		if(LSubArr[i] < RSubArr[j]){
			arr[k] = LSubArr[i];
			i++;
		}else {
			arr[k] = RSubArr[j];
			j++;
		}
	}

}

function mergeSort(arr: number[], l: number, r: number) {
	let mid = Math.floor((r-l) / 2);

	mergeSort(arr, l, mid);
	mergeSort(arr, mid+1, r);
	merge(arr, l, mid, r);
}

