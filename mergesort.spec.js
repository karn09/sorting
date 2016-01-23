describe('Merge Function', function() {
	it('is able to merge two sorted arrays', function() {
		expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});
	it
});

describe('Split Array function', function() {
	it('is able to split an even length array into two halves', function() {
		expect(split([1, 2, 3, 4])).toEqual([
			[1, 2],
			[3, 4]
		])
	});
	it('is able to split an odd length array into two halves', function() {
		expect(split([1, 2, 3, 4, 5])).toEqual([
			[1, 2],
			[3, 4, 5]
		])
	})
});

describe('Merge Sort', function() {
	// beforeEach(function() {
	// 	spyOn(window, 'merge');;
	// })
	it('handles an empty array', function() {
		expect(mergeSort([])).toEqual([]);
		//expect(merge.calls.count()).toEqual(0);

	});
	it('handles an array with one element', function() {
		expect(mergeSort([1])).toEqual([1]);
		// expect(merge.calls.count()).toEqual(0);

	});
	it('handles an unsorted array', function() {
		expect(mergeSort([5, 3, 4])).toEqual([3, 4, 5]);
		// expect(merge.calls.count()).toEqual(2);

	});
	it('handles a somewhat larger unsorted array of even length elements', function() {
		expect(mergeSort([3, 1, 4, 5, 9, 100])).toEqual([1, 3, 4, 5, 9, 100]);
		// expect(merge.calls.count()).toEqual(1);

	});

	// it('calls merge 6 times', function() {
	// 	mergeSort([10, 3, 1, 4, 5, 9, 100])
	// 	// expect(merge.calls.count()).toEqual(6);
	// });

})