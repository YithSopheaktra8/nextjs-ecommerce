import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import UserNavbarComponent from "@/components/UserNavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import FooterComponent from "@/components/FooterComponent";
import ScrollToTopButton from "@/components/ScrollTopComponent";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "KhStore ecommerce website",
	description:
		"khmer ecommerce website for shopping online in cambodia with free delivery and cash on delivery payment method for all products and services in cambodia and khmer language support for all users in cambodia and khmer people around the world to shop online in cambodia",
	openGraph: {
		title: "KhStore ecommerce website",
		description:
			"khmer ecommerce website for shopping online in cambodia with free delivery and cash on delivery payment method for all products and services in cambodia and khmer language support for all users in cambodia and khmer people around the world to shop online in cambodia",
		type: "website",
		locale: "en_US",
		url: "https://khstore.sen-quiz.tech",
		emails: "yithsopheaktra18@gmail.com",
		phoneNumbers: "+855 96 717 4832",
		siteName: "KhStore",
		countryName: "Cambodia",
		images: "https://store.istad.co/media/icon_images/ecommerce.png",
	},
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
				<ScrollToTopButton />
				<FooterComponent />
			</body>
		</html>
	);
}
