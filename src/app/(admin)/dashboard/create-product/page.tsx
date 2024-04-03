/* eslint-disable @next/next/no-img-element */
"use client";

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
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<main className="grid place-content-center w-screen">
			<form className="flex flex-col gap-4 border p-8 mt-10 w-[800px]">
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
					/>
					<div className="mb-2 block mt-5">
						<Label htmlFor="price" value="Product Price" />
					</div>
					<TextInput
						id="price"
						type="text"
						placeholder="$500"
						required
					/>

					<div className="mb-2 block mt-5">
						<Label htmlFor="quantity" value="Product Quantity" />
					</div>
					<TextInput
						id="quantity"
						type="text"
						placeholder="20"
						required
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
					/>
					<div className="mb-2 block mt-5">
						<Label htmlFor="file" value="Upload file" />
					</div>
					<FileInput id="file" helperText="Product Images" onChange={handleFileChange}/>
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

				<Button type="submit">Create New</Button>
			</form>
		</main>
	);
}
