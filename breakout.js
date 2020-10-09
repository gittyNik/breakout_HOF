// Higher order functions

// f(g(x)) - f(x) is a higher order function which accepts g(x) as input

// h(x) => h = function which acts on input `x`

// h(x) = 3x+2

// k(x,y) = 3x+4y+5

// k(2,3) = 3*2+4*3+5 => 23 => k(2,3) = 23

// q(x) = x+9; q(1) => 1+9 = 10
// // q is function as well
// l(x,y,q) =x+y+q(x) // HOF

// l(1,1,q) = 1+1+q(1) = 2+q(1) => 2+10 = 12 


// h(3) = 3*3+2 = 11 > h(3) = 11

// objective - print no. 0 to 7 on console

// Custom HOF
function wrapper (l, n, behavior) { // HOF
	for (let i=l; i<=n; i++) {
		behavior(i); // Fixed behavior(Static) - Dynamic > Sending behavior during runtime
	}	
}

let arr =[]
wrapper(3, 10,  function (k) { 
			    	(k%2)==0 ? arr.push(k) : null
			    	// Ternary statement
			    	// condition ? true block : false block
				}
);

console.log(arr)


     .map()
	 .reduce()
	 .filter()