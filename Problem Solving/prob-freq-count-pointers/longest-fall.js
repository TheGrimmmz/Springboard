// add whatever parameters you deem necessary
function longestFall(nums) {
    let counter = 1
    let max = 0
    if(nums.length === 0) return 0
    for(let i=1;i<nums.length;i++){
        if(nums[i] < nums[i -1]){
            counter++
            max = Math.max(counter, max)
        } else {
            counter = 1
        }
    }
    return max || 1
}
