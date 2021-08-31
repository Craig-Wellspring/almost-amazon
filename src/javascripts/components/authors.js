import clearDom from '../helpers/data/clearDom';

const showAuthors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  clearDom();

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <hr>
          <i class="btn btn-success fas fa-eye text-black" id="view-author-btn--${item.firebaseKey}"></i>
          <i id="edit-author-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-author--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt text-black"></i>
        </div>
      </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
