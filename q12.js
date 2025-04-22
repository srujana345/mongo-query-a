db.employees.updateOne(
    {
        email:"john@gmail.com"
    },
    {$push:{score:6}}

)

db.employees.updateOne(
        {
            email:"john@gmail.com"
        },
        {$pull:{score:6}}
    )
db.employees.updateMany(
    {},
    {$addToSet:{skills:"Python"}}
)
db.employees.updateMany(
    {},
    {$pop:{score:1}}
)