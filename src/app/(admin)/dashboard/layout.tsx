import SidebarComponent from "@/components/SidebarComponent";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<SidebarComponent />
			{children}
		</div>
	);
}
