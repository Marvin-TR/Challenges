const fs = require('fs');
let pro = process.argv[2];
let buff = fs.readFileSync(pro);
let buffstr = buff.toString().split('\n');
console.log(buffstr.length - 1);