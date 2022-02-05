const title = 'Some blog';
const titleElement = document.querySelector('#title');
titleElement.innerHTML = title;

const data = [
  {
    title: 'Hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed finibus ex. Maecenas egestas nunc eu ipsum sodales porttitor. Orci varius natoque penatibus et magnis.',
    comments: ['fComment', 'SComment'],
  },

  {
    title: 'Hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed finibus ex. Maecenas egestas nunc eu ipsum sodales porttitor. Orci varius natoque penatibus et magnis.',
    comments: [],
  },
];

const mainContainer = document.querySelector('.mainContainer');

function render() {
  mainContainer.innerHTML = '';
  data.forEach((item) => {
    createPost(item.title, item.desc);
  });
}

const addPostForm = document.querySelector('#addNewPost');

addPostForm.addEventListener('submit', (Event) => {
  Event.preventDefault();
  const titleInput = document.querySelector('#titleInput').value;
  const descInput = document.querySelector('#descInput').value;
  data.push({ title: titleInput, desc: descInput, comments: [] });
  render();
});

function createPost(title, desc) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const newH2 = document.createElement('h2');
  newH2.innerHTML = title;
  postElement.appendChild(newH2);

  const newDesc = document.createElement('p');
  newDesc.innerHTML = desc;
  postElement.appendChild(newDesc);

  mainContainer.appendChild(postElement);
}

render();
