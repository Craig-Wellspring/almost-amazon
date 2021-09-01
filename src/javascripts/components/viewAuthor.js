import clearDom from '../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="text-white details">
     <h5>${obj.first_name} ${obj.last_name}</h5>
     <p>${obj.description || ''}</p>
     <h6 class="card-title">${obj.email}</h6>
     <p>${obj.favorite ? '<span class="badge bg-info favorite-badge"><i class="fa fa-star" aria-hidden="true"></i> Favorite</span>' : ''}</p>      
     <hr>
    </div>
    <h4 class="text-white">Books:</h4>`;

  Object.values(obj.bookList).forEach((book) => {
    document.querySelector('#view').innerHTML += `
      <h5 class="text-white">${book.title}</h5>
    `;
  });

  document.querySelector('#view').innerHTML += `
    <div class="d-flex flex-column">
      <div class="mt-5">
        <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
};

export default viewAuthor;
