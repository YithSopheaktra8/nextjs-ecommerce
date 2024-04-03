"use client";

import ProductCardComponent from "@/components/ProductCardComponent";
import { BASE_URL } from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [productList, setProductList] = useState<ProductType[]>([]);

	const getProductList = async () => {
		const response = await fetch(`${BASE_URL}products/`);
		const data = await response.json();
		setProductList(data.results);
	};

	useEffect(() => {
		getProductList();
	}, []);

	return (
		<main>
			<h1 className="text-center text-2xl font-bold my-12">
				Product List
			</h1>
			<div className="grid grid-cols-4 w-screen p-10 gap-5">
				{productList.map((product: ProductType) => (
					<Link
						as={`/detail/${product.id}`}
						href="#"
						key={product.id}>
						<ProductCardComponent
							image={product.image}
							name={product.name}
							price={product.price}
							id={0}
							seller={""}
							category={0}
							desc={""}
							quantity={0}
						/>
					</Link>
				))}
			</div>
		</main>
	);
}
