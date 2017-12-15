export function sub(x: number, y: number) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError("Sub requires numbers");
  }
  return x - y;
}