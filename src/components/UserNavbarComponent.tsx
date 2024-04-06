
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNavbarComponent from "./AdminNavbarComponent";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function UserNavbarComponent() {
	const router = useRouter();
	const pathName = usePathname();


	if (pathName === "/dashboard") {
		return <AdminNavbarComponent />;
	}

	return (
		<>
			<Navbar fluid rounded>
				<Navbar.Brand as={Link} href="/">
					<Image
						src="/icons/icons.png"
						className="mr-3 h-6 sm:h-9"
						alt="KhStore Logo"
						width={100}
						height={100}
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<button
						onClick={() => router.push("/dashboard")}
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
						Dashboard
					</button>

					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar.Link as={Link} href="/" active={pathName === '/'} >
						<p className="text-lg">Home</p>
					</Navbar.Link>
					<Navbar.Link as={Link} href="/about" active={pathName === '/about'}>
						<p className="text-lg">About</p>
					</Navbar.Link>
					<Navbar.Link as={Link} href="/policy" active={pathName === '/policy'}>
						<p className="text-lg">Policy</p>
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
