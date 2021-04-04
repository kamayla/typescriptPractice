export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');

  console.log('array sample 1:', colors);
  const even: Array<number> = [2, 4, 6, 8];

  even.push(10);
  console.log(even);
}
