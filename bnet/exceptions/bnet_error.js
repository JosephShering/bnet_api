

module.exports = class BNetError extends Error {
    constructor(response) {
        super(response);
        console.log(response.status);
    }
}