
waterTrap = function (height) {

	// To store the maximum water that can be stored
	let res = 0;

	// For every element of the array except first and last element
	for (let i = 1; i < n - 1; i++) {

		// Find maximum element on its left
		let left = arr[i];
		for (let j = 0; j < i; j++) {
			left = Math.max(left, arr[j]);
		}

		// Find maximum element on its right
		let right = arr[i];
		for (let j = i + 1; j < n; j++) {
			right = Math.max(right, arr[j]);
		}

		// Update maximum water value
		res += Math.min(left, right) - arr[i];
	}

	//Print maximum water value
	console.log(res)

}

// let arr = [0, 1, 0, 2, 1, 0,1, 3, 2, 1, 2, 1];
// let n = arr.length;
// waterTrap(arr);

let arr = [4,2,0,3,2,5];
let n = arr.length;
waterTrap(arr);



