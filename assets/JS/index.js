const headingElement = document.getElementById("main-heading");
	console.log(headingElement.innerHTML);
	const newHeadingText = prompt("Введите новый заголовок:");
	headingElement.innerHTML = newHeadingText;