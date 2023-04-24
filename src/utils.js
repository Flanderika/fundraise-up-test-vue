const validateArrayOfObjects = ({ value, propNames }) => {
  return value.every((option) => {
    let result = true;
    propNames.forEach((propName) => {
      result = result && Object.hasOwn(option, propName);
    });
    return result;
  });
};

export { validateArrayOfObjects };
