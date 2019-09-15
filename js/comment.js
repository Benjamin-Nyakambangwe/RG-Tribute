class Comment {
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }
}

class UI {
  static displayComments() {
    const StoredComments = [
      {
        name: 'Jane',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        name: 'John',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ];

    const comments = StoredComments;

    comments.forEach((comment) => UI.addCommentToList(comment));
  }

  static addCommentToList(comment) {
    const list = document.querySelector('.comments');

    const row = document.createElement('div');
    row.addClassName = 'mycomment';

    row.innerHTML = `
      <h6>${comment.name}</h6>
      <p>${comment.message}</p>
    `;


    list.appendChild(row);
  }
}

//DIsply Comments
document.addEventListener('DOMContentLoaded', UI.displayComments);

//Event Add A book
document.querySelector('#comment-form').addEventListener('submit', (e) => {

  //Prevent Submit
e.preventDefault();

  //Get Form Values
  const name = document.querySelector('#name').value;
  const message = document.querySelector('#message').value;

  //Instantiate Comment
  const comment = new Comment(name, message);


  UI.addCommentToList(comment);
});
