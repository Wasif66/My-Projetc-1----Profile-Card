const openWindow = document.querySelector(`.open-window`);
const closeWindow = document.querySelector(`.close-window`);
const container = document.querySelector(`.container`);

openWindow.addEventListener(`click`, function () {
  container.classList.remove(`hidden`);
});

closeWindow.addEventListener(`click`, function () {
  container.classList.add(`hidden`);
});
