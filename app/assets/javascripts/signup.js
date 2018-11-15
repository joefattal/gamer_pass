
//
// var modalButton = document.getElementById("signup-button");
// var modal = document.getElementById("signup-modal");
// var closeModalButton = document.getElementById("hamburger")
//
// function openModal() {
// 	return modal.style.display = "flex"
// }
//
// function closeModal() {
// 	return modal.style.display = "none"
// }
//
// modalButton.addEventListener("click", openModal);
// closeModalButton.addEventListener("click", closeModal);


var modalButton = document.getElementById("signup-form-transition");
var submitButton = document.getElementById("signup-form-submit")
var basicsDiv = document.getElementById("basic__details");
var systemsDiv = document.getElementById("game__selection");

function toggleModal() {
	basicsDiv.classList.toggle("signup__hidden");
	systemsDiv.classList.toggle("signup__hidden");
	modalButton.classList.toggle("signup__hidden");
	submitButton.classList.toggle("signup__hidden")
	console.log("modal opening");
}

modalButton.addEventListener("click", toggleModal);
