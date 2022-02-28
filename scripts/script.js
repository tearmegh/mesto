const editForm = document.querySelector(".popup-edit");
const addForm = document.querySelector(".popup-add");
const editBtn = document.querySelector(".profile__edit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const closeEditFormBtn = document.querySelector(".popup-edit__close-btn");
const closeAddFormBtn = document.querySelector(".popup-add__close-btn");
const editFormOverlay = document.querySelector(".popup-edit__overlay");
const addFormOverlay = document.querySelector(".popup-add__overlay");
const cardTemplate = document.getElementById("card-template").content;
const cardElement = cardTemplate.querySelector(".cards__item").cloneNode(true);
let cards = document.querySelector('.cards');
let nameText = document.querySelector(".profile__name");
let captionText = document.querySelector(".profile__caption");
let nameInput = document.querySelector(".popup-edit__input_type_name");
let captionInput = document.querySelector(".popup-edit__input_type_caption");
let titleInput = document.querySelector(".popup-add__input_type_title");
let linkInput = document.querySelector(".popup-add__input_type_link");
function openEditForm () {
  editForm.classList.add("popup-edit_active");
  document.body.classList.add("hidden");
  editFormOverlay.classList.add("popup-edit__overlay_active");
  nameInput.value = nameText.textContent;
  captionInput.value = captionText.textContent;
}
function openAddForm () {
  addForm.classList.add("popup-add_active");
  document.body.classList.add("hidden");
  addFormOverlay.classList.add("popup-add__overlay_active");
}
function closeEditForm () {
  editForm.classList.remove("popup-edit_active");
  document.body.classList.remove("hidden");
  editFormOverlay.classList.remove("popup-edit__overlay_active");
}
function closeAddForm () {
  addForm.classList.remove("popup-add_active");
  document.body.classList.remove("hidden");
  addFormOverlay.classList.remove("popup-add__overlay_active");
}
function createCard (cardElement) {
  cardElement.querySelector(".cards__image").src = linkInput.value;
  cardElement.querySelector(".cards__title").textContent = titleInput.value;
  return cardElement;
}
function editFormSubmitHandler (evt) {
  evt.preventDefault();
  nameText.innerText = nameInput.value;
  captionText.innerText = captionInput.value;
  closeEditForm();
}
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  createCard(cardElement);
  cards.prepend(cardElement);
  closeAddForm();
}
editForm.addEventListener("submit", editFormSubmitHandler);
addForm.addEventListener("submit", addFormSubmitHandler);
editBtn.addEventListener("click", openEditForm);
addBtn.addEventListener("click", openAddForm);
closeEditFormBtn.addEventListener("click", closeEditForm);
closeAddFormBtn.addEventListener("click", closeAddForm);
editFormOverlay.addEventListener("click", closeEditForm);
addFormOverlay.addEventListener("click", closeAddForm);
