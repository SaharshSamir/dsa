let arr = [10, 20, 80, 30, 60, 50,110, 100, 130, 170];
let target = 110;

let n = arr.length;

let found = false;

for(let i=0; i<n; i++){
	if(arr[i] === target) {
		found = true
		console.log(i);
		break;
	}
}

if(!found) console.log(-1);

