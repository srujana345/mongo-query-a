//Aggregation Framework
db.employees.aggregate([
    { $match: { department: "IT" } },
    { $project: { _id: 0, name: 1, salary: 1 } },
  ]);
  
  db.employees.aggregate([{ $project: { _id: 0, name: 1, salary: 1 } }]);
  
  db.employees.aggregate([
    { $addFields: { Bonus: { $multiply: ["$salary", 2] } } },
  ]);
  
  db.employees.aggregate([
    { $match: { department: "IT" } },
    { $addFields: { Bonus: { $multiply: ["$salary", 2] } } },
    { $project: { _id: 0, name: 1, salary: 1, Bonus: 1 } },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          //cond:[condition,if-true,if-false]
          $cond: [
            {
              $gte: ["$salary", 1500],
            },
            "Grade A",
            "Grade B",
          ],
        },
      },
    },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          //cond:[if,then,else]
          $cond: {
            if: { $gte: ["$salary", 1500] },
            then: "Grade A",
            else: "Grade B",
          },
        },
      },
    },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          $switch: {
            branches: [
              { case: { $gte: ["$salary", 1500] }, then: "Grade A" },
              { case: { $lt: ["$salary", 1500] }, then: "Grade B" },
            ],
            default: "Unknown",
          },
        },
      },
    },
  ]);
  
  
  
  db.employees.aggregate([
    { $match: { salary: { $gt: 1500 } } },
      {
        $project: {
          _id: 0,
          name: 1,
          salary: 1,
          grade: {
            $switch: {
              branches: [
                { case: { $eq: ["$department", 'IT'] }, then: "Information Technology" },
                { case: { $eq: ["$department", 'HR'] }, then: "Human Resources" },
              ],
              default: "Unknown",
            },
          },
        },
      },
    ]);

