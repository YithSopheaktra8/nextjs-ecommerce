import { Params } from "@/utils/types/ParamType";
import React from "react";
import { BASE_URL } from "@/constants/constants";
import ProductCardComponent from "@/components/ProductCardComponent";
import { ProductType } from "@/utils/types/ProductType";

async function getProduct(params: string) {
	const response = await fetch(`${BASE_URL}products/${params}`);
	const data = await response.json();
	return data;
}

export default async function page({ params }: Params) {
	const product: ProductType = await getProduct(params.id);

	return (
		<div className="flex justify-center ">
			<ProductCardComponent
				id={product.id}
				seller={product.seller}
				category={product.category}
				name={product.name}
				desc={product.desc}
				image={product.image}
				price={product.price}
				quantity={product.quantity}
			/>
		</div>
	);
}
