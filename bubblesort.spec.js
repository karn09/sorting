describe('Bubble Sort', function() {
	beforeEach(function() {
		spyOn(window, 'swap');;
	})
	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
		expect(swap.calls.count()).toEqual(0);

	});
	it('handles an array with one element', function() {
		expect(bubbleSort([1])).toEqual([1]);
		expect(swap.calls.count()).toEqual(0);

	});
	it('handles an unsorted array', function() {
		expect(bubbleSort([5, 3, 4])).toEqual([3, 4, 5]);
		expect(swap.calls.count()).toEqual(2);

	});
	it('handles a somewhat larger unsorted array of even length elements', function() {
		expect(bubbleSort([3, 1, 4, 5, 9, 100])).toEqual([1, 3, 4, 5, 9, 100]);
		expect(swap.calls.count()).toEqual(1);

	});

	it('calls swap 6 times', function() {
		bubbleSort([10, 3, 1, 4, 5, 9, 100])
		expect(swap.calls.count()).toEqual(6);
	});
})