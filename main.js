const fs = require('fs') // fs - file system





const addClass = (className, student, cb) => {

  fs.writeFile(`./classes/${className}.JSON`, JSON.stringify(student), (writeFileErr, writeFileData) => {
    console.log('SUCCESSFULLY wrote file')
    // file has been written...  

  })

  cb(className, student)

}

const addStudent = (fileName, child) => {

  // get into the file / read the data
  fs.readFile(`./classes/${fileName}.JSON`, student, function (err) {
    // if (err) throw err;
    for (let i = 0; i < student.length; i++) {
      // loop through the data check to see if the data matches the input
      if (student[i].name === child.name) {
        // if the data has the same name remove the old data and replace it with the new data
        student.splice(i, 1, JSON.stringify(child))
      } else break;
      fs.writeFile(`./classes/${fileName}.JSON`, student.push(JSON.stringify(child)), (writeFileErr, writeFileData) => {
        console.log('SUCCESSFULLY wrote file PART 2')
        console.log(writeFileErr)
        console.log(writeFileData)

      })
    }


  });
  // if our data matches the input 
  // loop through the array and splice the data and replace it with the input


  // fs.writeFile(`./classes/${fileName}.JSON`, child, (writeFileErr, writeFileData) => {
  // console.log('SUCCESSFULLY wrote file')
  // Rich check the fs.writefile you may not need it.
  // file has been written...
  // })


}




module.exports = {
  addClass,
};