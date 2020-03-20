const {gql} = require('apollo-server');

module.exports = gql`
    type AuctionItem {
        id: ID
    }

    type Quality {
        type: String
        name: String
    }

    type InventoryType {
        type: String
        name: String
    }

    type Key {
        href: String
    }

    type Media {
        key: Key
    }

    type Asset {
        key: String
        value: String
    }

    type Item {
        id: ID
        name: String
        quality: Quality
        level: Int
        required_level: Int
        media: Media
        item_class: Media
        inventory_type: InventoryType
        purchase_price: Float
        sell_price: Float
        is_equippable: Boolean
        is_stackable: Boolean
        photo: String
    }

    type Auction {
        id: ID
        item: AuctionItem
        buyout: Float
        quantity: Int
        time_left: String
    }

    type Query {
        auctions(realmID: String!): [Auction]
        item(itemID: ID!): Item
    }
`;