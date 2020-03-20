const {Container} = require('typedi');
const chai = require('chai');
const OAuthService = require('../services/oauth.service');

describe('OAuthService', () => {
    it('authorize', async () => {
        const oauthService = Container.get(OAuthService);
        await oauthService.authorize();

        chai.assert(oauthService.token !== '', 'No token found');
    });
});
