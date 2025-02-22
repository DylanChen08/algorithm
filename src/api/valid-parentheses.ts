/**
 * 判断括号字符串是否有效
 * 
 * 算法思路:
 * 1. 使用栈来存储左括号
 * 2. 遇到右括号时,检查栈顶的左括号是否匹配
 * 3. 最后栈为空则说明所有括号都匹配
 * 
 * @param s 输入的括号字符串
 * @returns 是否为有效的括号字符串
 */
function isValid(s: string): boolean {
    // 创建栈用于存储左括号
    const stack: string[] = [];
    
    // 创建右括号到左括号的映射
    const map: { [key: string]: string } = {
        ')': '(',  // 右圆括号对应左圆括号
        '}': '{',  // 右花括号对应左花括号
        ']': '['   // 右方括号对应左方括号
    };

    // 遍历字符串中的每个字符
    for (let char of s) {
        if (char in map) {  // 如果是右括号
            // 获取栈顶元素,如果栈为空则用'#'代替
            const topElement = stack.length === 0 ? '#' : stack.pop();
            // 检查栈顶的左括号是否与当前右括号匹配
            if (topElement !== map[char]) {
                return false;  // 不匹配则返回false
            }
        } else {  // 如果是左括号
            stack.push(char);  // 将左括号压入栈中
        }
    }

    // 最后检查栈是否为空,为空说明所有括号都匹配
    return stack.length === 0;
}

// 示例测试
console.log(isValid("()")); // 输出: true - 一对匹配的圆括号
console.log(isValid("()[]{}")); // 输出: true - 三对不同类型的匹配括号
console.log(isValid("(]")); // 输出: false - 圆括号和方括号不匹配
console.log(isValid("([])")); // 输出: true - 嵌套的括号也是有效的
