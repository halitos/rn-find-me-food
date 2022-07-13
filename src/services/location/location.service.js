import { locations } from './location.mock';

export const getLocationData = async (searhTerm) => {
  try {
    const mockLocation = await locations[searhTerm];
    if (!mockLocation) {
      throw new Error('No data found');
    }
    const transframedData = transformLocationData(mockLocation);
    return transframedData;
  } catch (err) {
    console.log('Error', err);
  }
};

const transformLocationData = (searchResults) => {
  const result = searchResults.results[0];
  const {
    geometry: {
      location: { lat, lng },
    },
  } = result;
  return {
    lat,
    lng,
  };
};
