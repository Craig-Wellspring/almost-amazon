const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
      <label for="title">First Name</label>
      <input type="text" class="form-control" id="authorFirstName" aria-describedby="authorFirstName" placeholder="Author's First Name" required>
      <label for="title">Last Name</label>
      <input type="text" class="form-control" id="authorLastName" aria-describedby="authorLastName" placeholder="Author's Last Name" required>
      </div>
      <div class="form-group">
        <label for="price">Email</label>
        <input type="text" class="form-control" id="email" placeholder="Author's e-mail" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit New Author</button>
    </form>`;
};

export default addAuthorForm;
