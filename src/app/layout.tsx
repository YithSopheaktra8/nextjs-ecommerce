import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import UserNavbarComponent from "@/components/UserNavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import FooterComponent from "@/components/FooterComponent";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "KhStore",
	description: "khmer ecommerce website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
			<link rel="icon" href="/icons/icons.png" sizes="2" />
				<UserNavbarComponent />
				<Suspense fallback={<Loading />}>{children}</Suspense>
				<FooterComponent />
			</body>
		</html>
	);
}
