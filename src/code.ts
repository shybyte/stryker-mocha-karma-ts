export function add(x: number, y: number) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError("Add requires numbers");
  }
  return x + y;
}

export function hello(name: string) {
  return "Hello " + name;
}