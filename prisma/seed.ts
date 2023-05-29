import { db } from "../src/utils/db.server";
import { Customer, Item, ItemCategory, Store, ItemsJoinStores } from '../src/types';

// type Customer = {
//     firstname: string;
//     lastname: string;
// };

// type Item = {
//     isTrending: boolean;
//     name: string;
//     price: number;
//     tax: number;
//     // itemCategory: ItemCategory | null;
// };

// type ItemCategory = {
//     category: string;
// };

// type Store = {
//     location: string;
//     isOpen: boolean;
//     // ItemsJoinStores: ItemsJoinStores | undefined
// };

// type ItemsJoinStores = {
//     quantity: number;
// };

async function seed() {
    await Promise.all(
        getCustomers().map((customer) => {
            return db.customer.create({
                data: {
                    firstname: customer.firstname,
                    lastname: customer.lastname,
                },
            });
        })
    );

    const customerM = await db.customer.findFirst({
        where: {
            firstname: "Mihailo",
        },
    });

    const customerC = await db.customer.findFirst({
        where: {
            firstname: "Christos",
        },
    });

    const customerD = await db.customer.findFirst({
        where: {
            firstname: "Davor",
        },
    });

    await Promise.all(
        getItemCategories().map((itemCategory) => {
            const { category } = itemCategory;
            return db.itemCategory.create({
                data: {
                    category,
                },
            });
        })
    );

    // let categorieNames = ["technology", "food", "decoration"]
    // let categories = {}

    // for await (let categoryName of categorieNames) {
    //     let category = await db.itemCategory.findFirst({
    //             where: {
    //                 category: "technology"
    //             }
    //         })

    //     categories[categoryName] = category
    // }

    const categoryTech = await db.itemCategory.findFirst({
        where: {
            category: "technology",
        },
    });

    const categoryFood = await db.itemCategory.findFirst({
        where: {
            category: "food",
        },
    });

    const categoryDecoration = await db.itemCategory.findFirst({
        where: {
            category: "decoration",
        },
    });

    let categories = [categoryTech, categoryFood, categoryDecoration];
    let items = getItems();
    await Promise.all(
        getItems().map((item, index) => {
            const { isTrending, name, price, tax } = item;
            return db.item.create({
                data: {
                    isTrending,
                    name,
                    price,
                    tax,
                    itemCategoryId: categories[index]?.id,
                },
            });
        })
    );

    const chatGPTitem = await db.item.findFirst({
        where: {
            name: "chatGPT",
        },
    });

    const breadItem = await db.item.findFirst({
        where: {
            name: "bread",
        },
    });

    const flowerItem = await db.item.findFirst({
        where: {
            name: "flower",
        },
    });

    await Promise.all(
        getStores().map((store) => {
            const { location, isOpen } = store;
            return db.store.create({
                data: {
                    location,
                    isOpen
                },
            });
        })
    );

    const storeMicrosoftHQ = await db.store.findFirst({
        where: {
            location: "microsoftHQ",
        },
    });

    const storeSupermakret = await db.store.findFirst({
        where: {
            location: "supermakret",
        },
    });

    const storeFlowershop = await db.store.findFirst({
        where: {
            location: "flowershop",
        },
    });

    const storeMegamarket = await db.store.findFirst({
        where: {
            location: "megamarket",
        },
    });

    await db.itemsJoinStores.create(
        {
            data: {
                quantity: 1,
                itemId: chatGPTitem?.id,
                storeId: storeMicrosoftHQ?.id
            }
        }
    )

    // await Promise.all(
    //     getStock().map((stock) => {
    //         const { quantity } = stock;
    //         return db.itemsJoinStores.create({
    //             data: {
    //                 quantity,

    //             },
    //         });
    //     })
    // );




}

seed();

function getCustomers(): Array<Customer> {
    return [
        {
            firstname: "Mihailo",
            lastname: "Štavljanin",
        },
        {
            firstname: "Christos",
            lastname: "Paschalidis",
        },
        {
            firstname: "Davor",
            lastname: "Pancic",
        },
    ];
}

function getItems(): Array<Item> {
    return [
        {
            isTrending: true,
            name: "chatGPT",
            price: 2000,
            tax: 0.1,
        },
        {
            isTrending: true,
            name: "bread",
            price: 160,
            tax: 0.2,
        },
        {
            isTrending: false,
            name: "flower",
            price: 350,
            tax: 0.2,
        },
    ];
}

function getItemCategories(): Array<ItemCategory> {
    return [
        {
            category: "technology",
        },
        {
            category: "food",
        },
        {
            category: "decoration",
        },
    ];
}

function getStores(): Array<Store> {
    return [
        {
            location: "microsoftHQ",
            isOpen: true,
        },
        {
            location: "supermakret",
            isOpen: true,
        },
        {
            location: "flowershop",
            isOpen: true,
        },
        {
            location: "megamarket",
            isOpen: true,
        },
    ];
}

function getStock(): Array<ItemsJoinStores> {
    return [
        {
            quantity: 1,
        },
        {
            quantity: 1000,
        },
        {
            quantity: 150,
        },
        {
            quantity: 10,
        },
        {
            quantity: 20,
        },
        {
            quantity: 30,
        },
    ];
}
