let numbers = [1,2,3,4]

var runningSum = function(nums) {
    let array = []
    
    for(let i=0; i < nums.length;i++) {
      let sum = 0
      console.log('outer loop')
        for(let j=0; j <= i; j++) {
          console.log('inner Loop')
            console.log(nums[i], nums[j])
            sum = sum + nums[j]
        }
      array.push(sum)
    }
  return array

};

console.log(runningSum(numbers)) // [1,3,6,10]
