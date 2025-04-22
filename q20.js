db.students.insertOne({
    studentName:'John',
});
db.subjects.insertOne({
    subjectName:'Maths',
});

db.marks.insertOne({
    studentId:ObjectId("68076376df34d14fd6b5f8ac"),
    subjectId:ObjectId("6807647bdf34d14fd6b5f8ad"),
    marks:90,
});

db.marks.aggregate([
    {
      $lookup: {
        from: "subjects",
        localField: "subjectId",
        foreignField: "_id",
        as: "subjects",
      },
    },
    {$unwind:"$subjects"},
    {
      $lookup:{
          from:"students",
          localField:"studentId",
          foreignField:"_id",
          as:"students"
      }
    },
    {$unwind:"$students"},
    {$project:{_id:0,"students.studentName":1,"subjects.subjectName":1,score:1}}
  ]);