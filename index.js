// Higher order functions

// f(g(x)) - Here f(x) is a higher order funxtion that take g(x) as its input

// Objective - Print all whole no between 0 and 7

// function wrapper (l, n, action) {
// 	for (let i=l; i<=n; i++) {
// 		action(i)
// 	}
// }

// var arr = []
// wrapper (3,  12, function (k) {
// 	if(k%2 !== 0) {
// 		arr.push (k)
// 	}
// })

// console.log(arr)


// execute some operation on every element of the passed array

function arrayMapper (array, action) {
	for (let i = 0; i < array.length; i++) {
		array [i] = action (array [i]);
	}
	return array;
}

console.log(arrayMapper (
		[1,2, 34,454,54,234,26,3654,34,423,4324324,342],
		function (element) {
			return element === 454? element: null;
		}
	)
)

Array.map (fn)
.filter (fn)
.reduce(fn)
.splice (fn)