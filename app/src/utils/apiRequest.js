// Placeholder API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const apiRequest = () =>
  fetch(apiUrl, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
      return { error };
    });

export default apiRequest;
