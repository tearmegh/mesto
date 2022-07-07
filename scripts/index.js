const editForm = document.querySelector(".popup-edit");
const addForm = document.querySelector(".popup-add");
const editBtn = document.querySelector(".profile__edit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const closeEditFormBtn = document.querySelector(".popup-edit__close-btn");
const closeAddFormBtn = document.querySelector(".popup-add__close-btn");
const editFormOverlay = document.querySelector(".popup-edit__overlay");
const addFormOverlay = document.querySelector(".popup-add__overlay");
const imgPopupOverlay = document.querySelector(".img-popup__overlay");
const imgPopup = document.querySelector(".img-popup");
const imgPopupCloseBtn = imgPopup.querySelector(".img-popup__close-btn");
const cardTemplate = document.getElementById("card-template").content;
const cardElement = cardTemplate.querySelector(".cards__item").cloneNode(true);
const cardDeleteBtn = cardElement.querySelector(".cards__delete-btn");
const cards = document.querySelector(".cards");
const nameText = document.querySelector(".profile__name");
const captionText = document.querySelector(".profile__caption");
const nameInput = document.querySelector(".popup-edit__input_type_name");
const captionInput = document.querySelector(".popup-edit__input_type_caption");
const titleInput = document.querySelector(".popup-add__input_type_title");
const linkInput = document.querySelector(".popup-add__input_type_link");
function renderCard(initialCards) {
  const liElement = document.createElement("li");
  liElement.classList.add("cards__item");

  const imgElement = document.createElement("img");
  imgElement.classList.add("cards__image");
  imgElement.src = initialCards.src;
  imgElement.alt = initialCards.alt;

  const deleteBtnElement = document.createElement("button");
  deleteBtnElement.classList.add("cards__delete-btn");
  deleteBtnElement.type = "button";
  deleteBtnElement.setAttribute("aria-label", "удалить");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("cards__title");
  titleElement.textContent = initialCards.title;

  const likeBtnElement = document.createElement("button");
  likeBtnElement.classList.add("cards__like-btn");
  likeBtnElement.type = "button";
  likeBtnElement.setAttribute("aria-label", "нравится");

  const divElement = document.createElement('div');
  divElement.classList.add("cards__title-btn-wrapper");
  divElement.appendChild(titleElement);
  divElement.appendChild(likeBtnElement);

  liElement.appendChild(imgElement);
  liElement.appendChild(deleteBtnElement);
  liElement.appendChild(divElement);
  
  cards.appendChild(liElement);
  likeBtnElement.addEventListener("click", function (evt) {
    evt.target.classList.toggle("cards__like-btn_active");
  });
  liElement.querySelector(".cards__image").addEventListener("click", openImgPopup);
  deleteBtnElement.addEventListener("click", cardDeleteHandler);
}

function renderCards (initialCards) {
  initialCards.forEach(renderCard);
}
renderCards(initialCards);

function openEditForm () {
  editForm.classList.add("active");
  document.body.classList.add("hidden");
  nameInput.value = nameText.textContent;
  captionInput.value = captionText.textContent;
}

function openAddForm () {
  addForm.classList.add("active");
  document.body.classList.add("hidden");
}
function closeEditForm () {
  editForm.classList.remove("active");
  document.body.classList.remove("hidden");
}
function closeAddForm () {
  addForm.classList.remove("active");
  document.body.classList.remove("hidden");
}
function createCard (cardElement) {
  cardElement.querySelector(".cards__image").src = linkInput.value;
  cardElement.querySelector(".cards__title").textContent = titleInput.value;
  cardElement.querySelector(".cards__image").addEventListener("click", openImgPopup);
  return cardElement;
}
function openImgPopup (evt) {
  imgPopup.classList.add("active");
  document.body.classList.add("hidden");
  const cardElement = evt.target.closest(".cards__item");
  const cardImage = cardElement.querySelector(".cards__image");
  const cardTitle = cardElement.querySelector(".cards__title");
  const openedImage = imgPopup.querySelector(".img-popup__image");
  const openedImageCaption = imgPopup.querySelector(".img-popup__caption");
  openedImage.src = cardImage.src;
  openedImageCaption.textContent = cardTitle.textContent;
}
function closeImgPopup () {
  imgPopup.classList.remove("active");
  document.body.classList.remove("hidden");
}
function cardDeleteHandler (evt) {
  const cardElement = evt.target.closest(".cards__item");
  cardElement.remove();
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
cardElement.querySelector(".cards__like-btn").addEventListener("click", function (evt) {
  evt.target.classList.toggle("cards__like-btn_active");
});
cardDeleteBtn.addEventListener("click", cardDeleteHandler);
imgPopupOverlay.addEventListener("click", closeImgPopup);
imgPopupCloseBtn.addEventListener("click", closeImgPopup);