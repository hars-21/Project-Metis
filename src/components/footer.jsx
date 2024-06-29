import React from "react";
function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
			<p>© {year} Project Mētis</p>
			<ul className="flex space-x-4">
				<li>
					<a href="#" className="hover:text-gray-400">
						Terms
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-gray-400">
						Privacy
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-gray-400">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
