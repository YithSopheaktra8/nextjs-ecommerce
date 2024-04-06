
import React from "react";
import Image from "next/image";

export default function about() {
	return (
		<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
			<div className="lg:w-10/12 w-full">
				<p className="font-normal text-sm leading-3 text-blue-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer">
					About
				</p>
				<h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 dark:text-white lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
					We are here to make great experience accessible and
					delightfull for everyone
				</h2>
				<p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">
					At KhStore, we believe in more than just transactions; we
					believe in building relationships. Our journey began with a
					simple idea: to provide customers with a curated selection
					of premium products combined with exceptional service.
				</p>
			</div>

			<div className="lg:mt-14 sm:mt-10 mt-12">
				<Image
					className="lg:block hidden w-full"
					src="https://i.ibb.co/GvwJnvn/Group-736.png"
					alt="Group of people Chilling"
					width={500}
					height={500}
				/>
				<Image
					className="lg:hidden sm:block hidden w-full"
					src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
					alt="Group of people Chilling"
					width={500}
					height={500}
				/>
				<Image
					className="sm:hidden block w-full"
					src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
					alt="Group of people Chilling"
					width={500}
					height={500}
				/>
			</div>

			<div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
				<div className="w-full xl:w-5/12 lg:w-6/12">
					<h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">
						Our Story
					</h2>
					<p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">
						Established in 2024, KhStore was born out of a passion
						for Community Engagemen. What started as a humble
						endeavor has since grown into a trusted destination for
						Exceptional Service: Customer satisfaction is our top
						priority. Our dedicated team is here to assist you at
						every step of your shopping journey, from browsing to
						post-purchase support. enthusiasts worldwide.
					</p>
					<p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum.In
						the first place we have granted to God, and by this our
						present charter confirmed for us and our heirs forever
						that the English Church shall be free, and shall have
						her rights entire, and her liberties inviolate; and we
						will that it be thus observed; which is apparent from
					</p>
				</div>
				<div className="lg:flex items-center w-full lg:w-1/2">
					<Image
						className="lg:block hidden w-full"
						src="https://i.ibb.co/2kxWpNm/Group-740.png"
						alt="people discussing on board"
						width={500}
						height={500}
					/>
					<Image
						className="lg:hidden sm:block hidden w-full h-3/4"
						src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
						alt="people discussing on board"
						width={500}
						height={500}
					/>
					<Image
						className="sm:hidden block w-full"
						src="https://i.ibb.co/9g2R7Xr/Group-803.png"
						alt="people discussing on board"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
}
