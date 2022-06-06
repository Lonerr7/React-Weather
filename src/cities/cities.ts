export const citiesFn = (city: string) => {
  switch (city) {
    case 'mogilev':
      return {
        lat: 53.900716,
        lng: 30.33136,
      };
    case 'minsk':
      return {
        lat: 53.893009,
        lng: 27.567444,
      };
    case 'kyiv':
      return {
        lat: 50.431759,
        lng: 30.517023,
      };
    case 'berlin':
      return {
        lat: 52.535152,
        lng: 13.390206,
      };
    default:
      return;
  }
};
