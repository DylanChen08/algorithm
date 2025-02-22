class NumMatrix {
  private prefixSum: number[][];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;
    this.prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 计算前缀和
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.prefixSum[i][j] = matrix[i - 1][j - 1]
          + this.prefixSum[i - 1][j]
          + this.prefixSum[i][j - 1]
          - this.prefixSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.prefixSum[row2 + 1][col2 + 1]
      - this.prefixSum[row1][col2 + 1]
      - this.prefixSum[row2 + 1][col1]
      + this.prefixSum[row1][col1];
  }
}

// 测试用例
if (process.env.NODE_ENV === 'development') {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ];

  const numMatrix = new NumMatrix(matrix);
  console.log(numMatrix.sumRegion(2, 1, 4, 3)); // 输出: 8
  console.log(numMatrix.sumRegion(1, 1, 2, 2)); // 输出: 11
  console.log(numMatrix.sumRegion(1, 2, 2, 4)); // 输出: 12
} 