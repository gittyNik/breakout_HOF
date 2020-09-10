// Higher order functions

// f(g(x)) - f(x) is a higher order function which accepts g(x) as input

// objective - print no. 0 to 6 on console

// function wrapper (n1, n2, action) {
// 	for (let i=n1; i<=n2; i++) {
// 		action(i);
// 	}
// }

// arr = []
// wrapper(3, 9, function (k) {
// 				if(k%2 === 0) arr.push(k);				
// 			  });

// console.log(arr)


// function arrayMapper (array, action) {
// 	for (let i=0; i<array.length;i++) {
// 		array[i] = action ( array[i] )
// 	}
// }

// let array = [7,75,46,2,62,6465436543,6,5465,4]

// arrayMapper (array, function (element) {
// 						switch (element) {
// 							case 62:
// 							case 75:
// 							case 7:						
// 								return element;
// 							default:
// 								return null;
// 						}
// 					});

//  console.log(array)

 let ab = [1,2,3].map(function (i) {
					   	return 2*i;
					  })

 console.log(ab)

 .map()
 .reduce()
 .splice()
 .filter()