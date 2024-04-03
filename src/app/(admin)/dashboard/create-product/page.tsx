/* eslint-disable @next/next/no-img-element */
"use client";

import { ACCESS_TOKEN, BASE_URL } from "@/constants/constants";
import axios from "axios";
import {
	Button,
	Checkbox,
	FileInput,
	Label,
	Select,
	Textarea,
	TextInput,
} from "flowbite-react";
import React, { useState } from "react";

export default function CreateProduct() {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);


	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
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

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append(
		"Authorization",
		"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MzE5MzkzLCJpYXQiOjE3MTIxNTkzOTMsImp0aSI6IjRiOTQ5OTBiNWEyYzQwYWY4MTYzNjgyNjIwY2RkOGZjIiwidXNlcl9pZCI6NX0.O3xNaye1Q66woZdJoAlBVfaDMp9wJoXz7_GdBJaPMnw"
	);
	myHeaders.append(
		"Cookie",
		"csrftoken=UafcJBTYw7ngeP1Ov1FF91N7OXlKVb4Wv8keKsf7fMiqDLZZLD52Z5fr4NPp9X50; sessionid=8r4cx104gr3c4t6tasqsfzts7jvkcov9"
	);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// // Ensure an image is selected
		// if (!imageData) {
		// 	alert("Please upload an image");
		// 	return;
		// }

		try {

			const formData = {
				category: {
					name: "running shoes",
					icon: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693342954-rincon-3-64ee5ca62e001.jpg?crop=1xw:1xh;center,top&resize=980:*",
				},
				name: productName,
				desc: productDescription,
				image: "imageUrl",
				price: productPrice,
				quantity: productQuantity,
			};

			// Send formData to your API endpoint
			console.log(formData);
			fetch(`${BASE_URL}products/`, {
				method: "POST",
				body: JSON.stringify(formData),
				headers: myHeaders,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Success:", data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	return (
		<main className="grid place-content-center w-screen">
			<form
				className="flex flex-col gap-4 border p-8 mt-10 w-[800px]"
				onSubmit={handleSubmit}
				encType="multipart/form-data"
				method="POST">
				<div>
					<h2 className="text-center text-2xl">Create Product</h2>
					<div className="mb-2 block mt-5">
						<Label htmlFor="name" value="Product Name" />
					</div>
					<TextInput
						id="name"
						type="text"
						placeholder="Air Jordan 1"
						required
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
					<div className="mb-2 block mt-5">
						<Label htmlFor="price" value="Product Price" />
					</div>
					<TextInput
						id="price"
						type="text"
						placeholder="$500"
						required
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
					/>

					<div className="mb-2 block mt-5">
						<Label htmlFor="quantity" value="Product Quantity" />
					</div>
					<TextInput
						id="quantity"
						type="text"
						placeholder="20"
						required
						value={productQuantity}
						onChange={(e) => setProductQuantity(e.target.value)}
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
						value={productDescription}
						onChange={(e) => setProductDescription(e.target.value)}
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
					{imagePreview && (
						<div className="mt-5">
							<img
								src={imagePreview}
								alt="Preview"
								className="max-w-[150px] rounded-md"
							/>
						</div>
					)}
				</div>
				<button
					className="bg-blue-500 text-white p-3 rounded-xl"
					type="submit">
					Create New
				</button>
			</form>
		</main>
	);
}
