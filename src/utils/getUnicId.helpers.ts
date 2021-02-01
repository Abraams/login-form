function dec2hex(decimal: number) {
  const desimalAsString = decimal.toString(16);
  return (`0 + ${desimalAsString}`).substr(-2);
}

export default function getUnicId(length: number): string {
  const arr = new Uint8Array((length || 40) / 2);
  window.crypto.getRandomValues(arr);

  const id = Array
    .from(arr, dec2hex)
    .join('');

  return id;
}
