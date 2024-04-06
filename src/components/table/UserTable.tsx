/* eslint-disable @next/next/no-img-element */
"use client";

import {
	ACCESS_TOKEN,
	BASE_URL,
	IMAGE_PLACEHOLDER,
} from "@/constants/constants";
import { ProductType } from "@/utils/types/ProductType";
import {
	Button,
	Dropdown,
	FileInput,
	Label,
	Modal,
	Textarea,
	TextInput,
} from "flowbite-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function UserTable() {
	const router = useRouter();
	const [productList, setProductList] = useState<ProductType[]>([]);
	const [openModal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [productDetails, setProductDetails] = useState<ProductType | null>(
		null
	);
	const [productId, setProductId] = useState(Number);
	const [editProductDetails, setEditProductDetails] =
		useState<ProductType | null>(null);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [imageData, setImageData] = useState<File | null>(null);

	const handleView = (product: ProductType) => {
		setProductDetails(product);
		setOpenModal(true);
	};

	const handleDelete = (product: ProductType) => {
		setProductId(product.id);
		setOpenDeleteModal(true);
	};

	const handleEdit = (product: ProductType) => {
		setEditProductDetails(product);
		setOpenEditModal(true);
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
			selector: (row): any => (
				<img src={row.image} alt={row.name} width={650} />
			),
		},
		{
			name: "Action",
			selector: (row): any => (
				<div className="gap-3 flex">
					<button
						className="text-white bg-green-500 p-3 rounded-lg font-semibold hover:bg-green-600"
						onClick={() => handleView(row)}>
						View
					</button>
					<button
						className={`text-white p-3 rounded-lg font-semibold  ${
							row.seller === "yith sopheaktra"
								? "bg-blue-500 hover:bg-blue-700"
								: "bg-gray-300 line-through text-black cursor-not-allowed"
						}`}
						onClick={() => {
							if (row.seller === "yith sopheaktra")
								handleEdit(row);
						}}>
						Edit
					</button>
					<button
						className={`text-white p-3 rounded-lg font-semibold  ${
							row.seller === "yith sopheaktra"
								? "bg-red-500 hover:bg-red-700"
								: "bg-gray-300 line-through text-black cursor-not-allowed"
						}`}
						onClick={() => {
							if (row.seller === "yith sopheaktra")
								handleDelete(row);
						}}>
						Delete
					</button>
				</div>
			),
		},
	];

	function deleteProduct(id: Number) {
		fetch(`${BASE_URL}products/${id}/`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
		});
	}

	const handleUpdate = async () => {
		const productId = editProductDetails?.id;

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", `Bearer ${ACCESS_TOKEN}`);
		myHeaders.append(
			"Cookie",
			"csrftoken=UafcJBTYw7ngeP1Ov1FF91N7OXlKVb4Wv8keKsf7fMiqDLZZLD52Z5fr4NPp9X50; sessionid=8r4cx104gr3c4t6tasqsfzts7jvkcov9"
		);

		const formdata = new FormData();
		formdata.append("name", "ISTAD Store Poster");
		if (imageData) {
			formdata.append("image", imageData, imageData.name);
		}

		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
			body: formdata,
		};

		const imageUrl = await fetch(
			"https://store.istad.co/api/file/product/",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => result.image)
			.catch((error) => console.error(error));

		const formData = {
			id : editProductDetails?.id,
			category: {
				name: editProductDetails?.category,
				icon: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693342954-rincon-3-64ee5ca62e001.jpg?crop=1xw:1xh;center,top&resize=980:*",
			},
			name: editProductDetails?.name,
			desc: editProductDetails?.desc,
			image: imageUrl,
			price: editProductDetails?.price,
			quantity: editProductDetails?.quantity,
		};

		try {
			const response = await fetch(`${BASE_URL}products/${productId}/`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				// Update the product list
				const updatedProductList = productList.map((product) => {
					if (product.id === productId) {
						return formData;
					}
					return product;
				});
				setProductList(updatedProductList as ProductType[]);
				setOpenEditModal(false);
			} else {
				// Handle error
				console.error("Failed to update product.");
			}
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};

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
			<DataTable columns={columnsData} data={productList} />

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

			{/* open delete model */}
			<Modal
				show={openDeleteModal}
				size="md"
				onClose={() => setOpenDeleteModal(false)}
				popup>
				<Modal.Header />
				<Modal.Body>
					<div className="text-center">
						<HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
						<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							Are you sure you want to delete this product?
						</h3>
						<div className="flex justify-center gap-4">
							<Button
								color="failure"
								onClick={() => {
									setOpenDeleteModal(false);
									deleteProduct(productId);
									window.location.reload();
								}}>
								{"Yes, I'm sure"}
							</Button>
							<Button
								color="gray"
								onClick={() => setOpenDeleteModal(false)}>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>

			{/* Edit product modal */}
			<Modal
				show={openEditModal}
				size="md"
				onClose={() => setOpenEditModal(false)}
				popup>
				<Modal.Header>Edit Product</Modal.Header>
				<Modal.Body>
					<form method="POST">
						<div>
							<h2 className="text-center text-2xl">
								Update Product
							</h2>
							<div className="mb-2 block mt-5">
								<Label htmlFor="name" value="Product Name" />
							</div>
							<TextInput
								id="name"
								type="text"
								required
								value={editProductDetails?.name || ""}
								onChange={(e) =>
									setEditProductDetails((prevState) => ({
										...prevState,
										name: e.target.value,
										id: prevState?.id || 0,
										seller: prevState?.seller || "",
										category:
											String(prevState?.category) || "", // Ensure category is always a string
										desc: prevState?.desc || "",
										image: prevState?.image || "",
										price: prevState?.price || "",
										quantity: prevState?.quantity || 0,
									}))
								}
							/>
							<div className="mb-2 block mt-5">
								<Label htmlFor="price" value="Product Price" />
							</div>
							<TextInput
								id="price"
								type="text"
								placeholder="$500"
								required
								value={editProductDetails?.price || ""}
								onChange={(e) =>
									setEditProductDetails((prevState) => ({
										...prevState,
										price: e.target.value,
										id: prevState?.id || 0,
										seller: prevState?.seller || "",
										category:
											prevState?.category.toString() ||
											"", // Convert category to string
										name: prevState?.name || "",
										desc: prevState?.desc || "",
										image: prevState?.image || "",
										quantity: prevState?.quantity || 0,
									}))
								}
							/>

							<div className="mb-2 block mt-5">
								<Label
									htmlFor="category"
									value="Product category"
								/>
							</div>
							<TextInput
								id="quantity"
								type="text"
								placeholder="20"
								required
								value={editProductDetails?.category || 0}
								onChange={(e) =>
									setEditProductDetails((prevState) => ({
										...prevState,
										category: e.target.value,
										id: prevState?.id || 0,
										seller: prevState?.seller || "",
										quantity: prevState?.quantity || 0,
										name: prevState?.name || "",
										desc: prevState?.desc || "",
										image: prevState?.image || "",
										price: prevState?.price || "",
									}))
								}
							/>
						</div>
						<div>
							<div className="mb-2 block mt-5">
								<Label
									htmlFor="description"
									value="Product Description"
								/>
							</div>
							<Textarea
								className="h-[150px]"
								id="description"
								placeholder="Air Jordan 1 is a sneaker designed by Peter Moore, Michael Jordan's first signature shoe. It was created for the 1984-85 season and later banned by the NBA for breaking uniform regulations."
								required
								value={editProductDetails?.desc || ""}
								onChange={(e) =>
									setEditProductDetails((prevState) => ({
										...prevState,
										desc: e.target.value,
										id: prevState?.id || 0,
										seller: prevState?.seller || "",
										category:
											prevState?.category.toString() ||
											"", // Convert category to string
										name: prevState?.name || "",
										image: prevState?.image || "",
										price: prevState?.price || "",
										quantity: prevState?.quantity || 0,
									}))
								}
							/>
						</div>
						<div className="mb-2 block mt-5">
							<Label htmlFor="file" value="Upload file" />
						</div>
						<FileInput
							id="file"
							helperText="Product Images"
							onChange={(e) => {
								const file = e.target.files?.[0];
								setImageData(file || null);
								if (file) {
									const reader = new FileReader();
									reader.onload = (event) => {
										const imageDataUrl =
											event.target?.result;
										setEditProductDetails((prevState) => ({
											...prevState,
											image: imageDataUrl as string, // Cast imageDataUrl to string
											id: prevState?.id || 0,
											name: prevState?.name || "",
											seller: prevState?.seller || "",
											category:
												prevState?.category.toString() ||
												"", // Cast category to string
											price: prevState?.price || "",
											quantity: prevState?.quantity || 0,
											desc: prevState?.desc || "",
										}));
									};
									reader.readAsDataURL(file);
								}
							}}
							name="file"
						/>
						<div className="mb-2 block mt-5">
							<Label htmlFor="image" value="Product Image" />
						</div>

						{/* Display image preview */}
						{editProductDetails && editProductDetails.image && (
							<img
								src={editProductDetails.image}
								alt="Preview"
								className="mb-4 rounded-lg"
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						)}
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						color="primary"
						onClick={() => {
							handleUpdate();
							router.push("/dashboard");
							setOpenEditModal(false);
						}}>
						Update
					</button>
					<button
						color="gray"
						onClick={() => setOpenEditModal(false)}>
						Cancel
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
