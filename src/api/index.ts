import { mergeArrays, mergeMultipleArrays } from './merge-array';
import { subarraySum } from './k-sum-sub-array';
import { productExceptSelf } from './product-except-self';
import { isValid } from './valid-parentheses';

// 统一导出对象，便于管理和使用
export const ApiService = {
  array: {
    // merge: mergeArrays,
    // mergeMultiple: mergeMultipleArrays,
    // findKSumSubArrays: subarraySum,
    // productExceptSelf: productExceptSelf,
    isValid: isValid,
    // 后续添加其他数组相关方法...  
  },
  // 可以按功能模块添加其他服务
  // string: {
  //   format: stringFormat,
  //   validate: stringValidate,
  // },
  // date: {
  //   format: dateFormat,
  //   parse: dateParse,
  // }
};

// 默认导出
export default ApiService;
