const {Container} = require('typedi');
const chai = require('chai');
const BNetService = require('../services/bnet.service');
const AuctionsService = require('../services/auctions.service');

describe('Auction', () => {
    before(() => {
        Container.set(BNetService, new FakeBNetService);
    });

    it('getAuctions', async () => {
        const auctionService = Container.get(AuctionsService);
        const auctions = await auctionService.getAuctions('1146');
        chai.assert(auctions.length === 0, 'Auctions length does not match zero');
    });
});

class FakeBNetService {
    get() {
        return {
            auctions: []
        }
    }
}
