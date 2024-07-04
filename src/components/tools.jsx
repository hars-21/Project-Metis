// import React from "react";

// function AiLibrary() {
// 	const aiTools = [
// 		{
// 			name: "ChatGPT",
// 			description: "A large language model chatbot developed by OpenAI.",
// 			category: "genAI",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Gemini",
// 			description:
// 				"A large language model from Google AI, capable of generating text.",
// 			category: "genAI",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Claude",
// 			description:
// 				"A large language model by Anthropic AI, focused on informative and comprehensive responses.",
// 			category: "genAI",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Bard (Google AI)",
// 			description:
// 				"Generates creative text formats, translates languages, and writes different content.",
// 			category: "Text & Code",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Cohere",
// 			description:
// 				"AI platform offering summarization, translation, and writing assistance.",
// 			category: "Text & Code",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "GitHub Copilot",
// 			description:
// 				"AI code completion tool suggesting code snippets and functions.",
// 			category: "Text & Code",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Eleven Labs",
// 			description: "A platform for creating realistic AI voices.",
// 			category: "audio",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Jukebox (OpenAI)",
// 			description: "Generates realistic musical pieces in various styles.",
// 			category: "audio",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Murf.ai",
// 			description: "Creates realistic AI voices from text for various uses.",
// 			category: "audio",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "DALL-E 2 (OpenAI)",
// 			description:
// 				"Generates images from text descriptions with high detail and creativity.",
// 			category: "Video & Image",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "NightCafe Creator",
// 			description:
// 				"AI art platform for creating unique artwork with different styles.",
// 			category: "Video & Image",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "RunwayML",
// 			description:
// 				"Offers AI tools for video editing, green screen removal, etc.",
// 			category: "Video & Image",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "Autodesk Generative Design",
// 			description:
// 				"AI tool for product design and optimization, exploring various design options.",
// 			category: "Design",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "اعة (Aadhya) (Design.ai)",
// 			description:
// 				"AI design tool for logos, social media graphics, and presentations.",
// 			category: "Design",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "RapidMiner",
// 			description:
// 				"Provides a platform for data science tasks like data preparation, etc.",
// 			category: "Data & Analytics",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "DataRobot",
// 			description:
// 				"Automates machine learning tasks and provides predictive analytics.",
// 			category: "Data & Analytics",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 		{
// 			name: "H2O.ai",
// 			description:
// 				"Open-source AI platform for machine learning and predictive analytics.",
// 			category: "Data & Analytics",
// 			image: "https://via.placeholder.com/150x150", // Replace with actual image
// 		},
// 	];

// 	return (
// 		<section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
// 			{aiTools.map((tool) => (
// 				<AiToolCard key={tool.name} tool={tool} />
// 			))}
// 		</section>
// 	);
// }

// function AiToolCard({ tool }) {
// 	return (
// 		<div className="rounded-lg shadow-md overflow-hidden">
// 			<img
// 				className="w-full h-40 object-cover"
// 				src={tool.image}
// 				alt={tool.name}
// 			/>
// 			<div className="p-4">
// 				<h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
// 				<p className="text-gray-600 mb-4">{tool.description}</p>
// 				<div className="flex items-center text-sm text-gray-500">
// 					<span className="mr-2">Category:</span>
// 					<span className="font-medium">{tool.category}</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default AiLibrary;

import React from "react";

const aiTools = {
	GenAI: [
		{
			name: "ChatGPT",
			description: "OpenAI's language model",
			url: "https://chatgpt.com/",
		},
		{
			name: "Gemini",
			description: "Gemini AI tool",
			url: "https://gemini.google.com/app",
		},
		{
			name: "Claude",
			description: "Anthropic's AI assistant",
			url: "https://claude.ai/",
		},
		{
			name: "Meta AI",
			description: "Meta's AI trained on Llama 3",
			url: "https://www.meta.ai/",
		},
		{
			name: "Llama 3",
			description: "AI-powered language model by Llama",
			url: "https://llama.meta.com/",
		},
	],
	Audio: [
		{ name: "Eleven Labs", description: "AI-powered audio tool", url: "#" },
		{
			name: "Auphonic",
			description: "Audio post-production web service",
			url: "https://elevenlabs.io/",
		},
		{ name: "Descript", description: "Audio and video editing tool", url: "#" },
		{ name: "Voicery", description: "Text-to-speech AI", url: "#" },
		{
			name: "Resemble AI",
			description: "Voice cloning and synthetic media",
			url: "#",
		},
	],
	Design: [
		{ name: "Luma AI", description: "AI design assistant", url: "#" },
		{ name: "Uizard", description: "UI design tool", url: "#" },
		{ name: "Gamma", description: "Design AI tool", url: "#" },
		{
			name: "Canva",
			description: "Online design and publishing tool",
			url: "#",
		},
		{ name: "Figma", description: "Interface design tool", url: "#" },
	],
	Image: [
		{
			name: "DALL-E",
			description: "OpenAI's image generation model",
			url: "#",
		},
		{
			name: "DeepArt",
			description: "Transform photos into artworks",
			url: "#",
		},
		{
			name: "RunwayML",
			description: "Create and train machine learning models",
			url: "#",
		},
		{
			name: "Artbreeder",
			description: "Create images through AI breeding",
			url: "#",
		},
		{ name: "NVIDIA GauGAN", description: "Real-time painting tool", url: "#" },
	],
	Video: [
		{ name: "Synthesia", description: "AI video creation platform", url: "#" },
		{ name: "Pictory", description: "AI video editing tool", url: "#" },
		{ name: "Lumen5", description: "AI video creator", url: "#" },
		{ name: "Magisto", description: "AI-powered video editing", url: "#" },
		{
			name: "Animoto",
			description: "Video creation and editing platform",
			url: "#",
		},
	],
};

const AILibrary = () => {
	return (
		<div className="container mx-auto px-6 py-8">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
				AI Tools Library
			</h2>
			{Object.keys(aiTools).map((category) => (
				<div key={category} className="mb-12">
					<h3 className="text-2xl font-semibold text-gray-700 mb-4">
						{category}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{aiTools[category].map((tool) => (
							<div
								key={tool.name}
								className="bg-white shadow-md rounded-lg p-6"
							>
								<h4 className="text-xl font-semibold text-gray-800">
									{tool.name}
								</h4>
								<p className="mt-2 text-gray-600">{tool.description}</p>
								<a
									href={tool.url}
									className="mt-4 inline-block text-indigo-600 hover:underline"
								>
									Learn more
								</a>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default AILibrary;
