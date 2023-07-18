//bubble sort 
//in each iteration, compare 2 elems, and swap if elemA > elemB

let arr = [5, 1, 4, 2, 8];

let n = arr.length;

function swap(a:number, b:number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

for (let i=0; i<n-1; i++) {
	//last i elements are already in order
	for (let j=0; j<n-i-1; j++) {
		if(arr[j] > arr[j+1]){
			swap(j, j+1);
		} 	
	}
}

console.log(arr);
//time complexity: O(n^2)
