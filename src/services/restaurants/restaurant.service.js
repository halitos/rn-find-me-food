import { mockImages, mocks } from './mock';

export const getRestaurantsData = async (
  location = '37.7749295,-122.4194155'
) => {
  try {
    const mockData = await mocks[location];
    if (!mockData) {
      throw new Error('No data found');
    }
    const transformedData = await transformRestaurantsData(mockData);
    return transformedData;
  } catch (err) {
    console.log('Error', err);
  }
};

const transformRestaurantsData = (data) => {
  const { results } = data;
  const mappedRestaurants = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant?.opening_hours?.open_now,
    };
  });
  return mappedRestaurants;
};
