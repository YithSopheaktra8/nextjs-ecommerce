import { Params } from "@/utils/types/ParamType";
import React from "react";
import { BASE_URL } from "@/constants/constants";
import ProductCardComponent from "@/components/ProductCardComponent";
import { ProductType } from "@/utils/types/ProductType";
import ProductCardDetailComponent from "@/components/ProductCardDetailComponent";

async function getProduct(params: string) {
	const response = await fetch(`${BASE_URL}products/${params}`);
	const data = await response.json();
	return data;
}

export default async function page({ params }: Params) {
	const product: ProductType = await getProduct(params.id);

	return (
		<div className="">
			<ProductCardDetailComponent {...product} />
		</div>
	);
}
