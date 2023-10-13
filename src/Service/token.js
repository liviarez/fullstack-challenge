class userToken {
    extractToken(request) {
        const { token } = request.token
        return token
    }
}

module.exports = new userToken();