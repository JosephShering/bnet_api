const BNetError = require('../exceptions/bnet_error');
const BNetService = require('./bnet.service');

class ItemService {
    constructor(container) {
        this.BNetService = container.get(BNetService);
    }

    async getItem(itemId) {
        const item = await this.BNetService.get(`/data/wow/item/${itemId}`);
        return item;
    }

    async getMedia(href) {
        const media = await this.BNetService.get(href);
        return media;
    }
}

module.exports = ItemService;
