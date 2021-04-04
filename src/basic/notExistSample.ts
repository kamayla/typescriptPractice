export default function notExistSample(): void {
  const name = null;
  const age = undefined;
  console.log(typeof name, name);
  console.log(typeof age, age);
}
