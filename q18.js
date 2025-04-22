db.employees.find({
    name:{$regex:"Cathy"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name:{$regex:"^C"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name:{$regex:"^c",$options:'i'}
},{_id:0,name:1,salary:1})


db.employees.find({
    name:{$regex:"n$",$options:'i'}
},{_id:0,name:1,salary:1})


db.employees.find({
    name:{$regex:"n",$options:'i'}
},{_id:0,name:1,salary:1})