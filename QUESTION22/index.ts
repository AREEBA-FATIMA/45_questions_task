// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let fruits = ["Apple", "Mango", "Orange", "Grapes"]
console.log(fruits[4])//Ooo array index are started from zero so that is why it is invalid index
fruits[3] = "Grapes"//Error has been corrected by accessing the valid index
console.log(fruits[3])