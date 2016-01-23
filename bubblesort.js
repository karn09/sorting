function bubbleSort (arr) {
	// loop through arr length]
	var count = 0;
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < i; j++) {
			if (arr[i] < arr[j]) {
				tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
				swap(arr[j], arr[i]);
			}
		}
	}
	return arr;
}

function swap (one,two) {
	return two, one;
}
