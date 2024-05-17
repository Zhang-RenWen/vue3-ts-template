export function deepClone(value) {
  if (!value) {
    return value;
  }
  return JSON.parse(JSON.stringify(value));
}
