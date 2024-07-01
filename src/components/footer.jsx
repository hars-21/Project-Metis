// import React from "react";
// function Footer() {
// 	const year = new Date().getFullYear();

// 	return (
// 		<footer className="bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
// 			<p>© {year} Project Mētis</p>
// 			<ul className="flex space-x-4">
// 				<li>
// 					<a href="#" className="hover:text-gray-400">
// 						Terms
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" className="hover:text-gray-400">
// 						Privacy
// 					</a>
// 				</li>
// 				<li>
// 					<a href="#" className="hover:text-gray-400">
// 						Contact
// 					</a>
// 				</li>
// 			</ul>
// 		</footer>
// 	);
// }

import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between">
					{/* Logo and Description */}
					<div className="mb-6 md:mb-0">
						<h2 className="text-3xl font-bold">Project Metis</h2>
						<p className="mt-2 text-gray-400">
							Your go-to platform for discovering the best AI tools in the
							market.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="mb-6 md:mb-0">
						<h3 className="text-xl font-semibold mb-2">Navigation</h3>
						<ul>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									AI Library
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Use Cases
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Resources Links */}
					<div className="mb-6 md:mb-0">
						<h3 className="text-xl font-semibold mb-2">Resources</h3>
						<ul>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Tutorials
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Support
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-semibold mb-2">Contact Us</h3>
						<p className="text-gray-400">Email: contact@projectmetis.com</p>
						<p className="text-gray-400">Phone: +123 456 7890</p>
						<div className="mt-4">
							<a href="#" className="text-gray-400 hover:text-white mr-4">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white mr-4">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white mr-4">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								<i className="fab fa-github"></i>
							</a>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-gray-700 mt-6 pt-6 text-center">
					<p className="text-gray-400">
						&copy; 2024 Project Metis. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
