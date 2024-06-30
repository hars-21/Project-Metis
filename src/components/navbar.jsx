// import React from "react";

// function Navbar() {
// 	return (
// 		<nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
// 			<div className="text-white text-xl font-bold">Project Mētis</div>
// 			<ul className="hidden md:flex space-x-4">
// 				<li>
// 					<a
// 						href="#"
// 						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
// 					>
// 						Home
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href="#"
// 						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
// 					>
// 						About
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href="#"
// 						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
// 					>
// 						Products
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href="#"
// 						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
// 					>
// 						Contact
// 					</a>
// 				</li>
// 			</ul>
// 			<button className="md:hidden focus:outline-none text-white hover:text-gray-400 px-3 py-2 rounded-md">
// 				<svg
// 					className="h-6 w-6"
// 					fill="none"
// 					viewBox="0 0 24 24"
// 					stroke="currentColor"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth={2}
// 						d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0zM2 16a2 2 0 104 0 2 2 0 00-4 0z"
// 					/>
// 				</svg>
// 			</button>
// 		</nav>
// 	);
// }

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-900 text-gray-300">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				{/* Logo */}
				<div className="text-2xl font-bold text-white">Project Mētis</div>

				{/* Menu Toggle Button for Mobile */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-300 focus:outline-none"
					>
						<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
							{isOpen ? (
								<path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path fillRule="evenodd" d="M4 5h16M4 12h16m-7 7h7" />
							)}
						</svg>
					</button>
				</div>

				{/* Navigation Links */}
				<div
					className={`lg:flex items-center ${
						isOpen ? "block" : "hidden"
					} w-full lg:w-auto`}
				>
					<ul className="lg:flex lg:space-x-6 mt-3 lg:mt-0 text-center">
						<li className="mt-3 lg:mt-0">
							<a href="/" className="block text-white hover:text-gray-400">
								Home
							</a>
						</li>
						<li className="mt-3 lg:mt-0">
							<a href="/about" className="block text-white hover:text-gray-400">
								About
							</a>
						</li>
						<li className="mt-3 lg:mt-0">
							<a
								href="/services"
								className="block text-white hover:text-gray-400"
							>
								Services
							</a>
						</li>
						<li className="mt-3 lg:mt-0">
							<a
								href="/contact"
								className="block text-white hover:text-gray-400"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
