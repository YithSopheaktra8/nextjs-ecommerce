"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > window.innerHeight / 2); // Show button when scrolled halfway down the viewport
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`fixed bottom-4 right-4 rounded-full p-2 bg-slate-500 opacity-45 text-white outline-none transition-opacity duration-200 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={scrollToTop}>
			<ChevronUp />
		</button>
	);
};

export default ScrollToTopButton;
