export default function genericSample() {
  type Reduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const numberReduce: Reduce<number> = (array, initialValue) => {
    return array.reduce((pre, current) => {
      return pre + current;
    }, initialValue);
  };
  console.log(numberReduce([2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
}
