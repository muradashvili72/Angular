export interface IproductCard{
    id: number,
    title: string,
    price:number,
    description: string,
    category: string,
    image: string,
    rating: IProductRating,
    inStock: boolean,
    qty: number,
}
export interface IProductRating{
    rate: number,
    count: number
}
export enum Icategory {
    MEN = 'MEN',
    WOMEN = 'WOMEN',
    JEWELLERY = 'JEWELLERY'
}