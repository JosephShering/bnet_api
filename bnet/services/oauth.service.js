const BNetError = require('../exceptions/bnet_error');
const BNetService = require('./bnet.service');

class OAuthService {
    constructor(container) {
        this.BNetService = container.get(BNetService);
        this.clientId = container.get('clientId');
        this.clientPassword = container.get('clientPassword');
    }
    
    authorize() {
        return this.BNetService.post('/oauth/token', {}, {
            params: {
                scope: 'wow.profile',
                grant_type: 'client_credentials',
            },
            auth: {
                username: this.clientId,
                password: this.clientPassword
            }
        });
    }
}

module.exports = OAuthService;