let added = 0;
for (let i = 2; i < process.argv.length; i++) {
    let number = parseInt(process.argv[i]);
    added += number;
}

console.log(added)