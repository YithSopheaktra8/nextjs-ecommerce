type Category = {
	name: string;
	icon: string;
};

export type ProductType = {
	id: number;
	seller: string;
	category: Category;
	name: string;
	desc: string;
	image: string;
	price: string;
	quantity: number;
};
