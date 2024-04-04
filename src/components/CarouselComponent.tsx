/* eslint-disable @next/next/no-img-element */
import { Carousel } from "flowbite-react";
import React from "react";

export default function CarouselComponent() {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
			<Carousel pauseOnHover>
				<img src="/carousel/shoes-1.jpg" alt="shoes" />
				<img src="/carousel/headphone.jpg" alt="headphone" />
				<img src="/carousel/phone.jpg" alt="phone" />
			</Carousel>
		</div>
	);
}
