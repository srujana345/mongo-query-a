db.employees.find(
    {},
    {_id:0,name:1,salary:1}
);


db.employees.find({ "address.city": "Columbus" });
db.employees.find({ skills: "Java" });