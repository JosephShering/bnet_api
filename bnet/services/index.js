const {Container} = require('typedi');

const OAuthService = require('./oauth.service');
const AuctionsService = require('./auctions.service');
const ItemService = require('./item.service');
const ItemsService = require('./items.service');
const BnetService = require('./bnet.service');

Container.set('clientId', process.env.CLIENT_ID);
Container.set('clientPassword', process.env.CLIENT_PASSWORD);

class Services {
    constructor(container) {
        this.OAuthService = container.get(OAuthService);
        this.AuctionsService = container.get(AuctionsService);
        this.ItemService = container.get(ItemService);
        this.BnetService = container.get(BnetService);
        this.ItemsService = container.get(ItemsService);
    }
}

module.exports = Container.get(Services);