function mergeSort(array) {
	// do initial split
	// take left and right and sort values in left and right

	var splat = split(array);
	console.log("before: " + splat)
	if (splat[1].length < 2) {
		return merge(splat[0], splat[1]);
	}

	return merge(mergeSort(splat[0]),mergeSort(splat[1]));
}
console.log(mergeSort([2, 4, 10,8, 5, 6]))

function merge(first, second) {
	var toReturn = [];
	while (first.length > 0 && second.length > 0) {
		if (first[0] < second[0]) {
			toReturn.push(first.shift())
		} else if (second[0] < first[0]) {
			toReturn.push(second.shift())
		}
	}
	console.log("after: "+ toReturn.concat(first.concat(second)))

	return toReturn.concat(first.concat(second))

}

function split(arr) {
	var arrlen = arr.length;
	// if (arrlen === 1) {
	// 	return [arr];
	// }
	var split = Math.floor(arrlen / 2);
	return [arr.slice(0, split), arr.slice(split, arrlen)]
}