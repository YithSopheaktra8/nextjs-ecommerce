/* eslint-disable @next/next/no-img-element */
"use client";

import { BASE_URL, IMAGE_PLACEHOLDER } from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import { Button, Dropdown, Modal } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function UserTable() {
	const [productList, setProductList] = useState<ProductType[]>([]);
	const [openModal, setOpenModal] = useState(false);
	const [productDetails, setProductDetails] = useState<ProductType | null>(
		null
	);

	const handleView = (product: ProductType) => {
		setProductDetails(product);
		setOpenModal(true);
	};

	const columnsData: TableColumn<ProductType>[] = [
		{
			name: "ID",
			selector: (row) => row.id,
			sortable: true,
		},
		{
			name: "Product Name",
			selector: (row) => row.name,
		},
		{
			name: "Price",
			selector: (row) => row.price,
		},
		{
			name: "Seller",
			selector: (row) => row.seller,
		},
		{
			name: "Image",
			selector: (row): any => <img src={row.image} alt={row.name} />,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div className="gap-5 flex">
					<button
						className="text-green-500"
						onClick={() => handleView(row)}>
						View
					</button>
					<button className="text-blue-500">Edit</button>
					<button className="text-red-500">Delete</button>
				</div>
			),
		},
	];

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`${BASE_URL}products/`);
			const data = await response.json();
			setProductList(data.results);
		}
		fetchData();
	}, []);

	return (
		<div className="mt-10">
			<Modal
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header>
					<p className="text-2xl"> Product Details</p>
				</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<div className="flex gap-10">
							<Image
								src={productDetails?.image || IMAGE_PLACEHOLDER}
								alt={productDetails?.name || "UNKNOWN"}
								width={250}
								height={250}
								className="rounded-lg "
							/>
							<div>
								<p className="text-lg font-bold">
									{productDetails?.name}
								</p>
								<p>${productDetails?.price}</p>
								<p>Instock : {productDetails?.quantity}</p>
								<p>Seller : {productDetails?.seller}</p>
							</div>
						</div>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetails?.desc || "No description available"}
						</p>
					</div>
				</Modal.Body>
			</Modal>
			<DataTable columns={columnsData} data={productList} />
		</div>
	);
}
