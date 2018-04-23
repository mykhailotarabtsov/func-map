function backStr(arr) {
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
};
function map(func, array) {
	arrayPrompt = arrayPrompt.split(', ')
	alert(backStr(arrayPrompt));
};

var arrayPrompt = prompt('Задай масив даних через КОМУ! і я його оберну: ', 'Імя, Імя, Імя');

map();