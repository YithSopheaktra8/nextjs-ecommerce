import SidebarComponent from "@/components/SidebarComponent";
import { Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<SidebarComponent />
			{children}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				closeOnClick
				pauseOnHover
				transition={Slide}
			/>
		</div>
	);
}
