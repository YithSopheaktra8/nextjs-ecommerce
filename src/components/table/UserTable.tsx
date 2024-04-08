/* eslint-disable react-hooks/exhaustive-deps */
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
import { toast } from "react-toastify";

export default function UserTable() {
	const route = useRouter();
	const [categoryName, setCategoryName] = useState("");
	const [productList, setProductList] = useState<ProductType[]>([]);
	const [openModal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [productDetails, setProductDetails] = useState<ProductType | null>(
		null
	);
	const [productId, setProductId] = useState(Number);
	const [editProductDetails, setEditProductDetails] = useState<ProductType>(
		{} as ProductType
	);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>();
	const [categoryIcon, setCategoryIcon] = useState<File | null>(null);
	const [categoryIconPreview, setCategoryIconPreview] = useState<
		string | null
	>();

	const [imagePreview, setImagePreview] = useState<string | null>();
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
		console.log(product);
		setOpenEditModal(true);
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
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
			name: "category",
			selector: (row) => row.category ,
		},
		{
			name: "Seller",
			selector: (row) => row.seller,
		},
		{
			name: "Image",
			selector: (row): any => (
				<Image
					src={row.image}
					alt={row.name}
					width={500}
					height={500}
				/>
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

	const handleFileIconChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (event.target.files && event.target.files[0]) {
			setCategoryIcon(event.target.files[0]);
		}
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setCategoryIconPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
			// Update the FormData object with the selected file

			const formdata = new FormData();
			formdata.append("name", "ISTAD Store Poster");
			formdata.append("image", file, file.name);
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (event.target.files && event.target.files[0]) {
			setImageData(event.target.files[0]);
		}
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
			// Update the FormData object with the selected file

			const formdata = new FormData();
			formdata.append("name", "ISTAD Store Poster");
			formdata.append("image", file, file.name);
		}
	};

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

		// const categoryIcon = await fetch(
		// 	"https://store.istad.co/api/file/icons/",
		// )
		const formdataIcon = new FormData();
		formdataIcon.append("name", "ISTAD Store Poster");
		if (categoryIcon) {
			formdataIcon.append("image", categoryIcon, categoryIcon.name);
		}

		const requestOptionsIcon = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
			body: formdataIcon,
		};

		const categoryIconUrl = await fetch(
			"https://store.istad.co/api/file/icon/",
			requestOptionsIcon
		)
			.then((response) => response.json())
			.then((result) => result.image);

		const formData = {
			id: editProductDetails?.id ,
			category: {
				name: editProductDetails.category.name || "",
				icon: categoryIconUrl,
			},
			name: editProductDetails?.name,
			desc: editProductDetails?.desc,
			image: imageUrl,
			price: editProductDetails?.price,
			quantity: editProductDetails?.quantity,
		};

		console.log(formData);

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

	async function fetchData() {
		const response = await fetch(
			`${BASE_URL}products/?page=${currentPage}&page_size=5`
		);
		const data = await response.json();
		setTotalPages(data.total);
		setProductList(data.results);
		setCategoryName(data.results[0].category.name);
	}

	useEffect(() => {
		fetchData();
	}, [currentPage]);

	return (
		<main className="w-full">
			<DataTable columns={columnsData} data={productList} />
			<section className="mt-20 mb-10 md:my-20">
				<div className="mt-4 flex justify-center">
					{currentPage > 1 && (
						<button
							onClick={handlePrevPage}
							className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l">
							Previous
						</button>
					)}
					<p className="flex items-center mx-5 text-lg">
						{currentPage} of {Math.ceil((totalPages as number) / 5)}
					</p>
					<button
						onClick={handleNextPage}
						className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r">
						Next Page
					</button>
				</div>
			</section>

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
									toast.success("Product Deleted");
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
				size="lg"
				onClose={() => setOpenEditModal(false)}
				popup>
				<Modal.Body >
					<form method="POST">
						<div>
							<h2 className="text-center text-2xl mt-10">
								Update Product
							</h2>
							<div className="mb-2 block mt-5">
								<Label htmlFor="name" value="Product Name" />
							</div>
							<TextInput
								id="name"
								type="text"
								value={editProductDetails?.name || ""}
								onChange={(e) =>
									setEditProductDetails(
										(prevState: ProductType) => ({
											...prevState,
											name: e.target.value,
											id: prevState?.id || 0,
											seller: prevState?.seller || "",
											category: {
												name:
													prevState?.category?.name ||
													"",
												icon:
													prevState?.category?.icon ||
													"", // Add the 'icon' property
											},
											desc: prevState?.desc || "",
											image: prevState?.image || "",
											quantity: prevState?.quantity || 0,
											price: prevState?.price || "",
										})
									)
								}
							/>
							<div className="mb-2 block mt-5">
								<Label htmlFor="price" value="Product Price" />
							</div>
							<TextInput
								id="price"
								type="text"
								placeholder="$500"
								value={editProductDetails?.price || ""}
								onChange={(e) =>
									setEditProductDetails(
										(prevState: ProductType) => ({
											...prevState,
											price: e.target.value,
											id: prevState?.id || 0,
											seller: prevState?.seller || "",
											category: {
												name:
													prevState?.category?.name ||
													"",
												icon:
													prevState?.category?.icon ||
													"", // Add the 'icon' property
											},
											desc: prevState?.desc || "",
											image: prevState?.image || "",
											quantity: prevState?.quantity || 0,
											name: prevState?.name || "",
										})
									)
								}
							/>

							<div className="mb-2 block mt-5">
								<Label
									htmlFor="price"
									value="Product Quantity"
								/>
							</div>
							<TextInput
								id="quantity"
								type="text"
								placeholder="$500"
								value={editProductDetails?.quantity || ""}
								onChange={(e) =>
									setEditProductDetails(
										(prevState: ProductType) => ({
											...prevState,
											quantity: parseInt(e.target.value),
											id: prevState?.id || 0,
											seller: prevState?.seller || "",
											category: {
												name:
													prevState?.category?.name ||
													"",
												icon:
													prevState?.category?.icon ||
													"", // Add the 'icon' property
											},
											desc: prevState?.desc || "",
											image: prevState?.image || "",
											price: prevState?.price || "",
											name: prevState?.name || "",
										})
									)
								}
							/>

							<div className="mb-2 block mt-5">
								<Label
									htmlFor="price"
									value="Product category"
								/>
							</div>
							<TextInput
								id="category"
								type="text"
								placeholder="accessories"
								value={editProductDetails?.category?.name || ""}
								onChange={(e) =>
									setEditProductDetails(
										(prevState: ProductType) => ({
											...prevState,
											category: {
												name: e.target.value,
												icon:
													prevState?.category.icon ||
													"",
											},
											id: prevState?.id || 0,
											seller: prevState?.seller || "",
											desc: prevState?.desc || "",
											image: prevState?.image || "",
											quantity: prevState?.quantity || 0,
											price: prevState?.price || "",
											name: prevState?.name || "",
										})
									)
								}
							/>
							<FileInput
								id="file"
								helperText="Category Icons"
								onChange={handleFileIconChange}
								name="file"
								className="mt-5"
							/>
							{categoryIconPreview && (
								<div className="mt-5">
									<Image
										src={categoryIconPreview}
										alt="Preview"
										className="max-w-[150px] rounded-md"
										width={50}
										height={50}
									/>
								</div>
							)}
						</div>

						<div className="mb-2 block mt-5">
							<Label
								htmlFor="price"
								value="Product Description"
							/>
						</div>
						<Textarea
							id="description"
							placeholder="Air Jordan 1 is a sneaker designed by Peter Moore, Michael Jordan's first signature shoe. It was created for the 1984-85 season and later banned by the NBA for breaking uniform regulations."
							className="h-[150px]"
							value={editProductDetails?.desc || ""}
							onChange={(e) =>
								setEditProductDetails(
									(prevState: ProductType) => ({
										...prevState,
										desc: e.target.value,
										id: prevState?.id || 0,
										seller: prevState?.seller || "",
										category: {
											name:
												prevState?.category?.name || "",
											icon:
												prevState?.category?.icon || "",
										},
										image: prevState?.image || "",
										quantity: prevState?.quantity || 0,
										price: prevState?.price || "",
										name: prevState?.name || "",
									})
								)
							}
						/>

						<div className="mb-2 block mt-5">
							<Label htmlFor="file" value="Upload file" />
						</div>
						<FileInput
						id="file"
						helperText="Product Images"
						onChange={handleFileChange}
						name="file"
					/>
						<div className="mb-2 block mt-5">
							<Label htmlFor="image" value="Product Image" />
						</div>

						{imagePreview && (
						<div className="mt-5">
							<Image
								src={imagePreview}
								alt="Preview"
								className="max-w-[150px] rounded-md"
								width={150}
								height={150}
							/>
						</div>
					)}
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						color="primary"
						onClick={() => {
							route.push("/dashboard");
							handleUpdate();
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
		</main>
	);
}
