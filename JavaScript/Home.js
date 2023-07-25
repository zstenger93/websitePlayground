// JavaScript code
const navbarButtonAbout = document.querySelector(".about-me");
const navbarButtonContact = document.querySelector(".contact-me");
const conversationBubbleABM = document.createElement("div");
const bubbleTextABM = document.createElement("p");
const conversationBubbleCM = document.createElement("div");
const bubbleTextCM = document.createElement("p");
let isButtonClicked = false;

navbarButtonAbout.addEventListener("mouseenter", () => {
	if (!isButtonClicked && navbarButtonAbout.style.animation !== "fall 1s forwards") {
		navbarButtonAbout.style.animation = "fall 1s forwards"; // Start the fall animation on hover
	}
});

navbarButtonAbout.addEventListener("animationend", () => {
	if (!isButtonClicked) {
		navbarButtonAbout.style.animation = "fall 1s forwards paused"; // Pause the animation when it ends

		// Show the conversation bubble with the text when the animation ends
		conversationBubbleABM.style.display = "flex";
		conversationBubbleABM.style.justifyContent = "center";
		conversationBubbleABM.style.alignItems = "center";
		navbarButtonAbout.classList.add("black-text");
	}
});

navbarButtonAbout.addEventListener("click", () => {
	if (!isButtonClicked) {
		isButtonClicked = true;
		navbarButtonAbout.style.animation = "none"; // Stop the animation on click
		handleButtonClick(); // Call the function to open a new page

		// Hide the conversation bubble when the button is clicked
		conversationBubbleABM.style.display = "none";
	}
});

function handleButtonClick() {
	window.open("../html/AboutMe.html", "_self"); // Replace the URL with the desired page to open
}

// Initialize the conversation bubble with text
bubbleTextABM.textContent = "Ouch! This CSS is harder than I thought.";
conversationBubbleABM.classList.add("conversation-bubbleABM");
conversationBubbleABM.appendChild(bubbleTextABM);
document.body.appendChild(conversationBubbleABM);


navbarButtonContact.addEventListener("mouseenter", () => {
	if (!isButtonClicked && navbarButtonContact.style.animation !== "fall 1s forwards") {
		navbarButtonContact.style.animation = "fallCM 1s forwards"; // Start the fall animation on hover
	}
});

navbarButtonContact.addEventListener("animationend", () => {
	if (!isButtonClicked) {
		navbarButtonContact.style.animation = "fallCM 1s forwards paused"; // Pause the animation when it ends

		// Show the conversation bubble with the text when the animation ends
		conversationBubbleCM.style.display = "flex";
		conversationBubbleCM.style.justifyContent = "center";
		conversationBubbleCM.style.alignItems = "center";
		navbarButtonAbout.classList.add("black-text");
	}
});

navbarButtonContact.addEventListener("click", () => {
	if (!isButtonClicked) {
		isButtonClicked = true;
		navbarButtonContact.style.animation = "none"; // Stop the animation on click
		handleButtonClickCM(); // Call the function to open a new page

		// Hide the conversation bubble when the button is clicked
		conversationBubbleCM.style.display = "none";
	}
});

function handleButtonClickCM() {
	window.open("../html/ContanctMe.html", "_self"); // Replace the URL with the desired page to open
}

// Initialize the conversation bubble with text
bubbleTextCM.textContent = "The meaning of life is not css for sure.";
conversationBubbleCM.classList.add("conversation-bubbleCM");
conversationBubbleCM.appendChild(bubbleTextCM);
document.body.appendChild(conversationBubbleCM);
