
export type Customer = {
    firstname: string;
    lastname: string;
};

export type Item = {
    isTrending: boolean;
    name: string;
    price: number;
    tax: number;
    // itemCategory: ItemCategory | null;
};

export type ItemCategory = {
    category: string;
};

export type Store = {
    location: string;
    isOpen: boolean;
    // ItemsJoinStores: ItemsJoinStores | undefined
};

export type ItemsJoinStores = {
    quantity: number;
};