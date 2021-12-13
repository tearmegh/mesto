const editForm = document.querySelector(".popup");
const anchor = document.querySelector(".profile__edit-btn");
const closeEditForm = document.querySelector(".popup__close-btn");
const overlay = document.querySelector(".popup__overlay");
let nameText = document.querySelector(".profile__name");
let captionText = document.querySelector(".profile__caption");
let nameInput = document.querySelector(".popup__input_type_name");
let captionInput = document.querySelector(".popup__input_type_caption");
function openEditForm () {
  editForm.classList.add("popup_active");
  document.body.classList.add("hidden");
  overlay.classList.add("popup__overlay_active");
  nameInput.value = nameText.textContent;
  captionInput.value = captionText.textContent;
}
function closeForm () {
  editForm.classList.remove("popup_active");
  document.body.classList.remove("hidden");
  overlay.classList.remove("popup__overlay_active");
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameText.innerText = nameInput.value;
  captionText.innerText = captionInput.value;
  closeForm();
}
editForm.addEventListener("submit", formSubmitHandler);
anchor.addEventListener("click", openEditForm);
closeEditForm.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);

