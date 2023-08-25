export type Product = {
    title: string,
    tag: string,
    rating: number,
    price: number,
    discount: number,
    description: string,
    productDescription: string,
    additionalInfo: string,
    image: string,
    __v: number,
    _id: string
}

export type CartProduct = {
    product: Product,
    quantity: number
}

export type productData = {
	title: string | undefined;
	tag: string | undefined;
	rating: number | undefined;
	price: number | undefined;
	discount: number | undefined;
	description: string | undefined;
	productDescription: string | undefined;
	additionalInfo: string | undefined;
};