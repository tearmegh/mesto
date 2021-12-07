const editForm = document.querySelector(".profile__edit-form");
const anchor = document.querySelector(".profile__edit-btn");
const closeEditForm = document.querySelector(".profile__close-btn");
const overlay = document.querySelector(".page__overlay");
let nameText = document.querySelector(".profile__name");
let captionText = document.querySelector(".profile__caption");
let nameInput = document.querySelector(".profile__name-input");
let captionInput = document.querySelector(".profile__caption-input");
nameInput.value = nameText.textContent;
captionInput.value = captionText.textContent;
function openEditForm () {
  editForm.classList.add("profile__edit-form_active");
  document.body.classList.add("hidden");
  overlay.classList.add("page__overlay_active");
}
anchor.addEventListener("click", openEditForm);
function closeForm () {
  editForm.classList.remove("profile__edit-form_active");
  document.body.classList.remove("hidden");
  overlay.classList.remove("page__overlay_active");
}
closeEditForm.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameText.innerText = nameInput.value;
  captionText.innerText = captionInput.value;
  closeForm();
}
addEventListener("submit", formSubmitHandler);