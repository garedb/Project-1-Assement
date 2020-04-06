console.log('hey there');

let Ans = document.getElementById('answer');
let Num = document.getElementById('input');
let Add = document.getElementById('plus');
let Sub = document.getElementById('minus');

 
	Add.addEventListener('click', () => {
		console.log('clicked')
		let Ans = (Num.value ++)

	});

	Sub.addEventListener('click', () => {
		console.log('clicked1')
		let Ans = (Num.value --)
	});