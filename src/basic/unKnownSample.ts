export default function unKnownSample(): void {
  let maybe: any = 10;
  console.log(typeof maybe, maybe);

  typeof maybe === 'number' && maybe++;

  console.log(typeof maybe, maybe);
}
