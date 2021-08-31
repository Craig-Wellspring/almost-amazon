import clearDom from '../../helpers/data/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="title">First Name</label>
        <input type="text" class="form-control" id="authorFirstName" aria-describedby="authorFirstName" placeholder="Author's First Name" value="${obj.first_name || ''}" required>
        <label for="title">Last Name</label>
        <input type="text" class="form-control" id="authorLastName" aria-describedby="authorLastName" placeholder="Author's Last Name" value="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Author Description" id="authorDescription" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="price">Email</label>
        <input type="text" class="form-control" id="email" placeholder="Author's e-mail" value=" ${obj.email || ''}" required>
      </div>
      <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit New Author</button>
    </form>`;
};

export default addAuthorForm;
