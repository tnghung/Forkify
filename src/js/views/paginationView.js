import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (currentPage === 1 && numPages > 1) {
      return `
          <button data-go_to_Page = "${
            currentPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> 
      `;
    }

    if (currentPage === numPages) {
      return `
      <button data-go_to_Page = "${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
    </button>`;
    }

    if (currentPage === 1 && numPages === 1) return;

    if (currentPage > 1 && numPages > 1) {
      return `
    <button data-go_to_Page = "${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
    </button>
    <button data-go_to_Page = "${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> 
`;
    }
  }
  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (event) {
      event.preventDefault();
      const button = event.target.closest('.btn--inline');

      if (!button) return;

      const goToPage = +button.dataset.go_to_page;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
