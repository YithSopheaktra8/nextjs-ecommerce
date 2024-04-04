/* eslint-disable @next/next/no-img-element */
"use client";

import CarouselComponent from "@/components/CarouselComponent";
import FeatureProductComponent from "@/components/FeatureProductComponent";
import ProductCardComponent from "@/components/ProductCardComponent";
import { BASE_URL } from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [productList, setProductList] = useState<ProductType[]>([]);

	const getProductList = async () => {
		const response = await fetch(`${BASE_URL}products/?page_size=8`);
		const data = await response.json();
		setProductList(data.results);
	};

	useEffect(() => {
		getProductList();
	}, []);

	return (
		<main>
			<CarouselComponent />
			<section className="py-12 bg-white sm:py-16 lg:py-20">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-md mx-auto text-center">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
							Our featured Product
						</h2>
						<p className="mt-4 text-base font-normal leading-7 text-gray-600">
							Stay connected, stay fit, and stay stylish with the
							TechProX Smartwatch. Engineered with cutting-edge
						</p>
					</div>

					<FeatureProductComponent />
				</div>
			</section>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-screen px-[30px] md:[50px] lg:px-[30px] xl:px-[100px] gap-5 xl:gap-12">
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
							seller={product.seller}
							category={0}
							desc={product.desc}
							quantity={0}
						/>
					</Link>
				))}
			</div>
		</main>
	);
}
