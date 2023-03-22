export function deepParseJson(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      try {
        const parsedValue = JSON.parse(obj[key]);
        obj[key] = parsedValue;
        deepParseJson(parsedValue);
      } catch (error) {}
    } else if (typeof obj[key] === 'object') {
      deepParseJson(obj[key]);
    }
  }
  return obj;
}
