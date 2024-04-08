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

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default DicodingSource;
