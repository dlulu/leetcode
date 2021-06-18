// 1. 两数之和  https://leetcode-cn.com/problems/two-sum/

/**
 * 用一个map来依次存储已遍历的数相对于target的补数，遍历后面的数的时候可以在O(1)的时间内找到前一个合适的数
 * 总体时间复杂度是O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  map.set(target - nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [];
};