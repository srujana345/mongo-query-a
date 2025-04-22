db.createView("empView", "employees", [
    { $match: { email: "cathy@gmail.com" } },
  ]);
  
  db.empView.find()