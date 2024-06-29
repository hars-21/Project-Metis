import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import GradientCard from "./components/card";
import Footer from "./components/footer";

function App() {
	return (
		<div className="h-screen">
			<Navbar />
			<HeroSection />
			<div className="flex justify-center items-center flex-wrap">
				<GradientCard
					title="ChatGPT"
					description="ChatGPT is a large language model trained to generate human-like responses to given inputs."
				/>
				<GradientCard
					title="Claude 2"
					description="Claude 2 is an advanced AI model for natural language processing tasks."
				/>
				<GradientCard
					title="BERT"
					description="BERT is a transformer-based machine learning technique for natural language processing."
				/>
				<GradientCard
					title="OpenAI GPT-3"
					description="GPT-3 is an autoregressive language model that uses deep learning to produce human-like text."
				/>
				<GradientCard
					title="Transformer"
					description="Transformer is a deep learning model used in natural language processing."
				/>
				<GradientCard
					title="ELMo"
					description="ELMo is a deep contextualized word representation that models both complex characteristics of word use and how these uses vary across linguistic contexts."
				/>
				<GradientCard
					title="T5"
					description="T5 is a transformer model that is trained on a new dataset called Causal Language Modeling."
				/>
				<GradientCard
					title="DistilBERT"
					description="DistilBERT is a small, fast, cheap and light Transformer model trained by distilling BERT base."
				/>
				<GradientCard
					title="RoBERTa"
					description="RoBERTa is a robustly optimized BERT pretraining approach."
				/>
				<GradientCard
					title="XLNet"
					description="XLNet is a generalized autoregressive pretraining method that outperforms BERT on several NLP benchmarks."
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
