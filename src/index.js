// * selectors
const menuButton = document.querySelector("body > main > header > button");
const cardButton = document.querySelectorAll(".card > footer > button");
const backPageButton = document.querySelector(
  ".introduction > div > button:first-child"
);
const radioBoxs = document.querySelectorAll(".page-card > .card > input");
const pageCardButton = document.querySelectorAll(
  ".page-card > .price-count > .btn"
);
const completedButton = document.querySelector(" .completed .btn");
// * functions
function setCardsOff() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((ele) => {
    ele.classList.remove("off");
  });
}
function resetPageCard() {
  radioBoxs.forEach((ele) => {
    ele.parentElement.parentElement.classList.remove("active");
  });
}
function backPageToggle() {
  document.body.classList.toggle("active");
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector("body > main > section").classList.toggle("hide");
}
// * events function
function menuButtonHandleClick() {
  const header = document.querySelector("body > main > header");
  header.classList.toggle("clicked");
}
function cardButtonClick(e) {
  setCardsOff();
  e.target.parentElement.parentElement.classList.add("off");
}
function pageCardButtonClick() {
  document.querySelector("body > main > section > main").classList.add("hide");
  document
    .querySelector("body > main > section > .completed")
    .classList.remove("hide");
}
function radioChange(e) {
  resetPageCard();
  e.target.parentElement.parentElement.classList.add("active");
}
function completedButtonClick() {
  document
    .querySelector("body > main > section > main")
    .classList.remove("hide");
  document
    .querySelector("body > main > section > .completed")
    .classList.add("hide");
  document.querySelector("body > main > section").classList.add("hide");
  document.body.classList.toggle("active");
}
// * events
cardButton.forEach((i) => i.addEventListener("click", cardButtonClick));
radioBoxs.forEach((i) => i.addEventListener("click", radioChange));
pageCardButton.forEach((i) => i.addEventListener("click", pageCardButtonClick));
backPageButton.addEventListener("click", () => backPageToggle());
menuButton.addEventListener("click", menuButtonHandleClick);
completedButton.addEventListener("click", completedButtonClick);
