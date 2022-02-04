const title = 'Some blog';
const titleElement = document.querySelector('#title');
titleElement.innerHTML = title;
// titleElement.classList.add('title');

const data = [
  {
    title: 'Hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed finibus ex. Maecenas egestas nunc eu ipsum sodales porttitor. Orci varius natoque penatibus et magnis.',
  },

  {
    title: 'Hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed finibus ex. Maecenas egestas nunc eu ipsum sodales porttitor. Orci varius natoque penatibus et magnis.',
  },
];

const mainContainer = document.querySelector('.mainContainer');

data.forEach((item) => {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const newH2 = document.createElement('h2');
  newH2.innerHTML = item.title;
  postElement.appendChild(newH2);

  const newDesc = document.createElement('p');
  newDesc.innerHTML = item.desc;
  postElement.appendChild(newDesc);

  mainContainer.appendChild(postElement);
});

const addPostForm = document.querySelector('#addNewPost');
const titleInput = document.querySelector('#titleInput');
const descInput = document.querySelector('#descInput');

addPostForm.addEventListener('submit', (Event) => {
  data.push({
    title: titleInput.value,
    desc: descInput.value,
  });

  console.log('data', data);
  Event.preventDefault();
});
