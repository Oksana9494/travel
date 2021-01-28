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

// спрятанный текст
let blockText = document.getElementsByClassName("block-text-item");


for (i = 0; i < blockText.length; i++) {
	let textHidden = blockText[i].querySelector(".hidden");
	let openIcon = blockText[i].querySelector(".block-text__icon");
	let iconInner = blockText[i].querySelector(".block-text-icon-inner");
	if (textHidden != null) {
		blockText[i].onclick = function() {
			textHidden.classList.toggle("show");
			openIcon.classList.toggle("icon-active");
			iconInner.classList.toggle("icon-inner-active");
		}
	}
}

// активные элементы меню при скролле
