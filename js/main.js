//плавный переход по якорным ссылкам

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const BlockID = anchor.getAttribute('href')
		document.querySelector('' + BlockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}


//аккордеон
let blockText = document.getElementsByClassName("block-text-item");


for (i = 0; i < blockText.length; i++) {
	let textHidden = blockText[i].querySelector(".hidden");
	console.log(textHidden);
	if (textHidden != null) {
		blockText[i].onclick = function() {
			textHidden.classList.toggle("show");
		}
	}
}