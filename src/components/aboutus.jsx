import React from "react";

const AboutUs = () => {
	return (
		<div className="container mx-auto px-6 py-12">
			<h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
				About Us
			</h1>

			<div className="text-lg text-gray-700 mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Welcome to Project Metis
				</h2>
				<p className="mb-4">
					At Project Metis, we are dedicated to creating a comprehensive and
					user-friendly platform where you can explore and discover the best AI
					tools available in the market. Our mission is to empower individuals
					and businesses to harness the power of artificial intelligence by
					providing easy access to a wide range of tools, resources, and
					insights.
				</p>
			</div>

			<div className="text-lg text-gray-700 mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Our Vision
				</h2>
				<p className="mb-4">
					We envision a future where AI technology is accessible to everyone,
					enabling innovation and transforming industries across the globe. By
					curating the best AI tools and resources, we aim to be at the
					forefront of this technological revolution, guiding and supporting our
					users every step of the way.
				</p>
			</div>

			<div className="text-lg text-gray-700 mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					What We Offer
				</h2>
				<p className="mb-4">
					Our platform features a diverse range of AI tools, categorized for
					easy navigation and comparison. Whether you are looking for tools in
					natural language processing, computer vision, audio analysis, or any
					other AI domain, Project Metis has got you covered. Each tool is
					accompanied by detailed descriptions, user reviews, and use cases to
					help you make informed decisions.
				</p>
				<p className="mb-4">
					Additionally, we offer a rich repository of resources including
					tutorials, articles, and case studies to enhance your understanding
					and application of AI technologies. Our community-driven approach
					ensures that you have access to the latest trends, insights, and
					support from fellow AI enthusiasts and experts.
				</p>
			</div>

			<div className="text-lg text-gray-700 mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Our Community
				</h2>
				<p className="mb-4">
					We believe in the power of community and collaboration. At Project
					Metis, we strive to build a vibrant community of AI users, developers,
					and enthusiasts who can share their knowledge, experiences, and
					innovations. Join us in our forums, participate in discussions, and
					contribute to our growing library of resources.
				</p>
			</div>

			<div className="text-lg text-gray-700 mb-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Get in Touch
				</h2>
				<p className="mb-4">
					We are always here to help and support you in your AI journey. If you
					have any questions, feedback, or suggestions, please do not hesitate
					to reach out to us. Together, we can explore the limitless
					possibilities of artificial intelligence and make a lasting impact.
				</p>
			</div>

			<div className="text-center">
				<a
					href="/contact"
					className="inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
				>
					Contact Us
				</a>
			</div>
		</div>
	);
};

export default AboutUs;
