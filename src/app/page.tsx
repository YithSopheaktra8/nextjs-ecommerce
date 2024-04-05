/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import BrandComponent from "@/components/BrandComponent";
import CarouselComponent from "@/components/CarouselComponent";
import FeatureProductComponent from "@/components/FeatureProductComponent";
import ProductCardComponent from "@/components/ProductCardComponent";
import { BASE_URL } from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [productList, setProductList] = useState<ProductType[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const fetchProductList = async () => {
		const response = await fetch(
			`${BASE_URL}products/?page=${currentPage}&page_size=16`
		);
		const data = await response.json();
		setProductList(data.results);
	};

	useEffect(() => {
		fetchProductList();
	}, [currentPage, fetchProductList]);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	return (
		<>
			<CarouselComponent />
			<section className="py-12 bg-white sm:py-16 lg:pt-20">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-md mx-auto text-center">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl uppercase">
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

			<section className="py-12 bg-white sm:py-16 lg:pt-20">
				<div className="px-4 mx-auto sm:px-6 lg:px-2xl">
					<div className="max-w-md mx-auto text-center mb-16">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl uppercase">
							browser our product
						</h2>
						<p className="mt-4 text-base font-normal leading-7 text-gray-600">
							category caters to different user preferences,
							ranging from speed and security to customization and
							developer tools.
						</p>
					</div>
					<BrandComponent />
				</div>
			</section>
			<section className="mt-[100px] ">
				<p className="pb-20 w-screen px-[30px] md:[50px] lg:px-[30px] xl:px-[100px] text-2xl font-bold text-gray-900 sm:text-3xl uppercase">
					Best Selling product
				</p>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-screen px-[30px] md:[50px] lg:px-[30px] xl:px-[100px] gap-5 xl:gap-12">
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
			</section>
			<section className="mt-20 mb-10 md:my-20">
				<div className="mt-4 flex justify-center">
					{currentPage > 1 && (
						<button
							onClick={handlePrevPage}
							className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l">
							Previous
						</button>
					)}
					<button
						onClick={handleNextPage}
						className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r">
						Next Page
					</button>
				</div>
			</section>
		</>
	);
}
