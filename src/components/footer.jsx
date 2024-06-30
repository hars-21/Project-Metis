import React from "react";
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

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="container mx-auto flex flex-wrap justify-between items-center px-6">
				{/* Logo and Company Info */}
				<div className="w-full lg:w-1/3 mb-6 lg:mb-0">
					<h2 className="text-2xl font-bold text-white">Project Mētis</h2>
					<p className="mt-2">
						Your one-stop platform to discover and explore the best AI tools
						available.
					</p>
					<p className="mt-2">
						&copy; {new Date().getFullYear()} Project Mētis. All rights
						reserved.
					</p>
				</div>

				{/* Navigation Links */}
				<div className="w-full lg:w-1/3 mb-6 lg:mb-0">
					<h3 className="text-xl font-semibold text-white">Quick Links</h3>
					<ul className="mt-2">
						<li className="mt-1">
							<a href="/about" className="hover:underline">
								About Us
							</a>
						</li>
						<li className="mt-1">
							<a href="/services" className="hover:underline">
								Services
							</a>
						</li>
						<li className="mt-1">
							<a href="/contact" className="hover:underline">
								Contact
							</a>
						</li>
						<li className="mt-1">
							<a href="/faq" className="hover:underline">
								FAQ
							</a>
						</li>
					</ul>
				</div>

				{/* Social Media Icons */}
				<div className="w-full lg:w-1/3">
					<h3 className="text-xl font-semibold text-white">Follow Us</h3>
					<div className="flex mt-2">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 text-gray-400 hover:text-white"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 text-gray-400 hover:text-white"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 text-gray-400 hover:text-white"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 text-gray-400 hover:text-white"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
