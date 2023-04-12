export default class Error404 extends Error {
  status: Number;

  constructor(message?: string) {
    super(message);
    this.status = 404;
  }
}
