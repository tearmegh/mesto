const initialCards = [
  {
    title: 'Великобритания',
    alt: 'старый замок',
    src: 'https://sun9-56.userapi.com/impg/ijlNY_Qti1hBQUAby62po6n_R8BMHiZcMLUS5A/9s6DU6Ijdu4.jpg?size=427x427&quality=95&sign=4dc6f8f8363a0078f92829ce63126c6e&type=album'
  },
  {
    title: 'Фарерские острова',
    alt: 'одинокие домики',
    src: 'https://sun9-17.userapi.com/impg/Vcimy9ZSPF9cwmhh7GWcrs2M3qwqPVI0hzEPJg/KPiGLo-Cqz4.jpg?size=400x399&quality=95&sign=292afafa55a1be7e8a7c3ce976ce93fd&type=album'
  },
  {
    title: 'Нидерланды',
    alt: 'туманное поле',
    src: 'https://sun9-34.userapi.com/impg/hAxtoRRoCPgoZlCUr8WRRKKCwV8wZfs9xtXL4Q/jqXro_Rxww8.jpg?size=427x427&quality=95&sign=af507570f4777f21a881e7b1e6e0e8dd&type=album'
  },
  {
    title: 'Испания',
    alt: 'скалистая местность',
    src: 'https://sun9-11.userapi.com/impg/tErmWOOuQlaTCi3jBMT8uEsK25kdK5BwAfSHMg/Ni86JVbNyPU.jpg?size=425x425&quality=95&sign=f2fcde1cc2f74b0d3bf47cfc7636d8d4&type=album'
  },
  {
    title: 'Австрия',
    alt: 'птица над туманным полем',
    src: 'https://sun9-25.userapi.com/impg/o6plnEpbj_kSbsgSYcExlzgy9iHmbnoe-WQodQ/IhoCbUR3EjA.jpg?size=429x429&quality=95&sign=5fc4e57df83842a22cab919e920efdc2&type=album'
  },
  {
    title: 'Чили',
    alt: 'живописный лес',
    src: 'https://sun9-51.userapi.com/impg/zwgzRBf4RMXJZTJBMGGS56HWN8pJvBnOr6J41w/iEEvJERO2Tc.jpg?size=427x427&quality=95&sign=cb37d8458d266d76613818248892ba76&type=album'
  }
];
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
const cards = document.querySelector(".cards");
let nameText = document.querySelector(".profile__name");
let captionText = document.querySelector(".profile__caption");
let nameInput = document.querySelector(".popup-edit__input_type_name");
let captionInput = document.querySelector(".popup-edit__input_type_caption");
let titleInput = document.querySelector(".popup-add__input_type_title");
let linkInput = document.querySelector(".popup-add__input_type_link");
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
    console.log(evt);
    evt.target.classList.toggle("cards_like-btn_active");
  });
  deleteBtnElement.addEventListener("click", cardDeleteHandler);
}

function renderCards (initialCards) {
  initialCards.forEach(renderCard);
}
renderCards(initialCards);

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
  evt.target.classList.toggle("cards_like-btn_active");
});
cardElement.querySelector(".cards__delete-btn").addEventListener("click", cardDeleteHandler);