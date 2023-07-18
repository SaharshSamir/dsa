let arr = [ 64, 25, 12, 22, 11];

let n = arr.length;

function swap(a:number, b:number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp
} 

for(let i=0; i<n; i++) {
	
	let min_index = i;

	//find smallest elem in the remaining subarray
	for(let j=i+1; j<n; j++) {
		if(arr[j] < arr[min_index]){
			min_index = j;
		}
	}

	//swap the smallest elem found with the current elem
	swap(i, min_index);
}

console.log(arr);
//time complexity: O(n^2)
