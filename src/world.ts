export default class World {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  public sayHello(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerHTML = `<h1>${this.message}</h1>`;
    }
  }
}
