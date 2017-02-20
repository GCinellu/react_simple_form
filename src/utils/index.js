export function isEmptyObject(object) {
  return !Object.keys(object).length;
}

export function hasEmptyValues(object) {
  for (let key in object) {
    if (object[key] === '') return true;
  }
  return false;
}

export function initialCapitalizedWithDot(name) {
  return name.length > 0 ? name[0].toUpperCase() + '. ' : '';
}