/**
 * 计算除自身以外数组的乘积
 * @param {number[]} nums 输入数组
 * @returns {number[]} 结果数组
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  // 初始化结果数组
  const answer = new Array(n).fill(1);
  // 计算前缀积
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
    debugger
  }

  // 计算后缀积并与前缀积相乘
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
    debugger
  }

  return answer;
}

// 测试用例
if (process.env.NODE_ENV === 'development') {
  const nums = [1, 2, 3, 4];
  const result = productExceptSelf(nums);
  console.log('输入:', nums);
  console.log('输出:', result); // 输出: [24, 12, 8, 6]
} 