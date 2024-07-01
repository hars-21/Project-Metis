import React from "react";

const useCases = [
	{
		industry: "Healthcare",
		title: "Improving Patient Diagnostics with ChatGPT",
		description:
			"How ChatGPT is being used to assist doctors in diagnosing patient conditions more accurately and efficiently.",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
		link: "#",
	},
	{
		industry: "Finance",
		title: "Enhancing Fraud Detection with Gemini",
		description:
			"Gemini's role in helping financial institutions detect and prevent fraudulent transactions.",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKJPAiOWm8WjOkRH0OuLltm8xRbyNUeSvcA&s",
		link: "#",
	},
	{
		industry: "Marketing",
		title: "Boosting Campaign Efficiency with AI-Powered Analytics",
		description:
			"Discover how marketing teams are leveraging AI tools like GPT-3 to analyze customer data, predict trends, and create personalized marketing campaigns that drive higher engagement and conversion rates.",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmru03HsqBJeAhZeBYUa67XHc3qZKbwsbhDA&s",
		link: "#",
	},
	{
		industry: "Education",
		title: "Transforming Online Learning with Personalized AI Tutors",
		description:
			"Explore how educational institutions are using AI tools such as Claude to provide personalized tutoring, generate interactive learning content, and offer real-time feedback to students, enhancing the online learning experience.",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0GSQQI-oNDXZfa4eY8Wjg6GvmvkZcPzh4Q&s",
		link: "#",
	},
	{
		industry: "Retail",
		title: "Revolutionizing E-commerce with AI-Powered Recommendations",
		description:
			"Learn how AI recommendation engines like Gemini are being integrated into e-commerce platforms to provide personalized product recommendations, optimize inventory management, and improve customer satisfaction.",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7MG4cDV4zB-_iBmXgtQhzXOESlvi4xmlzg&s",
		link: "#",
	},
];

const AIUseCases = () => {
	return (
		<div className="container mx-auto px-6 py-8">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
				AI Use Cases and Success Stories
			</h2>
			{useCases.map((useCase, index) => (
				<div key={index} className="mb-12">
					<h3 className="text-2xl font-semibold text-gray-700 mb-4">
						{useCase.industry}
					</h3>
					<div className="flex flex-col md:flex-row items-center mb-6">
						<img
							src={useCase.imageUrl}
							alt={useCase.title}
							className="w-full md:w-1/2 rounded-lg shadow-md"
						/>
						<div className="md:ml-6 mt-4 md:mt-0">
							<h4 className="text-xl font-semibold text-gray-800">
								{useCase.title}
							</h4>
							<p className="mt-2 text-gray-600">{useCase.description}</p>
							<a
								href={useCase.link}
								className="mt-4 inline-block text-indigo-600 hover:underline"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AIUseCases;
