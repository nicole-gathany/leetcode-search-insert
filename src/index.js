/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let middle = Math.floor(nums.length / 2);
  let i = middle;
  // console.log(middle)
  //binary search tree
  if (nums[middle] === target) {
    return middle;
  } else if (target < nums[middle]) {
    while (i >= 0) {
      if (nums[i] === target) {
        return i;
      } else if (nums[i] < target && nums[i + 1] > target) {
        return i + 1;
      }
      i--;
    }
  } else if (target > nums[middle]) {
    while (i < nums.length) {
      if (nums[i] >= target) {
        return i;
      }
      i++;
    }
    return nums.length;
  }
};

console.log(searchInsert([1, 3, 5, 7], 4));
console.log(searchInsert([1, 3, 5, 7], 6));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
