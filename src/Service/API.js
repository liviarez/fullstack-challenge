const axios = require('axios'); 
//communication  

class getUserAPI {
async fetchUsersData(token) {
    const queryParams = {
        method: 'GET',
        url: 'test-url',
        headers: {
            'key-object': token
        }
    }

    try {
        const response = await axios.get(queryParams);
        const data = await response.json()
        return data;
    } catch (error) {
        throw new Error('Something went wrong while fetching users API')
    }
  
}

}

module.exports = new getUserAPI();
