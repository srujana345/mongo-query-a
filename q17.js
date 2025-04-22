db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
    },
  },
  { $sort: { name: 1 } },
  { $skip: 1 },
  { $limit: 1 },
]);
db.employees.aggregate([    

    {$group:{_id:'$department', total:{$sum:"$salary"}}},

]);
db.employees.aggregate([

    {$project:{_id:0,name:1,skills:1}},
    {$unwind:"$skills"}

]);