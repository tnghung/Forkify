import View from './View';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'There are no bookmarks :(((';

  _generateMarkup() {
    return this._data
      .map(recipe => this._generateMarkupPreview(recipe))
      .join('');
  }

  addHandlerBookmarks(handler) {
    window.addEventListener('load', handler);
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
          
        </div>
      </a>
    </li>;
    `;
  }
}

export default new BookmarksView();
