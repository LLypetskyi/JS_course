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

// //Завдання 2 Реалізувати методи .get, .create, .deleteOne, .edit

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

console.log("Метод .get, корий повертає шуканий обєкт");
const collection = useCollection("posts");
console.log(collection.get("posts_1"));

// console.log("Метод .create, корий створює новий елемент колекції");
// const collection = useCollection("posts");
// collection.create("posts_3", { name: "some name", text: "some text" });
// console.log(collection.get("posts_3"));

// console.log("Метод .edite, корий редагує обраний елемент колекції");
// const collection = useCollection("posts");
// collection.edit("posts_1", { name: "change name", text: "change text" });
// console.log(collection.get("posts_1"));

// console.log("Метод .deleteOne корий видаляє вказаний обєкт");
// const collection = useCollection("posts");
// collection.deleteOne("posts_2");
