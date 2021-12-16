const DB = {
  collections: {
    posts: {
      posts_1: {
        name: "Post 1",
        text: "Some text 1",
      },
      posts_2: {
        name: "Post 2",
        text: "Some text 2",
      },
    },
    comments: {
      comment_1: {
        postId: "posts_1",
        text: "Comment 1",
      },
      comment_2: {
        postId: "posts_1",
        text: "Comment 2",
      },
    },
  },
};

//Завдання 1 Реалізувати функцію useCollection яка буде повертати
//  функцію з допомогою якої ви можете дістати обєкт з вибраної колекції

function useCollection(collectionName) {
  return function (id) {
    return DB.collections[collectionName][id];
  };
}

const getPostItem = useCollection("comments");
console.log("Ф-ція котра повертає об'єкт =>", getPostItem);
console.log("Результуючий об'єкт => ", getPostItem("comment_2"));
