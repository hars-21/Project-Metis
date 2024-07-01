// import React from "react";
// function HeroSection() {
// 	return (
// 		<section className="flex justify-center items-center h-screen bg-gray-100">
// 			<div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-1/2 mx-auto p-4 space-y-4 md:space-y-0 md:space-x-10">
// 				{/* <div className="flex-shrink-0 w-full md:w-1/2">
// 					<img
// 						className="rounded-lg shadow-md object-cover"
// 						src="https://via.placeholder.com/600x400"
// 						alt="Metis AI Tools"
// 					/>
// 				</div> */}
// 				<div className="text-center md:text-left">
// 					<h1 className="text-4xl font-bold leading-tight mb-4">
// 						Unlock the Power of AI Tools - All in One Place
// 					</h1>
// 					<p className="text-gray-700 mb-6">
// 						Empower yourself with Metis, your comprehensive AI toolkit.
// 						Streamline tasks, enhance creativity, and gain data-driven insights.
// 					</p>
// 					<div className="flex flex-wrap justify-center md:justify-start">
// 						<div className="w-full md:w-1/3 mb-4">
// 							<i className="text-blue-500 text-3xl fas fa-robot"></i>
// 							<h3 className="text-lg font-semibold mt-2">AI Automation</h3>
// 							<p className="text-gray-700">
// 								Automate repetitive tasks and improve efficiency.
// 							</p>
// 						</div>
// 						<div className="w-full md:w-1/3 mb-4">
// 							<i className="text-green-500 text-3xl fas fa-chart-line"></i>
// 							<h3 className="text-lg font-semibold mt-2">Data Analytics</h3>
// 							<p className="text-gray-700">
// 								Gain insights from your data and make better decisions.
// 							</p>
// 						</div>
// 						<div className="w-full md:w-1/3 mb-4">
// 							<i className="text-purple-500 text-3xl fas fa-lightbulb"></i>
// 							<h3 className="text-lg font-semibold mt-2">Creative AI</h3>
// 							<p className="text-gray-700">
// 								Spark your creativity with AI-powered content generation.
// 							</p>
// 						</div>
// 					</div>
// 					<button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
// 						Discover AI Tools
// 					</button>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default HeroSection;

import React from "react";

const HeroSection = () => {
	return (
		<section
			className="bg-cover bg-center h-screen"
			style={{
				backgroundImage:
					"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjtBjaRloOPagwDE5Azf_bFQBu_moPMM28Q&s)",
			}}
		>
			<div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Discover the Best AI Tools
				</h1>
				<p className="text-lg md:text-2xl mb-8">
					Explore and find the perfect AI solutions for your needs.
				</p>
				<div className="space-x-4">
					<a
						href="/explore"
						className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
					>
						Explore Now
					</a>
					<a
						href="/contact"
						className="px-6 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
					>
						Contact Us
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
