/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import fetchProductList from "@/utils/fetch/fetchProduct";
import { ProductType } from "@/utils/types/ProductType";
import Link from "next/link";
import { BASE_URL } from "@/constants/constants";

export default function MoreProductComponent() {
	const [productList, setProductList] = useState<ProductType[]>([]);

	const fetchProductList = async () => {
		const response = await fetch(`${BASE_URL}products/?page_size=4`);
		const data = await response.json();
		setProductList(data.results);
	};

	useEffect(() => {
		fetchProductList();
	}, []);

	return (
		<>
			<h1 className="text-2xl text-center font-bold text-gray-900 sm:text-3xl uppercase">
				New Arrival Product
			</h1>
			<div className=" mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
				<div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
					{productList.map((product: ProductType) => (
						<Link
							as={`/detail/${product.id}`}
							href="#"
							key={product.id}>
							<div className="p-5 rounded-lg py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer h-[730px]">
								<Image
									src={product.image}
									alt="product"
									className="w-full h-[400px] object-cover rounded-lg"
									width={250}
									height={250}
								/>
								<div className="space-x-1 flex justify-center mt-10">
									<svg
										className="w-4 h-4 mx-px fill-current text-orange-600"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 14 14">
										<path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
									</svg>
									<svg
										className="w-4 h-4 mx-px fill-current text-orange-600"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 14 14">
										<path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
									</svg>
									<svg
										className="w-4 h-4 mx-px fill-current text-orange-600"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 14 14">
										<path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
									</svg>
									<svg
										className="w-4 h-4 mx-px fill-current text-orange-600"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 14 14">
										<path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
									</svg>
									<svg
										className="w-4 h-4 mx-px fill-current text-gray-300"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 14 14">
										<path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
									</svg>
								</div>
								<h1 className="text-xl font-semibold my-5">
									{product.name}
								</h1>
								<p className="mb-5 line-clamp-1">
									{product?.desc || "No description"}
								</p>
								<h2 className="font-semibold mb-5">$34.99</h2>
								<button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
									Add To Cart
								</button>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
