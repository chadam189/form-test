/* 

Schema design for DB


*/



/* 

TABLES

Users:

user ID (int, auto-incremented, primary key), 
first name (char255), 
last name (char255), 
email (char255), 
test status (char255, foreign key to another table, default = 'not graded')
  // this one would be an enumerable - not graded, passed, rejected are the three answers
admin notes (char255, default = 'null')


Answers:

ID (primary key)
user ID (foreign key), 
question (int, 1-5) 
response (char255)


*/