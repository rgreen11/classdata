const express = require('express');
const classInfo = require(`./main.js`);
const app = express();
const port = 8000;

const student = [{ // data that exist
    name: 'Rich',
    age: '26',
    location: 'NYC',
    Grade: '1050'
  }];
  
  
  const child = { // data add
    name: 'Chelsea',
    age: '26',
    location: 'NYC',
    Grade: '1090'
  }

/*
{
  students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
  ]
}
*/


classInfo.addClass('test', student, ()=>{
    console.log('Test 1');
})


// app.listen(port, () =>{
//     console.log(`server is listening ${port}`)
// })