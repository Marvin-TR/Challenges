var nums = [4,5,6,7,0,1,2];
var target = 7;

function checkNums(nums) {
    return target === nums;
}

let indexed = nums.findIndex(checkNums)

console.log(indexed)