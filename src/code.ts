export function addNatural(x: number, y: number) {
  if (x < 0 || y < 0) {
    throw new TypeError("Add requires natural numbers");
  }
  return x + y;
}

export function hello(name: string) {
  return "Hello " + name;
}