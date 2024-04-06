
import React from "react";
import Image from "next/image";

export default function policy() {
	return (
		<div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
			<div className="w-full flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center text-center space-y-4">
					<h1 className="text-3xl lg:text-4xl font-semibold dark:text-white leading-9 md:leading-7 lg:leading-9 text-gray-800">
						Frequently Asked Questions
					</h1>
					<p className="text-base leading-6 text-center dark:text-gray-400 text-gray-600 w-full md:w-10/12">
						Here are few of the most frequently asked questions by
						our valueable customers
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-10">
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ecom-faq-3-svg1.svg"
							alt="Shipping"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ecom-faq-3-svg1dark.svg"
							alt="Shipping"
							width={100}
							height={100}
						/>
						<p className="text-xl font-medium leading-5 dark:text-white text-gray-800">
							Shipping
						</p>
					</button>
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ecom-faq-3-svg2.svg"
							alt="Payment"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-3-svg2dark.svg"
							alt="Payment"
							width={100}
							height={100}
						/>
						<p className="text-xl font-medium leading-5 dark:text-white text-gray-800">
							Payment
						</p>
					</button>
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/89gbwe.png"
							alt="Account"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-3-svg3dark.svg"
							alt="Account"
							width={100}
							height={100}
						/>
						<p className="text-xl font-medium leading-5 dark:text-white text-gray-800">
							Account
						</p>
					</button>
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/trwvghy.png"
							alt="Products"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-3-svg4dark.svg"
							alt="Products"
							width={100}
							height={100}
						/>
						<p className="text-xl font-medium leading-5 dark:text-white text-gray-800">
							Products
						</p>
					</button>
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/m23fg.png"
							alt="Return Policy"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-3-svg5dark.svg"
							alt="Return Policy"
							width={100}
							height={100}
						/>
						<p className="text-xl w-40 font-medium leading-5 dark:text-white text-gray-800">
							Return Policy
						</p>
					</button>
					<button className="dark:focus:border-white w-full focus:outline-none border dark:bg-gray-800 focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
						<Image
							className="dark:hidden"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vadd.png"
							alt="Contact"
							width={100}
							height={100}
						/>
						<Image
							className="hidden dark:block"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-3-svg6dark.svg"
							alt="Contact"
							width={100}
							height={100}
						/>
						<p className="text-xl w-40 font-medium leading-5 dark:text-white text-gray-800">
							Contact
						</p>
					</button>
				</div>

				<div className="mt-16 flex justify-start flex-col items-start w-full text-left space-y-8">
					<div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
						<h3 className="text-xl font-medium leading-7 dark:text-white md:leading-5 text-left text-gray-800">
							How long does it take for my package to arrive?
						</h3>
						<p className="mt-6 text-base leading-6 dark:text-gray-400 text-gray-600">
							For sterling silver items, your order will be
							delivered within 7 to 10 business days, including
							production and delivery, after you place an order.
						</p>
						<br />
						<p className="text-base leading-6 dark:text-gray-400 text-gray-600">
							For sterling silver items, your order will be
							delivered within 7 to 10 business days, including
							production and delivery, after you place an order.
						</p>
					</div>
					<hr className="border border-gray-100 w-full" />
					<div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
						<h3 className="text-xl font-medium leading-7 dark:text-white md:leading-5 text-left text-gray-800">
							Where is my order?
						</h3>
						<p className="mt-6 text-base leading-6 dark:text-gray-400 text-gray-600">
							Remeber you can query the staus of your oders any
							time in My orders in the My aacount section.l if you
							are not resigered at Mango.com, you can access
							dierectly in the Orders section. In this cause, you
							will have enter your em-mail address and order
							number.
						</p>
						<br />
						<p className="text-base leading-6 dark:text-gray-400 text-gray-600">
							What is more, when your order leaves our
							wharehouses, we will send you an e-mail.
						</p>
					</div>
					<hr className="border border-gray-100 w-full" />
					<div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
						<h3 className="text-xl font-medium leading-7 dark:text-white md:leading-5 text-left text-gray-800">
							Can I cancel or change my Order?
						</h3>
						<p className="mt-6 text-base leading-6 dark:text-gray-400 text-gray-600">
							Yes, you can change or cancel your order within the
							first 10 days of your order placement.
						</p>
					</div>
					<hr className="border border-gray-100 w-full" />
				</div>
			</div>
		</div>
	);
}
