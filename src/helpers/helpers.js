export const createTemp = (temp) => {
  return temp < 0 ? Math.ceil(temp) : Math.floor(temp)
}