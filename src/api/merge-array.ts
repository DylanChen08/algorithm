/**
 * 合并两个数组
 * @param {Array<T>} arr1 第一个数组
 * @param {Array<T>} arr2 第二个数组
 * @returns {Array<T>} 合并后的数组
 */
export function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('参数必须是数组类型');
  }
  
  return [...arr1, ...arr2];
}

/**
 * 合并多个数组
 * @param {...Array<T>} arrays 需要合并的数组列表
 * @returns {Array<T>} 合并后的数组
 */

export function mergeMultipleArrays<T>(...arrays: T[][]): T[] {
  arrays.forEach((arr, index) => {
    if (!Array.isArray(arr)) {
      throw new Error(`第${index + 1}个参数必须是数组类型`);
    }
  });

  return arrays.reduce((result, current) => {
    return result.concat(current);
  }, [] as T[]);
}

// 仅在开发环境下运行测试用例
if (process.env.NODE_ENV === 'development') {
  // 测试数据
  const testArrays = {
    arr1: [1, 0, 3],
    arr2: [4, 5, 6],
    arr3: [7, 8, 9]
  };

  // 测试合并两个数组
  console.group('测试 mergeArrays');
  const mergeResult = mergeArrays(testArrays.arr1, testArrays.arr2);
  console.log('输入:', testArrays.arr1, testArrays.arr2);
  console.log('输出:', mergeResult);
  console.groupEnd();

  // 测试合并多个数组
  console.group('测试 mergeMultipleArrays');
  const multiMergeResult = mergeMultipleArrays(
    testArrays.arr1,
    testArrays.arr2,
    testArrays.arr3
  );
  console.log('输入:', testArrays.arr1, testArrays.arr2, testArrays.arr3);
  console.log('输出:', multiMergeResult);
  console.groupEnd();

  // 测试错误处理
  console.group('测试错误处理');
  try {
    mergeArrays(testArrays.arr1, "不是数组" as any);
  } catch (error) {
    console.error('错误信息:', (error as Error).message);
  }
  console.groupEnd();
}
