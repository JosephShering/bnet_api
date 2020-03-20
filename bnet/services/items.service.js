
class ItemsService {
    getItemsToLookup(auctions) {
        return Object.keys(
                auctions.reduce((ids, auction) => {
                ids[auction.item.id] = null;
                return ids;
            }, {})
        );
    }
}

module.exports = ItemsService;