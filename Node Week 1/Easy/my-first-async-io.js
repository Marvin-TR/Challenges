let fs = require('fs');
let pro = process.argv[2];
fs.readFile(pro, (err, data) => {
    if (err){
        console.log(err)
    } else{
        let str = data.toString().split('\n');
        console.log(str.length - 1)
    }
})