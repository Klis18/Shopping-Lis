export interface Product {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
}

export interface Category {
    id:         number;
    name:       Name;
    slug:       Slug;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

export enum Name {
    Clothes = "Clothes",
    Construction = "Construction",
    Furniture = "Furniture",
    Miscellaneous = "Miscellaneous",
    Nuevo = "nuevo",
    Shoes = "Shoes",
}

export enum Slug {
    Clothes = "clothes",
    Construction = "construction",
    Furniture = "furniture",
    Miscellaneous = "miscellaneous",
    Nuevo = "nuevo",
    Shoes = "shoes",
}
