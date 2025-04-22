db.posts.insertOne({
  title: "Post title",
  content: "Post content",
  author: {
    name: "Cathy",
    email: "cathy@email.com",
  },
});

//display all the posts
// by cathy
//display post title,desc,author name
db.posts.find(
  { "author.email": "cathy@email.com" },
  { _id: 0, "author.name": 1, title: 1, desc: 1 }
);

/////////////////
db.posts.drop();

db.authors.insertOne({
  name: "Cathy",
  email: "cathy@email.com",
});

db.posts.insertOne({
  title: "This is title 1",
  desc: "Description of title 1",
  authorId: ObjectId("68073080df34d14fd6b5f89a"),
});

//display all the posts
// by cathy
//display post title,desc,author name
//need lookup operator

//schema validation
//db.createCollection("customers", {validator:{}})
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be string and required",
        },
      },
    },
  },
});

///insert document
db.customers.insertOne({
  name: 56,
  email:"shawn@email.ocm",
  age: 23,
});