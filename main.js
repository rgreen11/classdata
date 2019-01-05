const fs = require('fs') // fs - file system



const showClass = (className, cb) =>{
  fs.readFile(`./classes/${className}.JSON`,(readFileErr, readFileData) =>{
    
    cb(readFileErr, readFileData )
  })
  
}



const addClass = (className, student, cb) => {

  fs.writeFile(`./classes/${className}.JSON`, JSON.stringify(student), (writeFileErr, writeFileData) => {
    if(writeFileErr)
    console.log('SUCCESSFULLY wrote file')
    // file has been written...  
    cb(writeFileData)
  })

  
}


module.exports = {
  addClass,
  showClass,
};