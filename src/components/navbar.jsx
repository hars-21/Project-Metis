import React from "react";

function Navbar() {
	return (
		<nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
			<div className="text-white text-xl font-bold">Project Mētis</div>
			<ul className="hidden md:flex space-x-4">
				<li>
					<a
						href="#"
						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#"
						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#"
						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
					>
						Products
					</a>
				</li>
				<li>
					<a
						href="#"
						className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
					>
						Contact
					</a>
				</li>
			</ul>
			<button className="md:hidden focus:outline-none text-white hover:text-gray-400 px-3 py-2 rounded-md">
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0zM2 16a2 2 0 104 0 2 2 0 00-4 0z"
					/>
				</svg>
			</button>
		</nav>
	);
}

export default Navbar;
