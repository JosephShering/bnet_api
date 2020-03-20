const BNetService = require('./bnet.service');

class AuctionsService {
    constructor(container) {
        this.BnetService = container.get(BNetService);
    }

    async getAuctions(realmId) {
        const options = {
            namespace: 'dynamic-us'
        };

        const {auctions} = await this.BnetService.get(
            `/data/wow/connected-realm/${realmId}/auctions`,
            options
        );

        return auctions
    }
}

module.exports = AuctionsService;
