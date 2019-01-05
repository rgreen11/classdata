const express = require('express');
const classInfo = require(`./main.js`);
const app = express();
const port = 4000;
const fs = require('fs')

// const student = [{ // data that exist
//     name: 'Rich',
//     age: '26',
//     location: 'NYC',
//     Grade: '1050'
// }];


/*
{
  students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
  ]
}

Create the class file if it doesn't already exist
If file exists, add a new user object to the class file's array
The GET request must pass all four data points for the user to store into the file
If the student name already exists, UPDATE/REWRITE the students information with the new data passed

*/

// app.get(`/class/add`, () => {
//     classInfo.addClass('test',(student) => {
//         console.log('Test 1');
//         res.send(JSON.parse(student))
//     })
// })


/*
Adding the data
    req.query.class
    req.query.name
    req.query.age
    req.query.city
    req.query.grade
*/

// GET localhost:4000/class/add/?class=physics&name=John&age=30&city=NYC&grade=75
app.get(`/class/add`, (req, res) => {
    const student = [req.query];
    const obj = {
        student
    };
    classInfo.addClass(req.query.class, student, (data) => {
        // the data received from the user is stored in file
        console.log('Adding class complete');

        res.send(obj) // displaying the object on the webpage
        // JSON.stringify(student)

    })

})

/*
Check if the class file exists, if not give an error response
If class file exists show the list of students
*/



// GET localhost:4000/class/list/?class=physics
app.get(`/class/list`, (req, res) => { // displays data

    const noClass = {
        error: `Class ${req.query.class} doesn't exist.`
    }
    
    classInfo.showClass(req.query.class, (readFileErr, classData) => { // running the showClass function and cb 

        if (readFileErr !== null ) {

            res.send(noClass)

        } else {
        const student = JSON.parse(classData);
        const data = {student};
            // console.log(req.query.class);
        // what ever class the user inputs it will display that data
        res.send(data) // classData is the information on the file
        }
    })
})

// localhost:4000/class/listfailing/?class=physics

app.get(`/class/listfailing`, (req, res) => { // displays data
    const noClass = {
        error: `Class ${req.query.class} doesn't exist.`
    }
    
    const array = [];
    classInfo.showClass(req.query.class, (readFileErr, classData) => { 
        const data = JSON.parse(classData)
        if(readFileErr !== null){
            res.send(noClass)
        }
        data.forEach( e =>{
            if (e.grade < 50) {
                array.push(e)
            }
        })

            res.send(array)
        

      
    })
})





// localhost:4000/class/listfromcity/?class=physics&city=MIA
app.get(`/class/listfromcity`, (req, res) => { // displays data
    const wrong = {
        error: `Class ${req.query.class} doesn't exist.`
    };
    classInfo.showClass(req.query.class, (readFileErr, classData) => { 

        if (readFileErr !== null) {
            res.send(wrong)
        } else {
            const data = JSON.parse(classData);
            const array = [];
            for (let i = 0; i < data.length; i++) {

                if (data[i].city === req.query.city) { // checking the entire array and matching old data with new data

                    console.log(`City TESTING`, data[i])
                    array.push(data[i]) // if both data is equal return the data

                }
            }
            res.send(array) // after the for loop is triggered and data does not match return empty array

        }
       
    })
})





app.listen(port, () => {
    console.log(`server is listening ${port}`)
})