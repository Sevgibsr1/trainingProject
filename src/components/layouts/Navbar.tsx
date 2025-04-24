import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
	onOpenSidebar?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	const [] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 bg-[#0A2647] shadow-lg z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center space-x-4">
						{/* Sidebar Toggle Button */}
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={onOpenSidebar}
							className="p-2 rounded-md text-amber-50 hover:text-amber-200 hover:bg-[#0d2f54] transition-colors duration-200"
							aria-label="Toggle Sidebar"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>

						{/* Logo */}
						<Link to="/" className="flex-shrink-0 flex items-center">
							<span className="text-amber-50 text-xl font-bold">
								BAŞAR YAZILIM KURDU
							</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex md:items-center md:space-x-4">
						<Link
							to="/home"
							className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium"
						>
							Ana Sayfa
						</Link>
						<Link
							to="/about"
							className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium"
						>
							Hakkımızda
						</Link>
						<Link
							to="/courses"
							className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium"
						>
							Kurslar
						</Link>
						<Link
							to="/contact"
							className="text-amber-50 hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium"
						>
							İletişim
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
