let Ans = document.getElementById('answer');
let Num = document.getElementById('input');
let Add = document.getElementById('plus');
let Sub = document.getElementById('minus');

 	let count = 0
 	
 	function adding () {
 		let amountToAdd = parseInt(Num.value)
 		count += amountToAdd
 		// Update display function
 		updateDis()
 	}
 	
 	function subtracting () {
 		let amountToSub = parseInt(Num.value)
 		count -= amountToSub
 		// Update display Function
 		updateDis()
 	}
 	
 	function updateDis() {
 		Ans.innerText = count
 		if (count < 0) {
 			Ans.style.color = 'red'
 		} else {
 			Ans.style.color = 'black'
 		}
 	}
	
	Add.addEventListener('click', () => {
		// console.log('clicked')
		// add function
		adding() 

	});

	Sub.addEventListener('click', () => {
		// console.log('clicked1')
		// subtract function
		subtracting()
	});