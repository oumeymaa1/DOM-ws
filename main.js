// Declaration
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));

// Favourites
for (let fav of favs) {
	fav.addEventListener("click", function () {
		if (fav.style.color == "black") {
			fav.style.color = "red";
		} else {
			fav.style.color = "black";
		}
	});
}

// Remove button
for (let i in deleteBtns) {
	deleteBtns[i].addEventListener("click", function () {
		cards[i].remove();
		total();
	});
}

// Add button
for (let plus of plusBtns) {
	plus.addEventListener("click", function () {
		plus.previousElementSibling.innerHTML++;
		total();
	});
}

// Minus Button
for (let minus of minusBtns) {
	minus.addEventListener("click", function () {
		minus.nextElementSibling.innerHTML > 0
			? minus.nextElementSibling.innerHTML--
			: null;
		total();
	});
}

//Totle price
function total() {
	let qte = Array.from(document.querySelectorAll(".qute"));
	let price = Array.from(document.querySelectorAll(".unit-price"));
	let s = 0;
	for (let i = 0; i < price.length; i++) {
		s = s + price[i].innerHTML * qte[i].innerHTML;
	}
	document.getElementById("total-price").innerHTML = s;
}

