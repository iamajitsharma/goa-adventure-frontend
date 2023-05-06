const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const snakeToCamelCase = str => str.replace(/([-_][a-z])/g, 
  group => group.toUpperCase().replace('-', '').replace('_', ''));

function convertToCamelCase(oldObj) {
  if (oldObj === null || oldObj === undefined) return null;
  let newObj = {};
  
  for (const [k, v] of Object.entries(oldObj)) {
    if (typeof v === 'object' && !Array.isArray(v)) {
      let label = snakeToCamelCase(k);
      newObj[label] = convertToCamelCase(v);
      continue;
    }
    newObj[snakeToCamelCase(k)] = v;
  }

  if (Array.isArray(oldObj)) {
    newObj = [ ...Object.values(newObj)];
  }
  
  return newObj;
}

function convertToSnakeCase(oldObj) {
  if (oldObj === null || oldObj === undefined) return null;
  let newObj = {};
  
  for (const [k, v] of Object.entries(oldObj)) {
    if (typeof v === 'object' && !Array.isArray(v)) {
      let label = camelToSnakeCase(k);
      newObj[label] = convertToSnakeCase(v);
      continue;
    }
    newObj[camelToSnakeCase(k)] = v;
  }
  
  return newObj;
}

module.exports = {
  convertToCamelCase,
  convertToSnakeCase,
};