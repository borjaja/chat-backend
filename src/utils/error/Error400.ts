export default class Error400 extends Error {
  status: Number;

  constructor(message?: string) {
    super(message);
    this.status = 400;
  }
}
