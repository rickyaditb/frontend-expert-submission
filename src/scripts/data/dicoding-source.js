import API_ENDPOINT from '../globals/api-endpoint';

class DicodingSource {
  static async allRestaurant() {
    const response = await fetch(API_ENDPOINT.ALL_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detilRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DicodingSource;
