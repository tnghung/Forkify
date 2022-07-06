import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _modal = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe added';

  constructor() {
    super();
    this.addHandlerShowModal();
    this.addHandlerHideModal();
  }

  toggleModal() {
    this._modal.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this.toggleModal.bind(this));
  }

  addHandlerHideModal() {
    this._btnClose.addEventListener('click', this.toggleModal.bind(this));
    this._overlay.addEventListener('click', this.toggleModal.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }
}

export default new AddRecipeView();
