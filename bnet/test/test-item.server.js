const {Container} = require('typedi');
const chai = require('chai');
const BNetService = require('../services/bnet.service');
const ItemService = require('../services/item.service');

describe('Item', () => {
    before(() => {
        Container.set(BNetService, new FakeBNetServiceForItem);
    });

    it('getItem', async () => {
        const itemService = Container.get(ItemService);
        const item = await itemService.getItem('1003');
        chai.assert(item.id !== 0, 'No valid item found');
    });
});


class FakeBNetServiceForItem {
    get() {
        return {
            id: 100
        }
    }

    post() {
        return {
            access_token: 'fake_token'
        }
    }
}

class FakeBNetServiceForMedia {
    get() {
        return 'fake_url';
    }
}