db.employees.find({
  salary: { $gt: 1500 },
  department: "HR",
});
db.employees.find(
    { $and: [{ salary: { $gt: 1500 } }, 
        { department: "HR" }
    ]
 });
 db.employees.find(
    { $nor: [{ salary: { $gte: 1500 } }, 
        { department: "HR" }
    ]
 });

 db.employees.find({
    salary:{$lt:1500},
    department:{$ne:'HR'}
 })

 db.employees.find({c1,c2})
 db.employees.find({$or:[{c1},{c2}]})     
//  eq,ne, or,and,nor

db.employees.insertOne({
    name: "test1",
    email:"test1@gmail.com"
  });

  db.employees.find({
    department: { $exists: false },
  })