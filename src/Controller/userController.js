import API from "../Service/API";
import token from "../Service/token";

const userController = {
    create: async (_request, response) => {
        const data = API.getUserAPI(token)
        return response.status(201).json(data);

    }
}

module.exports = new userController();