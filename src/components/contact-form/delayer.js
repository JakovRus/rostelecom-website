export class Delayer {
  timeout;
  delay = 500;

  call(func) {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(func, this.delay);
  }
}