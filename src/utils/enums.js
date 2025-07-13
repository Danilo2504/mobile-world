/* 
   - VALUE es el valor a evaluar
   - ENUM_OBJ es el objeto con los valores disponibles
   - DEFAULT_KEY es la clave fallback o valor por defecto del objeto
   - TRUE_KEY es el valor que se retorna en caso que value sea true.
*/
export const getTypeFromEnum = ({value, enumObj, defaultKey, trueKey}) => {
  if (value === true && trueKey) {
    return enumObj[trueKey];
  }

  const normalized = String(value).toUpperCase();
  return enumObj[normalized] || enumObj[defaultKey];
};

export const hasKey = ({key, enumObj}) => {
   return (enumObj[key] !== undefined && enumObj[key]) || false;
}

export const getKey = ({key, enumObj}) => {
   return hasKey({key: key, enumObj: enumObj}) ? enumObj[key] : false;
}