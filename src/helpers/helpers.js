export const createTemperature = (temp) => {
  return temp < 0 ? Math.ceil(temp) : Math.floor(temp);
};

export const createLocaleDateString = (dateObj, locale = [], options = {}) =>
  dateObj.toLocaleDateString(locale, options);
