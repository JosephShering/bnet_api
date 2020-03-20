const {Container} = require('typedi');
const BNetService = require('../services/bnet.service');


before(() => {
    Container.set('clientId', '');
    Container.set('clientPassword', '');
    Container.set(BNetService, new FakeBNetService);
});

class FakeBNetService {
    get() {
        return {
        };
    }

    post() {
        return {
            access_token: 'test_token'
        };
    }
}
