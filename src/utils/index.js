export function isEmptyObject(object) {
  return !Object.keys(object).length;
}

export function initialCapitalizedWithDot(name) {
  return name ? name[0].toUpperCase() + '. ' : '';
}