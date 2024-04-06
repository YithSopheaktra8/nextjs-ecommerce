/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

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
						<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl uppercase">
							Our featured Product
						</h1>
						<p className="mt-4 text-base font-normal leading-7 text-gray-600">
							Stay connected, stay fit, and stay stylish with the
							TechProX Smartwatch. Engineered with cutting-edge
							tech and a sleek design, this smartwatch is the
							perfect.
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
							developer tools to ensure that you have the best web
							experience.
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
								category={""}
								desc={product.desc}
								quantity={0}
							/>
						</Link>
					))}
				</div>
			</section>
			<section className="mt-20 mb-10 md:mt-20">
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
			<div className="xl:flex xl:justify-end pt-16 mb-10">
				<div className=" sm:mx-auto">
					<div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
						<div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
							<h1 className="text-gray-800 text-2xl font-bold mb-3 pt-12 xl:pt-0">
								Sign Up for Product Updates
							</h1>
							<p className="text-lg text-gray-600 mb-6">
								Sign Up for our weekly newsletter to get the
								latest news updates and amazing offers delivered
								directly in your inbox.
							</p>
							<div className="flex w-full flex-wrap">
								<div className="w-full">
									<div className="flex flex-col mb-3">
										<label
											className="text-base font-bold text-gray-800 mb-2"
											htmlFor="email">
											Email
										</label>
										<input
											type="email"
											id="email"
											placeholder="johnstark97@gmail.com"
											className="focus:outline-none focus:border-[#1A56DB] border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
										/>
									</div>
									<button
										type="submit"
										className="focus:outline-none bg-[#1A56DB] hover:bg-indigo-600 text-white text-base w-full py-3 px-6 rounded">
										Subscribe to Newsletter
									</button>
								</div>
							</div>
						</div>
						<div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-indigo-100 relative py-20">
							<div className="h-4/5 w-4/5">
								<img
									src="https://cdn.tuk.dev/assets/photo-1496430689199-7d6a8ebd3a2f.jfif"
									alt="newsletter"
									className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
								/>
							</div>
							<div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
								<svg
									width={243}
									height={163}
									xmlns="http://www.w3.org/2000/svg">
									<g fill="#667EEA" fillRule="evenodd">
										<rect width={5} height={5} rx="2.5" />
										<rect
											x={30}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={20}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={39}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={60}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={79}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={99}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={119}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={139}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={30}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={59}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={89}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={119}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={148}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={178}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={208}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
										<rect
											x={238}
											y={158}
											width={5}
											height={5}
											rx="2.5"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
