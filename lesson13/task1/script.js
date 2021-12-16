// Завдання 1
// Реалізувати функцію useCollection
// яка буде повертати функції
// з допомогою якої ви можете дістати обєкт
// колекції яку ви вибрали

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
//1
// function useCollection(collectionName) {
//   return function (id) {
//     return DB.collections[collectionName][id];
//   };
// }

// const getPostItem = useCollection("posts");
// console.log(getPostItem("posts_1"));

//2
function useCollection(collectionName) {
  if (!DB.collections[collectionName]) {
    DB.collections[collectionName] = {};
  }
  return {
    get: function (id) {
      return DB.collections[collectionName][id];
    },
    create: function (id, data) {
      DB.collections[collectionName][id] = data;
    },

    edit: function (id, data) {
      this.create(id, data);
    },
    deleteOne: function (id) {
      delete DB.collections[collectionName][id];
    },
  };
}

// const collection = useCollection("posts");
// console.log(collection.get("posts_1"));

const collection = useCollection("posts");
collection.create("posts_3", { name: "some name", text: "some text" });

console.log(collection.get("posts_3"));
