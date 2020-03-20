module.exports = {
    Query: {
        async auctions(_, {realmID}, {Services}) {
            return Services.AuctionsService.getAuctions(realmID);
        },
        async item(_, {itemID}, {Services}) {
            const item = await Services.ItemService.getItem(itemID);
            return item;
        }
    },
    Item: {
        async photo(parent, __, {Services}) {
            const media = await Services.ItemService.getMedia(parent.media.key.href);
            return media.assets[0].value;
        }
    }
}