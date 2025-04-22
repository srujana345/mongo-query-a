db.posts.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "_id",
      as: "author",
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
      desc: 1,
      "author.name": 1,
    },
  },
]);

db.authors.aggregate([
  {
    $lookup: {
      from: "posts",
      foreignField: "authorId",
      localField: "_id",
      as: "posts",
    }
  },
  { $match:{"posts.title":"This is title 5"} },
]);
db.posts.insertOne({
  title: "This is title 2",
  desc: "Description of title 2",
  authorId: ObjectId("68075b24df34d14fd6b5f8a8"),
});

db.authors.insertOne({
  name: "John",
  email: "john@email.com",
});

db.posts.insertOne({
  title: "This is title 5",
  desc: "Description of title 5",
  authorId: ObjectId("68075b24df34d14fd6b5f8a8"),
});
db.posts.insertOne({
  title: "This is title 6",
  desc: "Description of title 6",
  authorId: ObjectId("68075b24df34d14fd6b5f8a8"),
});


db.authors.aggregate([
    {
      $lookup: {
        from: "posts",
        let: { authorId: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$authorId", "$$authorId"] } } },
          { $match: { $expr: { $eq: ["$title", "This is title 5"] } } },
        ],
        as:"posts"
      },
    },
    {$unwind:"$posts"}
  ]);
  