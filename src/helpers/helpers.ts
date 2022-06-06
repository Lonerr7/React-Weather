export const createTemperature = (temp: number) => {
  return temp < 0 ? Math.ceil(temp) : Math.floor(temp);
};

export const createLocaleDateString = (
  dateObj: Date,
  locale = [],
  options = {}
) => dateObj.toLocaleDateString(locale, options);
