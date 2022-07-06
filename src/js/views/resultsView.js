import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your search! Please try again!';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(recipe => this._generateMarkupPreview(recipe))
      .join('');
  }

  _generateMarkupPreview(recipe) {
    const id = window.location.hash.slice(1);
    console.log(id);
    return `
    <li class="preview">
      <a class="preview__link ${
        recipe.id === id ? 'preview__link--active' : ''
      }" href="#${recipe.id}">
        <figure class="preview__fig">
          <img src="${recipe.image}" alt="${recipe.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${recipe.title}</h4>
          <p class="preview__publisher">${recipe.publisher}</p>
          <div class="preview__user-generated ${recipe.key ? '' : 'hidden'}">
            <svg>
            <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>;
    `;
  }
}

export default new ResultsView();
