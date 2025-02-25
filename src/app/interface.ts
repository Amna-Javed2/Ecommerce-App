/* eslint-disable @typescript-eslint/no-explicit-any */


export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface fullProduct{
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    images: any;
    description: string;
    price_id: string;
}