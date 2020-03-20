const axios = require('axios');
const BNetError = require('../exceptions/bnet_error');

const API_HOST = 'https://us.api.blizzard.com';
const AUTH_HOST = 'https://us.battle.net';

class BNetService {
    token = ''

    client = axios.create({
        baseURL: API_HOST,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    authClient = axios.create({
        baseURL: AUTH_HOST,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async get(url, options) {
        if(!this.token) {
            throw new Error('Must called OAuthService.authorize before making get requests');
        }

        let response;
        try {
            response = await this.client.get(
                url, {
                params: {
                    access_token: this.token,
                    namespace: 'static-us',
                    locale: 'en_US',
                    ...options,
                }
            });
        } catch(ex) {
            if(ex.response) {
                console.log(ex.response);
                throw new BNetError(ex.response);
            }
    
            throw ex;
        }

        return response.data;
    }

    async post(url, data, options) {
        let response;
        try {
            response = await this.client.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
        } catch(ex) {
            if(ex.response) {
                throw new BNetError(ex.response);
            }
            throw ex;
        }
    
        if(response.status !== 200) {
            throw new BNetError(response)
        }

        return response.data;
    }
}

module.exports = BNetService;
