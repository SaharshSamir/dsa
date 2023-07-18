let arr = [12, 11, 13, 5, 6];

console.log('before sort\n', arr);

let n = arr.length;

function swap(a:number, b:number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

for(let i=1; i<n; i++) {
	let key = arr[i];
	let j = i-1;

	while(j>=0 && arr[j]>key) {
		arr[j+1] = arr[j];
		j = j-1;
	}

	arr[j+1] = key;
}
console.log('after sort\n', arr);
