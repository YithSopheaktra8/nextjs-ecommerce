import { Params } from "@/utils/types/ParamType";
import React from "react";
import { BASE_URL } from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import ProductCardDetailComponent from "@/components/ProductCardDetailComponent";
import { Metadata, ResolvingMetadata } from "next";

async function getProduct(params: string) {
	const response = await fetch(`${BASE_URL}products/${params}`);
	const data = await response.json();
	return data;
}

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	// fetch data
	const product : ProductType = await fetch(`${BASE_URL}products/${id}`).then((res) => res.json());


	return {
		title: product.name,
		description: product.desc,
		openGraph: {
			images: product.image,
		},
	};
}

export default async function page({ params }: Props) {
	const product: ProductType = await getProduct(params.id);

	return (
		<div className="">
			<ProductCardDetailComponent {...product} />
		</div>
	);
}
