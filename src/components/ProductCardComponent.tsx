/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/utils/types/ProductType";
import React from "react";

export default function ProductCardComponent({
	image,
	name,
	price,
	desc,
}: ProductType) {


	return (
		// <div classNameName="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
		// 	<a href="#">
		// 		<img
		// 			classNameName="p-8 rounded-t-lg"
		// 			src={image}
		// 			alt="product image"
		// 		/>
		// 	</a>
		// 	<div classNameName="px-5 pb-5">
		// 		<a href="#">
		// 			<h5 classNameName="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
		// 				{name}
		// 			</h5>
		// 		</a>
		// 		<div classNameName="flex items-center mt-2.5 mb-5">
		// 			<div classNameName="flex items-center space-x-1 rtl:space-x-reverse">
		// 				<svg
		// 					classNameName="w-4 h-4 text-yellow-300"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="currentColor"
		// 					viewBox="0 0 22 20">
		// 					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
		// 				</svg>
		// 				<svg
		// 					classNameName="w-4 h-4 text-yellow-300"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="currentColor"
		// 					viewBox="0 0 22 20">
		// 					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
		// 				</svg>
		// 				<svg
		// 					classNameName="w-4 h-4 text-yellow-300"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="currentColor"
		// 					viewBox="0 0 22 20">
		// 					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
		// 				</svg>
		// 				<svg
		// 					classNameName="w-4 h-4 text-yellow-300"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="currentColor"
		// 					viewBox="0 0 22 20">
		// 					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
		// 				</svg>
		// 				<svg
		// 					classNameName="w-4 h-4 text-gray-200 dark:text-gray-600"
		// 					aria-hidden="true"
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					fill="currentColor"
		// 					viewBox="0 0 22 20">
		// 					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
		// 				</svg>
		// 			</div>
		// 			<span classNameName="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
		// 				5.0
		// 			</span>
		// 		</div>
		// 		<div classNameName="flex items-center justify-between">
		// 			<span classNameName="text-3xl font-bold text-gray-900 dark:text-white">
		// 				${price}
		// 			</span>
		// 			<a
		// 				href="#"
		// 				classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
		// 				Add to cart
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
		<div className="w-full flex items-center justify-center h-[450px]  rounded-lg  bg-gray-200 dark:bg-gray-800">
			<article className="max-w-sm w-full h-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
				<div>
					<img
						className="object-cover h-64 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transform duration-300"
						src={image}
						alt="Converse sneakers"
						draggable="false"
					/>
				</div>

				<div className="flex flex-col gap-1 mt-4 px-4">
					<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
						{name}
					</h2>
					<span className="font-normal text-gray-600 dark:text-gray-300 line-clamp-1">
						{desc ? desc : "No description"}
					</span>
					<span className="font-semibold text-gray-800 dark:text-gray-50">
						${price}
					</span>
				</div>


				<div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
					<button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
						<span className="text-base">Add to Cart</span>
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					</button>
				</div>
			</article>
		</div>
	);
}
