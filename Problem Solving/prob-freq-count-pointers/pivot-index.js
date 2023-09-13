// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let rightSum = nums.reduce((a, b) => a+b, 0)
    let leftSum = 0
    let pivot = -1
    for(let i=0;i<nums.length;i++){
        leftSum += nums[i]
        if(leftSum === rightSum){
            pivot = i
            break
        }
        rightSum -= nums[i]
    }
    return pivot
}
