/**
 * 查找和为k的连续子数组的个数
 * @param {number[]} nums 输入数组
 * @param {number} k 目标和
 * @returns {number} 符合条件的子数组个数
 */
export function subarraySum(nums: number[], k: number): number {

  // 使用Map存储前缀和及其出现次数
  const prefixSumMap = new Map<number, number>();
  prefixSumMap.set(0, 1); // 初始化，前缀和为0出现1次
  
  let count = 0;
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 如果存在一个前缀和，使得 sum - k 等于这个前缀和
    // 说明存在一个子数组的和为k
    if (prefixSumMap.has(sum - k)) {
      count += prefixSumMap.get(sum - k)!;
    }
    // 更新前缀和出现的次数
    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }
  
  return count;
}

// 测试用例
if (process.env.NODE_ENV === 'development') {
  console.group('测试 subarraySum');
  
  const testCases = [
    {
      nums: [1, 1, 1],
      k: 2,
      expected: 2
    },
    {
      nums: [1, 2, 3],
      k: 3,
      expected: 2
    },
    {
      nums: [1, -1, 0],
      k: 0,
      expected: 3
    }
  ];

  testCases.forEach((testCase, index) => {
    const result = subarraySum(testCase.nums, testCase.k);
    console.log(`测试用例 ${index + 1}:`);
    console.log('输入数组:', testCase.nums);
    console.log('目标和 k:', testCase.k);
    console.log('期望结果:', testCase.expected);
    console.log('实际结果:', result);
    console.log('测试' + (result === testCase.expected ? '通过' : '失败'));
    console.log('---');
  });

  console.groupEnd();
}
