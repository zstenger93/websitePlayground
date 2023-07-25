const navbarButtonAbout = document.querySelector(".about-me");
const navbarButtonContact = document.querySelector(".contact-me");
const conversationBubbleABM = document.createElement("div");
const bubbleTextABM = document.createElement("p");
const conversationBubbleCM = document.createElement("div");
const bubbleTextCM = document.createElement("p");
let isButtonClicked = false;

navbarButtonAbout.addEventListener("mouseenter", () => {
	if (!isButtonClicked && navbarButtonAbout.style.animation !== "fall 1s forwards") {
		navbarButtonAbout.style.animation = "fall 1s forwards";
	}
});

navbarButtonAbout.addEventListener("animationend", () => {
	if (!isButtonClicked) {
		navbarButtonAbout.style.animation = "fall 1s forwards paused";

		conversationBubbleABM.style.display = "flex";
		conversationBubbleABM.style.justifyContent = "center";
		conversationBubbleABM.style.alignItems = "center";
		navbarButtonAbout.classList.add("black-text");
	}
});

navbarButtonAbout.addEventListener("click", () => {
	if (!isButtonClicked) {
		isButtonClicked = true;
		navbarButtonAbout.style.animation = "none";
		handleButtonClick();

		conversationBubbleABM.style.display = "none";
	}
});

function handleButtonClick() {
	window.open("../html/AboutMe.html", "_self");
}

bubbleTextABM.textContent = "Ouch! This CSS is harder than I thought.";
conversationBubbleABM.classList.add("conversation-bubbleABM");
conversationBubbleABM.appendChild(bubbleTextABM);
document.body.appendChild(conversationBubbleABM);


navbarButtonContact.addEventListener("mouseenter", () => {
	if (!isButtonClicked && navbarButtonContact.style.animation !== "fall 1s forwards") {
		navbarButtonContact.style.animation = "fallCM 1s forwards";
	}
});

navbarButtonContact.addEventListener("animationend", () => {
	if (!isButtonClicked) {
		navbarButtonContact.style.animation = "fallCM 1s forwards paused";

		conversationBubbleCM.style.display = "flex";
		conversationBubbleCM.style.justifyContent = "center";
		conversationBubbleCM.style.alignItems = "center";
		navbarButtonAbout.classList.add("black-text");
	}
});

navbarButtonContact.addEventListener("click", () => {
	if (!isButtonClicked) {
		isButtonClicked = true;
		navbarButtonContact.style.animation = "none";
		handleButtonClickCM();

		conversationBubbleCM.style.display = "none";
	}
});

function handleButtonClickCM() {
	window.open("../html/ContanctMe.html", "_self");
}

bubbleTextCM.textContent = "The meaning of life is not css for sure.";
conversationBubbleCM.classList.add("conversation-bubbleCM");
conversationBubbleCM.appendChild(bubbleTextCM);
document.body.appendChild(conversationBubbleCM);
